# アプリ設計方針

## 概要

本アプリは **Next.js / React** をベースとし、**MVVM（Model–View–ViewModel）パターン** を採用している。
ロジックはカスタムフックに完全にカプセル化し、コンポーネントは受け取った props を描画するだけの **Pure View** として構成する。
これにより、UI とビジネスロジックの責務を明確に分離し、各層を独立してテスト・変更できる設計を実現する。

---

## 責務レイヤー一覧

```
┌─────────────────────────────────────────────────────────────────┐
│  Components（View）                                              │
│  ・props を受け取り描画するだけの Pure View                       │
│  ・ロジック・状態管理を一切持たない                               │
└───────────────────────────┬─────────────────────────────────────┘
                            │ props（TopPageComps）
┌───────────────────────────▼─────────────────────────────────────┐
│  useTopViewModel（ViewModel エントリーポイント）                  │
│  ・Contexts / Composer / Controls を統合し TopViewModels を返す  │
└──────────┬─────────────────────────┬────────────────────────────┘
           │                         │
┌──────────▼───────────┐  ┌──────────▼──────────────────────────┐
│  Contexts（Model）   │  │  Composer（ViewModel 構築層）        │
│  ・状態と制御ハンドラ │  │  ・Handlers / Property を合成し     │
│    を提供            │  │    UI コンポーネント向けオブジェクト  │
└──────────┬───────────┘  │    を構築                           │
           │              └─────────────────────────────────────┘
    ┌──────┴───────┐
    │              │
┌───▼──────┐ ┌────▼─────┐
│ Reducers │ │ Services │
│ 状態保持  │ │ 外部連携  │
└──────────┘ └──────────┘
```

---

## 各レイヤーの詳細

### Components — Pure View

**ディレクトリ**: `src/components/`

- props オブジェクト（`TopPageComps` 型）を受け取り、JSX を返すだけの純粋なコンポーネント
- 状態・副作用・ビジネスロジックを一切持たない
- コンポーネント間の依存は型定義（`src/types/top/components.ts`）の DDL を介してのみ行う
- UI の構造定義は DDL（Data Definition Layout）として型で先に確定し、コンポーネント実装はその型に従う

```
src/components/top/
├── page/       # ページ全体のレイアウト（TopPage / TopPageBodies / TopPageModals 等）
├── preset/     # Preset ドメインの UI
├── notion/     # Notion ドメインの UI
├── editor/     # Editor ドメインの UI
└── utils/      # 共通 Shell / UI パーツ
```

---

### ViewModel エントリーポイント — `useTopViewModel`

**ファイル**: `src/hooks/top/useTopViewModel.ts`

- アプリの ViewModel 層のルートとなるカスタムフック
- `useTopContexts` / `useTopComposer` / `useTopControls` を統合し、`TopViewModels`（= `TopPageComps`）を返す
- Components はこのフックが返す値をそのまま props として受け取る

```ts
const { viewmodels } = useTopViewModel();
return <TopPage props={viewmodels} />;
```

---

### Contexts — 状態情報・制御ハンドラの提供

**ディレクトリ**: `src/hooks/top/contexts/`  
**型**: `TopContexts`（`src/types/top/viewmodels.ts`）

**責務**
- 画面表示に必要な状態、API・外部ファイル連携による状態を管理する
- `Reducers`（状態保持）と `Services`（外部連携）を組み合わせ、上位レイヤーへ状態と操作インターフェースを提供する

**構成**
```
useTopContexts
├── useTopPageContexts   # ページ全体の状態（タブ選択、モーダル表示フラグ）
├── usePresetContexts    # Preset ドメインの状態（テンプレート、テーブルデータ）
├── useNotionContexts    # Notion ドメインの状態（記事リスト、選択記事）
└── useEditorContexts    # Editor ドメインの状態（フォーム、チップス、ノート）
```

**サブレイヤー**

| フック | 役割 |
|---|---|
| `Reducers` | `useReducer` による状態の保持と dispatch の提供 |
| `Services` | 外部 API（Notion API）・ファイル I/O のラッパー |

---

### Composer — ViewModel の構築

**ディレクトリ**: `src/hooks/top/composer/`  
**型**: `TopComposed`（`src/types/top/viewmodels.ts`）

**責務**
- `Handlers` と `Property` を受け取り、コンポーネントが直接利用できる形（DDL と同じ形状）のオブジェクトを構築する
- 画面情報の組み立てのみを担い、状態管理や副作用は持たない

**構成**
```
useTopComposer
├── useTopHandlers   # イベントハンドラの集約
│   ├── useTopPageHandlers
│   ├── usePresetHandlers
│   ├── useNotionHandlers
│   └── useEditorHandlers
├── useTopProperty   # 状態→UI向けデータへの変換
│   ├── useTopPageProperty
│   ├── usePresetProperty
│   ├── useNotionProperty
│   └── useEditorProperty
└── 各ドメイン Composer（フレーム / ボディ / モーダルを構築）
    ├── useTopPageComposer
    ├── usePresetComposer
    ├── useNotionComposer
    └── useEditorComposer
```

**サブレイヤー**

| フック | 役割 |
|---|---|
| `Handlers` | UI イベント（onClick / onChange 等）に対応するコールバック関数を構築。Contexts の dispatch を呼び出す |
| `Property` | Contexts から受け取った状態を、コンポーネント型（Comps）に適合するデータ形式に変換する |

---

### Controls — 副作用管理

**ディレクトリ**: `src/hooks/top/controls/`

**責務**
- レイヤー間・ドメイン間での連携制御と副作用（`useEffect`）を管理する
- **返却値は持たない**。状態の変化を監視し、必要な通知や dispatch を実行するだけ

**構成**
```
useTopControls
├── useTopPageControls  # 初期表示時のデフォルト設定
├── usePresetControls   # Services 結果 → Reducers への反映
├── useNotionControls   # API 取得結果の同期、リロードトリガー制御
└── useEditorControls   # タブ切り替え時のフォームリセット
```

---

## データフロー

```
外部入力（ユーザー操作）
        │
        ▼
  Handlers（onClick / onChange）
        │
        ▼
  Reducers の dispatch / Services の呼び出し
        │
        ▼
  状態更新（Reducers state）
        │
        ▼
  Contexts（状態を集約して公開）
        │
        ├──► Property（状態 → UI データに変換）
        │           │
        │           ▼
        │    Composer（Handlers + Property → Comps 型オブジェクト）
        │           │
        ▼           ▼
  Controls       TopViewModels（= TopPageComps）
  （副作用監視）         │
                        ▼
                  Components（Pure View）
```

---

## ドメイン分割

画面はタブで切り替えられる 3 つのドメインと、ページ全体の枠（page）で構成される。

| ドメイン | 概要 |
|---|---|
| `page` | ヘッダー・フッター・タブ切り替え・モーダルオーバーレイなどページ全体の枠組み |
| `preset` | プロンプトテンプレート・カテゴリ・方向データの管理（ファイル I/O 含む） |
| `notion` | Notion API と連携した記事一覧の表示・カラー情報管理 |
| `editor` | プロンプト生成フォーム・チップス・ノート入力のエディタ機能 |

各ドメインは `contexts` / `composer` / `controls` / `handlers` / `property` / `reducers` / `services` の各フックにそれぞれ対応するファイルを持ち、構造が統一されている。

---

## 型定義

**ディレクトリ**: `src/types/top/`

| ファイル | 内容 |
|---|---|
| `components.ts` | DDL（Data Definition Layout）。コンポーネントが受け取る props の型定義。UI 構造の仕様書 |
| `viewmodels.ts` | ViewModel 層の内部型（Composed / Contexts / Handlers / Property / Reducers / Services）|
| `handlers.ts` | 各ドメインのハンドラ型 |
| `properties.ts` | 各ドメインの Property 型（状態→UI変換後の中間データ）|
| `reducers.ts` | 各ドメインの Reducer 型（状態と dispatch）|
| `services.ts` | 各ドメインのサービス型（API / ファイル I/O 関数）|

---

## 設計原則まとめ

| 原則 | 内容 |
|---|---|
| **Pure View** | Components はロジックを持たず、受け取った props を描画するだけ |
| **責務の単一性** | 各フック・ファイルは 1 つの責務のみを担う |
| **型ファースト** | DDL（`components.ts`）を先に定義し、UI 構造を型として確定してから実装する |
| **ドメイン統一構造** | 全ドメインが同じフック階層（contexts / composer / controls 等）で構成される |
| **副作用の集中管理** | `useEffect` は Controls にのみ置き、他のフックは純粋な計算・組み立てのみ行う |

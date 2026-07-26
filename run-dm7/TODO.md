# TODO リスト — ロジック実装

## 概要

UI コンポーネント（Components）の構造実装は完了し、DDL（`src/types/top/components.ts`）を定義済み。
以下のレイヤーについて、型定義の完成とロジック実装が未着手。

---

## 1. 型定義の完成 (`src/types/top/`)

### 1-1. `properties.ts`
- [ ] `TopPageProperty` — タブ選択状態、モーダル表示判定などページ全体のUI向けデータ変換型を定義
- [ ] `PresetProperty` — テンプレート文字列・テーブルデータ（categories / directions）のUI向けデータ変換型を定義
- [ ] `NotionProperty` — 記事リスト・カラーリストのUI向けデータ変換型を定義
- [ ] `EditorProperty` — フォームリスト・チップス・ノート入力のUI向けデータ変換型を定義

### 1-2. `handlers.ts`
- [ ] `TopPageHandlers` — タブ切り替え、モーダルオーバーレイ開閉ハンドラ型を定義
- [ ] `PresetHandlers` — プリセットシート操作・モーダル（ファイルI/O）ハンドラ型を定義
- [ ] `NotionHandlers` — 記事カード選択・カラー選択・リロードハンドラ型を定義
- [ ] `EditorHandlers` — フォーム操作・エントリー入力・チップス・ノート入力ハンドラ型を定義

### 1-3. `reducers.ts`
- [ ] `TopPageReducers` — タブ選択値、モーダル表示フラグ等の状態と dispatch 型を定義
- [ ] `PresetReducers` — テンプレート文字列・カテゴリ/方向テーブル状態の型を定義
- [ ] `NotionReducers` — 記事リスト・選択記事・カラーリスト状態の型を定義
- [ ] `EditorReducers` — フォームリスト・チップス・ノート入力状態の型を定義

### 1-4. `services.ts`
- [ ] `TopPageServices` — ページ全体向けサービス（現状なし可能性あり）の型を定義
- [ ] `PresetServices` — テンプレート / カテゴリ / 方向データのファイル読み書き API 型を定義
- [ ] `NotionServices` — Notion API 連携（記事取得・リロード）の型を定義
- [ ] `EditorServices` — エディタ向けサービス（現状なし可能性あり）の型を定義

### 1-5. `viewmodels.ts` — 空型の補完
- [ ] `TopPageComposed` に `frames` / `bodies` / `modals` フィールドを追加
- [ ] `PresetComposed` に `bodies` / `modals` フィールドを追加
- [ ] `NotionComposed` に `bodies` / `modals` フィールドを追加
- [ ] `EditorComposed` に `bodies` / `modals` フィールドを追加
- [ ] `TopPageContexts` に必要なコンテキストフィールドを追加
- [ ] `PresetContexts` に必要なコンテキストフィールドを追加
- [ ] `NotionContexts` に必要なコンテキストフィールドを追加
- [ ] `EditorContexts` に必要なコンテキストフィールドを追加

---

## 2. Reducers 実装 (`src/hooks/top/reducers/`)

**責務**: `useReducer` による状態保持と dispatch の提供

- [ ] `useTopPageReducers.ts`
  - タブ選択インデックス（selector value）の状態管理
  - モーダルオーバーレイ / 各ドメインモーダル表示フラグの状態管理
- [ ] `usePresetReducers.ts`
  - テンプレート（positive / negative）文字列の状態管理
  - テーブルタブ選択インデックスの状態管理
  - カテゴリ・方向リストの状態管理（除外・削除フラグ含む）
- [ ] `useNotionReducers.ts`
  - 記事リストの状態管理
  - 選択中記事（モーダル表示対象）の状態管理
  - カラーリストの状態管理
- [ ] `useEditorReducers.ts`
  - フォームカードリストの状態管理（セクション・ラジオ選択含む）
  - エントリー入力値の状態管理
  - チップス（main / sub）の状態管理
  - ノート入力値（ideasNotes / colorsNotes）の状態管理

---

## 3. Services 実装 (`src/hooks/top/services/`)

**責務**: 外部 API・ファイルアクセスの提供

- [ ] `useTopPageServices.ts` — 必要に応じて実装（不要であれば空のままでよい）
- [ ] `usePresetServices.ts`
  - テンプレート / カテゴリ / 方向データの JSON ファイルエクスポート
  - テンプレート / カテゴリ / 方向データの JSON ファイルインポート（ファイル選択 → 読み込み）
- [ ] `useNotionServices.ts`
  - Notion API から記事一覧を取得する関数
  - リロード（再取得）トリガーの提供
- [ ] `useEditorServices.ts` — 必要に応じて実装（不要であれば空のままでよい）

---

## 4. Contexts 実装 (`src/hooks/top/contexts/`)

**責務**: Reducers・Services を組み合わせた状態情報と制御ハンドラの提供

- [ ] `useTopPageContexts.ts`
  - タブ選択状態・モーダル表示フラグを contexts として集約
  - 開閉 dispatch を公開
- [ ] `usePresetContexts.ts`
  - テンプレート文字列・テーブルデータ状態を contexts として集約
  - Services からのファイル I/O 結果を状態に反映する仕組みを提供
- [ ] `useNotionContexts.ts`
  - Services から取得した記事リスト・カラーリストを状態に格納
  - 選択中記事の管理を contexts として集約
- [ ] `useEditorContexts.ts`
  - フォームリスト・チップス・ノートの状態を contexts として集約

---

## 5. Handlers 実装 (`src/hooks/top/handlers/`)

**責務**: UI イベントに対応するコールバック関数の構築

- [ ] `useTopPageHandlers.ts`
  - `selector.onChange` — タブ切り替え dispatch
  - `modals.overlay.onClose` — モーダルオーバーレイクローズ dispatch
- [ ] `usePresetHandlers.ts`
  - `templates.positive / negative` 入力フィールドの `onChange`
  - `tableData.selector.onChange` — テーブルタブ切り替え
  - カテゴリ・方向行の `exclude.onClick` / `deleted.onClick`
  - モーダルの `close.onClick`
  - ファイルマネージャの `exports.onClick` / `uploads.onUpload`
- [ ] `useNotionHandlers.ts`
  - `header.reload.onClick` — 記事リストの再取得
  - `articleItem` カードの `onClick` — 選択記事設定・記事モーダル表示
  - `colorsItem` の `onClick` — カラーモーダル表示
  - モーダルノートの `onChange` / `close.onClick`
- [ ] `useEditorHandlers.ts`
  - `formsItem` 各カードの `shuffle.onClick`
  - セクション行の `reload.onClick` / ラジオ選択 `onClick`
  - `entryItem.field.onChange` / `reset.onClick` / `clear.onClick`
  - チップス `main.chips` / `sub.chips` の操作
  - `notesItem` の各 `notes.onChange`
  - モーダルの `close.onClick` / prompt `copies.onClick` / `prompt.onChange`

---

## 6. Property 実装 (`src/hooks/top/property/`)

**責務**: Contexts から受け取った状態をコンポーネント向けデータ構造に変換

- [ ] `useTopPageProperty.ts`
  - タブ選択値・リストラベルを `TabSelectItemComps` 向けに変換
  - モーダル表示フラグをドメイン別に振り分け
- [ ] `usePresetProperty.ts`
  - テンプレート文字列を `InputItemComps` 向けに変換
  - テーブルデータを `PresetTableDataItemComps` 向けに変換（行ごとのフラグ含む）
- [ ] `useNotionProperty.ts`
  - 記事リストを `NotionArticleGridComps[]` 向けに変換
  - 選択中記事を `NotionArticleItemComps` 向けに変換
  - カラーリストを `NotionColorsGridComps[]` 向けに変換
- [ ] `useEditorProperty.ts`
  - フォームリストを `EditorFormsCardComps[]` 向けに変換（ラジオグループ含む）
  - チップス・ノートを各 Comps 型向けに変換

---

## 7. Composer 実装 (`src/hooks/top/composer/`)

**責務**: Handlers・Property を組み合わせて ViewModel（DDL と同じ形状）を構築

- [ ] `useTopPageComposer.ts`
  - `frames` — `header` / `footer` 向けのフレーム情報を構築
  - `bodies` — `selector` 構築、各ドメインシートへの振り分け（`preset?` / `notion?` / `editor?`）
  - `modals` — `overlay` 構築、各ドメインモーダルへの振り分け（`preset?` / `notion?` / `editor?`）
- [ ] `usePresetComposer.ts`
  - `bodies.preset` — `templates` / `tableData` を構築
  - `modals.preset` — `header` / `templates` / `categories` / `directions` のファイルマネージャを構築
- [ ] `useNotionComposer.ts`
  - `bodies.notion` — `header` / `articleItem` リストを構築
  - `modals.notion` — `articleItem?` / `colorsItem?` モーダルを構築
- [ ] `useEditorComposer.ts`
  - `bodies.editor` — `formsItem` カードリスト / `notesItem` を構築
  - `modals.editor` — `header` / `positive` / `negative` プロンプトフィールドを構築

---

## 8. Controls 実装 (`src/hooks/top/controls/`)

**責務**: レイヤー間・ドメイン間の副作用管理（`useEffect` による監視と通知のみ、返却値なし）

- [ ] `useTopPageControls.ts`
  - 初期表示時のデフォルトタブ設定などの副作用
- [ ] `usePresetControls.ts`
  - Services のファイル読み込み結果が変化した際に Reducer へ反映
- [ ] `useNotionControls.ts`
  - Services の記事取得結果が変化した際に Reducer へ反映
  - リロードフラグが変化した際に Services を再実行
- [ ] `useEditorControls.ts`
  - タブ切り替え時にエディタフォームをリセット・初期化する副作用

---

## 実装順序の目安

```
型定義 → Reducers → Services → Contexts → Handlers → Property → Composer → Controls
```

各ドメイン（page / preset / notion / editor）ごとに縦断的に実装し、最後に結合確認を行う。

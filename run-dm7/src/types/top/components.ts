type Nullable<T> = T | undefined;
export interface TopPageDDLs {
  header: { header: LabelItemComps };
  bodies: {
    selector: TabSelectItemComps;
    preset: Nullable<{
      templates: {
        positive: { label: LabelItemComps; header: InputItemComps };
        negative: { label: LabelItemComps; header: InputItemComps };
      };
      tableData: {
        selector: TabSelectItemComps;
        categories: Nullable<{
          headerItem: { itemList: LabelItemComps[] };
          bodiesItem: { itemList: { name: LabelItemComps; exclude: CheckItemComps; daleted: CheckItemComps }[] };
        }>;
        directions: Nullable<{
          headerItem: { itemList: LabelItemComps[] };
          bodiesItem: { itemList: { name: LabelItemComps; exclude: CheckItemComps; daleted: CheckItemComps }[] };
        }>;
      };
    }>;
    notion: Nullable<{
      header: { reload: ButtonItemComps };
      articleItem: { itemList: { card: CardShellComps; thmbs: ImageItemComps; title: LabelItemComps }[] };
    }>;
    editor: Nullable<{
      formsItem: {
        itemList: {
          selectItem: {
            shuffle: ButtonItemComps;
            section: { itemList: { selector: { itemList: RadioItemComps[] }; reload: ButtonItemComps }[] };
          };
          entryItem: { field: InputItemComps; reset: ButtonItemComps; clear: ButtonItemComps };
        }[];
      };
      notesItem: {
        chipsNotes: {
          label: LabelItemComps;
          main: { label: LabelItemComps; chips: { item: Nullable<ChipsItemComps> } };
          sub: { label: LabelItemComps; chips: { itemList: ChipsItemComps[] } };
        };
        ideasNotes: { label: LabelItemComps; notes: InputItemComps };
        colorsNotes: { label: LabelItemComps; notes: InputItemComps };
      };
    }>;
  };
  footer: { floating: FabItemComps };
  modals: {
    overlay: ModalShellComps;
    preset: Nullable<{
      header: { label: LabelItemComps; close: ButtonItemComps };
      templates: {
        title: LabelItemComps;
        label: LabelItemComps;
        sources: LabelItemComps;
        exports: ButtonItemComps;
        uploads: ButtonItemComps;
      };
      categories: {
        title: LabelItemComps;
        label: LabelItemComps;
        sources: LabelItemComps;
        exports: ButtonItemComps;
        uploads: ButtonItemComps;
      };
      directions: {
        title: LabelItemComps;
        label: LabelItemComps;
        sources: LabelItemComps;
        exports: ButtonItemComps;
        uploads: ButtonItemComps;
      };
    }>;
    notion: Nullable<{
      articleItem: Nullable<{
        articleItem: { image: ImageItemComps; title: LabelItemComps; descs: LabelItemComps; links: ButtonItemComps };
        articleNote: { label: LabelItemComps; close: ButtonItemComps; notes: InputItemComps };
      }>;
      colorsItem: Nullable<{
        colorsItem: { itemList: { colorCode: ColorsItemComps }[] };
        colorsNote: { label: LabelItemComps; close: ButtonItemComps; notes: InputItemComps };
      }>;
    }>;
    editor: Nullable<{
      header: { label: LabelItemComps; close: ButtonItemComps };
      positive: { label: LabelItemComps; copies: ButtonItemComps; prompt: InputItemComps };
      negative: { label: LabelItemComps; copies: ButtonItemComps; prompt: InputItemComps };
    }>;
  };
}

export type TopPageComps = TopPageDDLs;

export type TopPageHeaderComps = TopPageDDLs["header"];
export type TopPageBodiesComps = TopPageDDLs["bodies"];
export type TopPageFooterComps = TopPageDDLs["footer"];
export type TopPageModalsComps = TopPageDDLs["modals"];

export type PresetSheetComps = NonNullable<TopPageBodiesComps["preset"]>;
export type NotionSheetComps = NonNullable<TopPageBodiesComps["notion"]>;
export type EditorSheetComps = NonNullable<TopPageBodiesComps["editor"]>;
export type PresetModalComps = NonNullable<TopPageModalsComps["preset"]>;
export type NotionModalComps = NonNullable<TopPageModalsComps["notion"]>;
export type EditorModalComps = NonNullable<TopPageModalsComps["editor"]>;

export type PresetTemplatesFieldComps = PresetSheetComps["templates"];
export type PresetTableDataFieldComps = PresetSheetComps["tableData"];

export type TemplatesTextFieldComps = PresetTemplatesFieldComps["positive" | "negative"];
export type PresetTableDataItemComps = PresetTableDataFieldComps["categories" | "directions"];
export type PresetTableHeaderComps = NonNullable<PresetTableDataItemComps>["headerItem"];
export type PresetTableBodiesComps = NonNullable<PresetTableDataItemComps>["bodiesItem"];
export type PresetTableRecordComps = PresetTableBodiesComps["itemList"][number];

export type PresetModalHeaderFieldComps = PresetModalComps["header"];
export type PresetFileManagerFieldComps = PresetModalComps["templates" | "categories" | "directions"];

export type NotionHeaderFieldComps = NotionSheetComps["header"];
export type NotionArticleFieldComps = NotionSheetComps["articleItem"];

export type NotionArticleGridComps = NotionArticleFieldComps["itemList"][number];

export type NotionArticleItemComps = NotionArticleModalComps["articleItem"];
export type NotionColorsFieldComps = NotionColorsModalComps["colorsItem"];

export type NotionArticleModalComps = NonNullable<NotionModalComps["articleItem"]>;
export type NotionColorsModalComps = NonNullable<NotionModalComps["colorsItem"]>;
export type NotionColorsGridComps = NotionColorsFieldComps["itemList"][number];
export type NotionNotesFieldComps = NotionArticleModalComps["articleNote"] | NotionColorsModalComps["colorsNote"];

export type EditorFormsListFieldComps = EditorSheetComps["formsItem"];
export type EditorNotesItemFieldComps = EditorSheetComps["notesItem"];

export type EditorFormsCardComps = EditorFormsListFieldComps["itemList"][number];
export type EditorSelectSectionFieldComps = EditorFormsCardComps["selectItem"];
export type SelectSectionItemComps = EditorSelectSectionFieldComps["section"];
export type SelectRecordItemComps = SelectSectionItemComps["itemList"][number];
export type RadioGroupItemComps = SelectRecordItemComps["selector"];
export type EditorEntryFormsFieldComps = EditorFormsCardComps["entryItem"];

export type EditorChipsNotesFieldComps = EditorNotesItemFieldComps["chipsNotes"];
export type EditorNotionNotesFieldComps = EditorNotesItemFieldComps["colorsNotes" | "ideasNotes"];
export type MainChipFieldComps = EditorChipsNotesFieldComps["main"];
export type SubChipsFieldComps = EditorChipsNotesFieldComps["sub"];
export type MainChipItemComps = MainChipFieldComps["chips"];
export type SubChipsItemComps = SubChipsFieldComps["chips"];

export type EditorModalHeaderFieldComps = EditorModalComps["header"];
export type EditorPromptItemFieldComps = EditorModalComps["positive" | "negative"];
/**
 * UI
 * */
export type ModalShellComps = { open: boolean; onClose: () => void };
export type CardShellComps = { onClick: () => void };

export type TabSelectItemComps = {
  value: number;
  list: string[];
  onChange: (event: React.SyntheticEvent, value: any) => void;
};
export type LabelItemComps = { item: string };
export type ChipsItemComps = { item: string };
export type ColorsItemComps = any;
export type ImageItemComps = any;
export type InputItemComps = {
  value: string;
  rows: number;
  disabled?: boolean;
  readOnly?: boolean;
  onChange: (text: string) => void;
};
export type CheckItemComps = { label: string; check: boolean; onClick: () => void };
export type RadioItemComps = { label: string; check: boolean; onClick: () => void };
export type ButtonItemComps = {
  label: string;
  href?: string;
  disabled?: boolean;
  onClick?: () => void;
  onUpload?: () => void;
};
export type FabItemComps = { label: string; onClick?: () => void };

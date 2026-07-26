export type TopPageProperty = {
  selector: {
    value: number;
    list: string[];
  };
  showData: {
    preset: boolean;
    notion: boolean;
    editor: boolean;
    presetModal: boolean;
    notionModal: boolean;
    editorModal: boolean;
  };
};
export type PresetProperty = Record<string, never>;
export type NotionProperty = Record<string, never>;
export type EditorProperty = Record<string, never>;

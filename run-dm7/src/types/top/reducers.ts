import * as Comps from "@/types/top/components";

// ---------------------------------------------------------------------------
// TopPage
// ---------------------------------------------------------------------------
export type TopPageReducers = {
  state: {
    selectSheet: number;
    openPreset: boolean;
    openNotion: boolean;
    openEditor: boolean;
  };
  dispatch: {
    selectSheet: (value: number) => void;
    openPreset: (open: boolean) => void;
    openNotion: (open: boolean) => void;
    openEditor: (open: boolean) => void;
  };
};

// ---------------------------------------------------------------------------
// Preset
// ---------------------------------------------------------------------------
export type PresetTableRecord = {
  key: string;
  name: Comps.LabelItemComps;
  exclude: Omit<Comps.CheckItemComps, "onClick">;
  deleted: Omit<Comps.CheckItemComps, "onClick">;
};

export type PresetReducers = {
  state: {
    presetInfo: {
      showBodies: boolean;
      showModals: boolean;
      selectTable: number;
      currentPage: number;
      rowsPerPage: number;
    };
    templates: {
      positive: string;
      negative: string;
      templatesSource: string;
    };
    categories: {
      showTable: boolean;
      keyList: string[];
      bodiesList: PresetTableRecord[];
      categoriesSource: string;
    };
    directions: {
      showTable: boolean;
      keyList: string[];
      bodiesList: PresetTableRecord[];
      directionsSource: string;
    };
  };
  dispatch: {
    showBodies: (show: boolean) => void;
    showModals: (show: boolean) => void;
    selectTable: (value: number) => void;
    currentPage: (page: number) => void;
    positiveTemplate: (text: string) => void;
    negativeTemplate: (text: string) => void;
    templatesSource: (src: string) => void;
    categoriesSource: (src: string) => void;
    directionsSource: (src: string) => void;
    setCategoriesList: (list: PresetTableRecord[]) => void;
    setDirectionsList: (list: PresetTableRecord[]) => void;
    categoriesExclude: (key: string) => void;
    categoriesDeleted: (key: string) => void;
    directionsExclude: (key: string) => void;
    directionsDeleted: (key: string) => void;
  };
};

// ---------------------------------------------------------------------------
// Notion
// ---------------------------------------------------------------------------
export type NotionArticleRecord = {
  key: string;
  thmbs: Comps.ImageItemComps;
  title: Comps.LabelItemComps;
};

export type NotionArticleDetail = {
  image: Comps.ImageItemComps;
  title: Comps.LabelItemComps;
  descs: Comps.LabelItemComps;
  links: Omit<Comps.ButtonItemComps, "onClick" | "onUpload">;
};

export type NotionReducers = {
  state: {
    notionInfo: {
      showBodies: boolean;
      keyList: string[];
      itemList: NotionArticleRecord[];
    };
    article: {
      showArticle: boolean;
      articleItem: NotionArticleDetail;
      notes: string;
    };
    colors: {
      showColors: boolean;
      itemList: { colorCode: Comps.ColorsItemComps }[];
      notes: string;
    };
  };
  dispatch: {
    showBodies: (show: boolean) => void;
    setArticles: (keyList: string[], itemList: NotionArticleRecord[]) => void;
    showArticle: (show: boolean) => void;
    setArticleItem: (item: NotionArticleDetail) => void;
    articleNote: (text: string) => void;
    showColors: (show: boolean) => void;
    setColors: (itemList: { colorCode: Comps.ColorsItemComps }[]) => void;
    colorsNote: (text: string) => void;
  };
};

// ---------------------------------------------------------------------------
// Editor
// ---------------------------------------------------------------------------
export type EditorRadioRecord = { key: string; label: string };

export type EditorSectionRecord = {
  key: string;
  selectedRadioKey: string;
  radioKeyList: string[];
  radioItemList: EditorRadioRecord[];
};

export type EditorFormRecord = {
  key: string;
  label: string;
  entryValue: string;
  sectionKeyList: string[];
  sectionItemList: EditorSectionRecord[];
};

export type EditorReducers = {
  state: {
    editorInfo: {
      showBodies: boolean;
      showModals: boolean;
    };
    formsItem: {
      keyList: string[];
      itemList: EditorFormRecord[];
    };
    notesItem: {
      mainChip: string | null;
      subChips: string[];
      ideasNote: string;
      colorsNote: string;
    };
    modals: {
      positivePrompt: string;
      negativePrompt: string;
    };
  };
  dispatch: {
    showBodies: (show: boolean) => void;
    showModals: (show: boolean) => void;
    setForms: (keyList: string[], itemList: EditorFormRecord[]) => void;
    formEntry: (key: string, value: string) => void;
    formReset: (key: string) => void;
    formClear: (key: string) => void;
    formShuffle: (key: string) => void;
    selectRadio: (formKey: string, sectionKey: string, radioKey: string) => void;
    reloadSection: (formKey: string, sectionKey: string) => void;
    ideasNote: (text: string) => void;
    colorsNote: (text: string) => void;
    positivePrompt: (text: string) => void;
    negativePrompt: (text: string) => void;
  };
};

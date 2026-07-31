import * as Comps from "@/types/top/components";

export type TopPageProperty = {
  header: Comps.LabelItemComps;
  floating: Pick<Comps.FabItemComps, "label">;
  selector: Pick<Comps.TabSelectItemComps, "value" | "list">;
  overlay: Pick<Comps.ModalShellComps, "open">;
};
export type PresetProperty = {
  bodies: {
    showBodies: boolean;
    templates: {
      positive: {
        info: Pick<Comps.TemplatesTextFieldComps, "label">;
        header: Omit<Comps.InputItemComps, "onChange">;
      };
      negative: {
        info: Pick<Comps.TemplatesTextFieldComps, "label">;
        header: Omit<Comps.InputItemComps, "onChange">;
      };
    };
    tableData: {
      selector: Pick<Comps.TabSelectItemComps, "value" | "list">;
      paginate: Omit<Comps.TablePagingItemComps, "onChange">;
    };
    categories: {
      showTable: boolean;
      headerList: Comps.LabelItemComps[];
      keyList: string[];
      bodiesList: {
        key: string;
        name: Comps.LabelItemComps;
        exclude: Omit<Comps.CheckItemComps, "onClick">;
        deleted: Omit<Comps.CheckItemComps, "onClick">;
      }[];
    };
    directions: {
      showTable: boolean;
      headerList: Comps.LabelItemComps[];
      keyList: string[];
      bodiesList: {
        key: string;
        name: Comps.LabelItemComps;
        exclude: Omit<Comps.CheckItemComps, "onClick">;
        deleted: Omit<Comps.CheckItemComps, "onClick">;
      }[];
    };
  };
  modals: {
    showModals: boolean;
    header: {
      info: Pick<Comps.PresetModalHeaderFieldComps, "label">;
      close: Omit<Comps.ButtonItemComps, "onClick" | "onUpload">;
    };
    templates: {
      info: Omit<Comps.PresetFileManagerFieldComps, "exports" | "uploads">;
      exports: Omit<Comps.ButtonItemComps, "onClick" | "onUpload">;
      uploads: Omit<Comps.ButtonItemComps, "onClick" | "onUpload">;
    };
    categories: {
      info: Omit<Comps.PresetFileManagerFieldComps, "exports" | "uploads">;
      exports: Omit<Comps.ButtonItemComps, "onClick" | "onUpload">;
      uploads: Omit<Comps.ButtonItemComps, "onClick" | "onUpload">;
    };
    directions: {
      info: Omit<Comps.PresetFileManagerFieldComps, "exports" | "uploads">;
      exports: Omit<Comps.ButtonItemComps, "onClick" | "onUpload">;
      uploads: Omit<Comps.ButtonItemComps, "onClick" | "onUpload">;
    };
  };
};
export type NotionProperty = {
  bodies: {
    showBodies: boolean;
    header: {
      reload: Omit<Comps.ButtonItemComps, "onClick" | "onUpload">;
    };
    articleItem: {
      keyList: string[];
      itemList: { key: string; thmbs: Comps.ImageItemComps; title: Comps.LabelItemComps }[];
    };
  };
  modals: {
    articleItem: {
      showModal: boolean;
      articleItem: {
        image: Comps.ImageItemComps;
        title: Comps.LabelItemComps;
        descs: Comps.LabelItemComps;
        links: Omit<Comps.ButtonItemComps, "onClick" | "onUpload">;
      };
      articleNote: {
        label: Comps.LabelItemComps;
        close: Omit<Comps.ButtonItemComps, "onClick" | "onUpload">;
        notes: Omit<Comps.InputItemComps, "onChange">;
      };
    };
    colorsItem: {
      showModal: boolean;
      colorsItem: {
        itemList: { colorCode: Comps.ColorsItemComps }[];
      };
      colorsNote: {
        label: Comps.LabelItemComps;
        close: Omit<Comps.ButtonItemComps, "onClick" | "onUpload">;
        notes: Omit<Comps.InputItemComps, "onChange">;
      };
    };
  };
};
export type EditorProperty = {
  bodies: {
    showBodies: boolean;
    formsItem: {
      keyList: string[];
      itemList: {
        key: string;
        selectItem: {
          shuffle: Omit<Comps.ButtonItemComps, "onClick" | "onUpload">;
          section: {
            keyList: string[];
            itemList: {
              key: string;
              selector: {
                keyList: string[];
                itemList: ({ key: string } & Omit<Comps.RadioItemComps, "onClick">)[];
              };
              reload: Omit<Comps.ButtonItemComps, "onClick" | "onUpload">;
            }[];
          };
        };
        entryItem: {
          field: Omit<Comps.InputItemComps, "onChange">;
          reset: Omit<Comps.ButtonItemComps, "onClick" | "onUpload">;
          clear: Omit<Comps.ButtonItemComps, "onClick" | "onUpload">;
        };
      }[];
    };
    notesItem: {
      chipsNotes: Comps.EditorChipsNotesFieldComps;
      ideasNotes: {
        label: Comps.LabelItemComps;
        notes: Omit<Comps.InputItemComps, "onChange">;
      };
      colorsNotes: {
        label: Comps.LabelItemComps;
        notes: Omit<Comps.InputItemComps, "onChange">;
      };
    };
  };
  modals: {
    showModals: boolean;
    header: {
      info: Pick<Comps.EditorModalHeaderFieldComps, "label">;
      close: Omit<Comps.ButtonItemComps, "onClick" | "onUpload">;
    };
    positive: {
      info: Pick<Comps.EditorPromptItemFieldComps, "label">;
      copies: Omit<Comps.ButtonItemComps, "onClick" | "onUpload">;
      prompt: Omit<Comps.InputItemComps, "onChange">;
    };
    negative: {
      info: Pick<Comps.EditorPromptItemFieldComps, "label">;
      copies: Omit<Comps.ButtonItemComps, "onClick" | "onUpload">;
      prompt: Omit<Comps.InputItemComps, "onChange">;
    };
  };
};

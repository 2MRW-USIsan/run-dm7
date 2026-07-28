import * as Comps from "@/types/top/components";

export type TopPageHandlers = {
  floating: Pick<Comps.FabItemComps, "onClick">;
  selector: Pick<Comps.TabSelectItemComps, "onChange">;
  overlay: Pick<Comps.ModalShellComps, "onClose">;
};
export type PresetHandlers = {
  bodies: {
    templates: {
      positive: { header: Pick<Comps.InputItemComps, "onChange"> };
      negative: { header: Pick<Comps.InputItemComps, "onChange"> };
    };
    tableData: {
      selector: Pick<Comps.TabSelectItemComps, "onChange">;
    };
    categories: {
      bodiesList: {
        key: string;
        exclude: Pick<Comps.CheckItemComps, "onClick">;
        deleted: Pick<Comps.CheckItemComps, "onClick">;
      }[];
    };
    directions: {
      bodiesList: {
        key: string;
        exclude: Pick<Comps.CheckItemComps, "onClick">;
        deleted: Pick<Comps.CheckItemComps, "onClick">;
      }[];
    };
  };
  modals: {
    header: { close: Pick<Comps.ButtonItemComps, "onClick"> };
    templates: {
      exports: Pick<Comps.ButtonItemComps, "onClick" | "onUpload">;
      uploads: Pick<Comps.ButtonItemComps, "onClick" | "onUpload">;
    };
    categories: {
      exports: Pick<Comps.ButtonItemComps, "onClick" | "onUpload">;
      uploads: Pick<Comps.ButtonItemComps, "onClick" | "onUpload">;
    };
    directions: {
      exports: Pick<Comps.ButtonItemComps, "onClick" | "onUpload">;
      uploads: Pick<Comps.ButtonItemComps, "onClick" | "onUpload">;
    };
  };
};
export type NotionHandlers = {
  bodies: {
    header: { reload: Pick<Comps.ButtonItemComps, "onClick"> };
    articleItem: {
      itemList: { key: string; card: Comps.CardShellComps }[];
    };
  };
  modals: {
    articleItem: {
      links: Pick<Comps.ButtonItemComps, "onClick">;
      articleNote: {
        close: Pick<Comps.ButtonItemComps, "onClick">;
        notes: Pick<Comps.InputItemComps, "onChange">;
      };
    };
    colorsItem: {
      colorsNote: {
        close: Pick<Comps.ButtonItemComps, "onClick">;
        notes: Pick<Comps.InputItemComps, "onChange">;
      };
    };
  };
};
export type EditorHandlers = {
  bodies: {
    formsItem: {
      itemList: {
        key: string;
        selectItem: {
          shuffle: Pick<Comps.ButtonItemComps, "onClick">;
          section: {
            itemList: {
              key: string;
              selector: {
                itemList: ({ key: string } & Pick<Comps.RadioItemComps, "onClick">)[];
              };
              reload: Pick<Comps.ButtonItemComps, "onClick">;
            }[];
          };
        };
        entryItem: {
          field: Pick<Comps.InputItemComps, "onChange">;
          reset: Pick<Comps.ButtonItemComps, "onClick">;
          clear: Pick<Comps.ButtonItemComps, "onClick">;
        };
      }[];
    };
    notesItem: {
      ideasNotes: { notes: Pick<Comps.InputItemComps, "onChange"> };
      colorsNotes: { notes: Pick<Comps.InputItemComps, "onChange"> };
    };
  };
  modals: {
    header: { close: Pick<Comps.ButtonItemComps, "onClick"> };
    positive: {
      copies: Pick<Comps.ButtonItemComps, "onClick">;
      prompt: Pick<Comps.InputItemComps, "onChange">;
    };
    negative: {
      copies: Pick<Comps.ButtonItemComps, "onClick">;
      prompt: Pick<Comps.InputItemComps, "onChange">;
    };
  };
};

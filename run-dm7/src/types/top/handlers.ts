import * as Comps from "@/types/top/components";

export type TopPageHandlers = {
  selector: {
    onChange: Comps.TabSelectItemComps["onChange"];
  };
  modals: {
    overlay: {
      onClose: () => void;
    };
  };
};
export type PresetHandlers = Record<string, never>;
export type NotionHandlers = Record<string, never>;
export type EditorHandlers = Record<string, never>;

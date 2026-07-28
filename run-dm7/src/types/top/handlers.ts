import * as Comps from "@/types/top/components";

export type TopPageHandlers = {
  floating: Pick<Comps.FabItemComps, "onClick">;
  selector: Pick<Comps.TabSelectItemComps, "onChange">;
  overlay: Pick<Comps.ModalShellComps, "onClose">;
};
export type PresetHandlers = Record<string, never>;
export type NotionHandlers = Record<string, never>;
export type EditorHandlers = Record<string, never>;

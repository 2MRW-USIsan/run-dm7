import * as Comps from "@/types/top/components";

export type TopPageProperty = {
  header: Comps.LabelItemComps;
  floating: Pick<Comps.FabItemComps, "label">;
  selector: Pick<Comps.TabSelectItemComps, "value" | "list">;
  overlay: Pick<Comps.ModalShellComps, "open">;
};
export type PresetProperty = Record<string, never>;
export type NotionProperty = Record<string, never>;
export type EditorProperty = Record<string, never>;

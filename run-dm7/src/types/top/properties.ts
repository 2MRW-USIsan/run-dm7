import * as Comps from "@/types/top/components";

export type TopPageProperty = {
  header: Comps.LabelItemComps;
  floating: Pick<Comps.FabItemComps, "label">;
  selector: Pick<Comps.TabSelectItemComps, "value" | "list">;
  overlay: Pick<Comps.ModalShellComps, "open">;
};
export type PresetProperty = {
  bodies: { preset: Comps.PresetSheetComps | undefined };
  modals: { preset: Comps.PresetModalComps | undefined };
};
export type NotionProperty = {
  bodies: { notion: Comps.NotionSheetComps | undefined };
  modals: { notion: Comps.NotionModalComps | undefined };
};
export type EditorProperty = {
  bodies: { editor: Comps.EditorSheetComps | undefined };
  modals: { editor: Comps.EditorModalComps | undefined };
};

import * as Comps from "@/types/top/components";
import { TabSelectItem } from "../utils/ui";
import { ModalShell, Shell } from "../utils/shell";
import { PresetSheet, PresetModal } from "../preset/preset-domain";
import { NotionSheet, NotionModal } from "../notion/notion-domain";
import { EditorSheet, EditorModal } from "../editor/editor-domain";

interface TopPageBodiesProps {
  props: Comps.TopPageBodiesComps;
}
export function TopPageBodies({
  props: { selector, preset, notion, editor },
}: TopPageBodiesProps) {
  return (
    <Shell Sheet>
      <TabSelectItem props={selector} />
      {preset && <PresetSheet props={preset} />}
      {notion && <NotionSheet props={notion} />}
      {editor && <EditorSheet props={editor} />}
    </Shell>
  );
}

interface TopPageModalsProps {
  props: Comps.TopPageModalsComps;
}
export function TopPageModals({
  props: { overlay, preset, notion, editor },
}: TopPageModalsProps) {
  return (
    <ModalShell props={overlay}>
      {preset && <PresetModal props={preset} />}
      {notion && <NotionModal props={notion} />}
      {editor && <EditorModal props={editor} />}
    </ModalShell>
  );
}

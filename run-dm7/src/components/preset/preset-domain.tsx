import * as Comps from "@/types/components";
import { FieldShell } from "../utils/shell";
import { PresetTemplatesField, PresetTableDataField } from "../preset/preset-sheet";
import { PresetModalHeaderField, PresetFileManagerField } from "../preset/preset-modal";

interface PresetSheetProps {
  props: Comps.PresetSheetComps;
}
export function PresetSheet({ props: { templates, tableData } }: PresetSheetProps) {
  return (
    <FieldShell Column Flex={"CONTAIER"}>
      <FieldShell Flex={1}>
        <PresetTemplatesField props={templates} />
      </FieldShell>
      <FieldShell Flex={2}>
        <PresetTableDataField props={tableData} />
      </FieldShell>
    </FieldShell>
  );
}
interface PresetModalProps {
  props: Comps.PresetModalComps;
}
export function PresetModal({ props: { header, templates, categories, directions } }: PresetModalProps) {
  return (
    <FieldShell Column Flex={"CONTAIER"}>
      <PresetModalHeaderField props={header} />
      <FieldShell Column Flex={1}>
        <PresetFileManagerField props={templates} />
        <PresetFileManagerField props={categories} />
        <PresetFileManagerField props={directions} />
      </FieldShell>
    </FieldShell>
  );
}

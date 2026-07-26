import * as Comps from "@/types/components";
import { FieldShell } from "../utils/shell";
import { LabelItem, ButtonItem } from "../utils/ui";

interface PresetModalHeaderFieldProps {
  props: Comps.PresetModalHeaderFieldComps;
}
export function PresetModalHeaderField({ props: { label, close } }: PresetModalHeaderFieldProps) {
  return (
    <FieldShell Column Flex={"CONTAIER"}>
      <LabelItem props={label} />
      <ButtonItem props={close} />
    </FieldShell>
  );
}
interface PresetFileManagerFieldProps {
  props: Comps.PresetFileManagerFieldComps;
}
export function PresetFileManagerField({
  props: { title, label, sources, exports, uploads },
}: PresetFileManagerFieldProps) {
  return (
    <FieldShell Column Flex={"CONTAIER"}>
      <LabelItem props={title} />
      <FieldShell Row Flex={"CONTAIER"}>
        <LabelItem props={label} />
        <FieldShell Row Flex={1}>
          <LabelItem props={sources} />
        </FieldShell>
      </FieldShell>
      <FieldShell Row Flex={"CONTAIER"}>
        <ButtonItem props={exports} />
        <ButtonItem props={uploads} />
      </FieldShell>
    </FieldShell>
  );
}

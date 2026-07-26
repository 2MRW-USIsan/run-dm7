import * as Comps from "@/types/top/components";
import { FieldShell } from "../utils/shell";
import { LabelItem, ButtonItem, InputItem } from "../utils/ui";

interface EditorModalHeaderFieldProps {
  props: Comps.EditorModalHeaderFieldComps;
}
export function EditorModalHeaderField({ props: { label, close } }: EditorModalHeaderFieldProps) {
  return (
    <FieldShell Column Flex={"CONTAIER"}>
      <LabelItem props={label} />
      <ButtonItem props={close} />
    </FieldShell>
  );
}
interface EditorPromptItemFieldProps {
  props: Comps.EditorPromptItemFieldComps;
}
export function EditorPromptItemField({ props: { label, copies, prompt } }: EditorPromptItemFieldProps) {
  return (
    <FieldShell Column Flex={"CONTAIER"}>
      <FieldShell Row Flex={"CONTAIER"}>
        <LabelItem props={label} />
        <ButtonItem props={copies} />
      </FieldShell>
      <FieldShell Column Flex={1}>
        <InputItem props={prompt} />
      </FieldShell>
    </FieldShell>
  );
}

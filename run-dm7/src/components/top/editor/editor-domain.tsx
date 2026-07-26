import * as Comps from "@/types/top/components";
import { FieldShell } from "../utils/shell";
import { EditorFormsListField, EditorNotesItemField } from "./editor-sheet";
import { EditorModalHeaderField, EditorPromptItemField } from "./editor-modal";

interface EditorSheetProps {
  props: Comps.EditorSheetComps;
}
export function EditorSheet({ props: { formsItem, notesItem } }: EditorSheetProps) {
  return (
    <FieldShell Row Flex={"CONTAIER"}>
      <FieldShell Flex={1}>
        <EditorFormsListField props={formsItem} />
      </FieldShell>
      <FieldShell Flex={1}>
        <EditorNotesItemField props={notesItem} />
      </FieldShell>
    </FieldShell>
  );
}
interface EditorModalProps {
  props: Comps.EditorModalComps;
}
export function EditorModal({ props: { header, positive, negative } }: EditorModalProps) {
  return (
    <FieldShell Column Flex={"CONTAIER"}>
      <EditorModalHeaderField props={header} />
      <FieldShell Column Flex={1}>
        <EditorPromptItemField props={positive} />
        <EditorPromptItemField props={negative} />
      </FieldShell>
    </FieldShell>
  );
}

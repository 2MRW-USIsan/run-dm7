import * as Comps from "@/types/top/components";
import { FieldShell } from "../utils/shell";
import { LabelItem, InputItem, ChipsItem, ButtonItem, RadioItem } from "../utils/ui";

interface EditorFormsListFieldProps {
  props: Comps.EditorFormsListFieldComps;
}
export function EditorFormsListField({ props: { itemList } }: EditorFormsListFieldProps) {
  return (
    <FieldShell Column Flex={"CONTAIER"}>
      {itemList.map((chips, index) => (
        <EditorFormsCard key={index} props={chips} />
      ))}
    </FieldShell>
  );
}

interface EditorNotesItemFieldProps {
  props: Comps.EditorNotesItemFieldComps;
}
export function EditorNotesItemField({ props: { chipsNotes, ideasNotes, colorsNotes } }: EditorNotesItemFieldProps) {
  return (
    <FieldShell Column Flex={"CONTAIER"}>
      <EditorChipsNotesField props={chipsNotes} />
      <EditorNotionNotesField props={ideasNotes} />
      <EditorNotionNotesField props={colorsNotes} />
    </FieldShell>
  );
}

interface EditorFormsCardProps {
  props: Comps.EditorFormsCardComps;
}
export function EditorFormsCard({ props: { selectItem, entryItem } }: EditorFormsCardProps) {
  return (
    <FieldShell Column Flex={"CONTAIER"}>
      <EditorSelectSectionField props={selectItem} />
      <EditorEntryFormsField props={entryItem} />
    </FieldShell>
  );
}
interface EditorSelectSectionFieldProps {
  props: Comps.EditorSelectSectionFieldComps;
}
export function EditorSelectSectionField({ props: { shuffle, section } }: EditorSelectSectionFieldProps) {
  return (
    <FieldShell Column Flex={"CONTAIER"}>
      <ButtonItem props={shuffle} />
      <FieldShell Column Flex={1}>
        <SelectSectionItem props={section} />
      </FieldShell>
    </FieldShell>
  );
}

interface SelectSectionItemProps {
  props: Comps.SelectSectionItemComps;
}
export function SelectSectionItem({ props: { itemList } }: SelectSectionItemProps) {
  return (
    <FieldShell Column Flex={"CONTAIER"}>
      {itemList.map((selects, index) => (
        <SelectRecordItem key={index} props={selects} />
      ))}
    </FieldShell>
  );
}
interface SelectRecordItemProps {
  props: Comps.SelectRecordItemComps;
}
export function SelectRecordItem({ props: { selector, reload } }: SelectRecordItemProps) {
  return (
    <FieldShell Row Flex={"CONTAIER"}>
      <FieldShell Row Flex={1}>
        <RadioGroupItem props={selector} />
      </FieldShell>
      <ButtonItem props={reload} />
    </FieldShell>
  );
}
interface RadioGroupItemProps {
  props: Comps.RadioGroupItemComps;
}
export function RadioGroupItem({ props: { itemList } }: RadioGroupItemProps) {
  return (
    <FieldShell Row Flex={"CONTAIER"}>
      {itemList.map((radio, index) => (
        <RadioItem key={index} props={radio} />
      ))}
    </FieldShell>
  );
}

interface EditorEntryFormsFieldProps {
  props: Comps.EditorEntryFormsFieldComps;
}
export function EditorEntryFormsField({ props: { field, reset, clear } }: EditorEntryFormsFieldProps) {
  return (
    <FieldShell Row Flex={"CONTAIER"}>
      <FieldShell Flex={1}>
        <InputItem props={field} />
      </FieldShell>
      <ButtonItem props={reset} />
      <ButtonItem props={clear} />
    </FieldShell>
  );
}

interface EditorChipsNotesFieldProps {
  props: Comps.EditorChipsNotesFieldComps;
}
export function EditorChipsNotesField({ props: { label, main, sub } }: EditorChipsNotesFieldProps) {
  return (
    <FieldShell Column Flex={"CONTAIER"}>
      <LabelItem props={label} />
      <FieldShell Flex={1}>
        <MainChipField props={main} />
        <SubChipsField props={sub} />
      </FieldShell>
    </FieldShell>
  );
}
interface MainChipFieldProps {
  props: Comps.MainChipFieldComps;
}
export function MainChipField({ props: { label, chips } }: MainChipFieldProps) {
  return (
    <FieldShell Row Flex={"CONTAIER"}>
      <LabelItem props={label} />
      <FieldShell Flex={1}>
        <MainChipField props={chips} />
      </FieldShell>
    </FieldShell>
  );
}
interface MainChipItemProps {
  props: Comps.MainChipItemComps;
}
export function MainChipItem({ props: { item } }: MainChipItemProps) {
  return (
    <FieldShell Row Flex={"CONTAIER"}>
      {item && <ChipsItem props={item} />}
    </FieldShell>
  );
}
interface SubChipsFieldProps {
  props: Comps.SubChipsFieldComps;
}
export function SubChipsField({ props: { label, chips } }: SubChipsFieldProps) {
  return (
    <FieldShell Row Flex={"CONTAIER"}>
      <LabelItem props={label} />
      <FieldShell Flex={1}>
        <SubChipsField props={chips} />
      </FieldShell>
    </FieldShell>
  );
}
interface SubChipsItemProps {
  props: Comps.SubChipsItemComps;
}
export function SubChipsItem({ props: { itemList } }: SubChipsItemProps) {
  return (
    <FieldShell Row Flex={"CONTAIER"}>
      {itemList.map((chips, index) => (
        <ChipsItem key={index} props={chips} />
      ))}
    </FieldShell>
  );
}

interface EditorNotionNotesFieldProps {
  props: Comps.EditorNotionNotesFieldComps;
}
export function EditorNotionNotesField({ props: { label, notes } }: EditorNotionNotesFieldProps) {
  return (
    <FieldShell Column Flex={"CONTAIER"}>
      <LabelItem props={label} />
      <FieldShell Flex={1}>
        <InputItem props={notes} />
      </FieldShell>
    </FieldShell>
  );
}

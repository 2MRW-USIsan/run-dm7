import * as Comps from "@/types/top/components";
import {
  FieldShell,
  TableBodyShell,
  TableCellShell,
  TableHeadShell,
  TableRecordShell,
  TableShell,
} from "../utils/shell";
import { CheckItem, InputItem, LabelItem, TabSelectItem } from "../utils/ui";

interface PresetTemplatesFieldProps {
  props: Comps.PresetTemplatesFieldComps;
}
export function PresetTemplatesField({ props: { positive, negative } }: PresetTemplatesFieldProps) {
  return (
    <FieldShell Column Flex={"CONTAIER"}>
      <TemplatesTextField props={positive} />
      <TemplatesTextField props={negative} />
    </FieldShell>
  );
}
interface PresetTableDataFieldProps {
  props: Comps.PresetTableDataFieldComps;
}
export function PresetTableDataField({ props: { selector, categories, directions } }: PresetTableDataFieldProps) {
  return (
    <FieldShell Column Flex={"CONTAIER"}>
      <TabSelectItem props={selector} />
      {categories && <PresetTableDataItem props={categories} />}
      {directions && <PresetTableDataItem props={directions} />}
    </FieldShell>
  );
}

interface TemplatesTextFieldProps {
  props: Comps.TemplatesTextFieldComps;
}
export function TemplatesTextField({ props: { label, header } }: TemplatesTextFieldProps) {
  return (
    <FieldShell Column Flex={"CONTAIER"}>
      <LabelItem props={label} />
      <InputItem props={header} />
    </FieldShell>
  );
}

interface PresetTableDataItemProps {
  props: Comps.PresetTableDataItemComps;
}
export function PresetTableDataItem({ props: { headerItem, bodiesItem } }: PresetTableDataItemProps) {
  return (
    <TableShell>
      <PresetTableHeader props={headerItem} />
      <PresetTableBodies props={bodiesItem} />
    </TableShell>
  );
}
interface PresetTableHeaderProps {
  props: Comps.PresetTableHeaderComps;
}
export function PresetTableHeader({ props: { itemList } }: PresetTableHeaderProps) {
  return (
    <TableHeadShell>
      {itemList.map((column, index) => (
        <TableCellShell key={index}>
          <LabelItem props={column} />
        </TableCellShell>
      ))}
    </TableHeadShell>
  );
}
interface PresetTableBodiesProps {
  props: Comps.PresetTableBodiesComps;
}
export function PresetTableBodies({ props: { itemList } }: PresetTableBodiesProps) {
  return (
    <TableBodyShell>
      {itemList.map((records, index) => (
        <PresetTableRecord key={index} props={records} />
      ))}
    </TableBodyShell>
  );
}
interface PresetTableRecordProps {
  props: Comps.PresetTableRecordComps;
}
export function PresetTableRecord({ props: { name, exclude, daleted } }: PresetTableRecordProps) {
  return (
    <TableRecordShell>
      <TableCellShell>
        <LabelItem props={name} />
      </TableCellShell>
      <TableCellShell>
        <CheckItem props={exclude} />
      </TableCellShell>
      <TableCellShell>
        <CheckItem props={daleted} />
      </TableCellShell>
    </TableRecordShell>
  );
}

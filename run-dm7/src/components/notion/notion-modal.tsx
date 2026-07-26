import * as Comps from "@/types/components";
import { CardShell, FieldShell, GridShell } from "../utils/shell";
import { ImageItem, LabelItem, ButtonItem, InputItem, ColorsItem } from "../utils/ui";

interface NotionArticleModalProps {
  props: Comps.NotionArticleModalComps;
}
export function NotionArticleModal({ props: { articleItem, articleNote } }: NotionArticleModalProps) {
  return (
    <FieldShell Row Flex={"CONTAIER"}>
      <FieldShell Flex={1}>
        <NotionArticleItem props={articleItem} />
      </FieldShell>
      <FieldShell Flex={1}>
        <NotionNotesField props={articleNote} />
      </FieldShell>
    </FieldShell>
  );
}
interface NotionColorsModalProps {
  props: Comps.NotionColorsModalComps;
}
export function NotionColorsModal({ props: { colorsItem, colorsNote } }: NotionColorsModalProps) {
  return (
    <FieldShell Row Flex={"CONTAIER"}>
      <FieldShell Flex={1}>
        <NotionColorsField props={colorsItem} />
      </FieldShell>
      <FieldShell Flex={1}>
        <NotionNotesField props={colorsNote} />
      </FieldShell>
    </FieldShell>
  );
}

interface NotionArticleItemProps {
  props: Comps.NotionArticleItemComps;
}
export function NotionArticleItem({ props: { image, title, descs, links } }: NotionArticleItemProps) {
  return (
    <FieldShell Column Flex={"CONTAIER"}>
      <FieldShell Flex={1}>
        <ImageItem props={image} />
      </FieldShell>
      <FieldShell Column Flex={2}>
        <LabelItem props={title} />
        <FieldShell Flex={1}>
          <LabelItem props={descs} />
        </FieldShell>
      </FieldShell>
      <ButtonItem props={links} />
    </FieldShell>
  );
}
interface NotionNotesFieldProps {
  props: Comps.NotionNotesFieldComps;
}
export function NotionNotesField({ props: { label, close, notes } }: NotionNotesFieldProps) {
  return (
    <FieldShell Column Flex={"CONTAIER"}>
      <FieldShell Row Flex={"CONTAIER"}>
        <LabelItem props={label} />
        <ButtonItem props={close} />
      </FieldShell>
      <FieldShell Flex={1}>
        <InputItem props={notes} />
      </FieldShell>
    </FieldShell>
  );
}
interface NotionColorsFieldProps {
  props: Comps.NotionColorsFieldComps;
}
export function NotionColorsField({ props: { itemList } }: NotionColorsFieldProps) {
  return (
    <GridShell Size={"CONTAIER"}>
      {itemList.map((colors, index) => (
        <NotionColorsGrid key={index} props={colors} />
      ))}
    </GridShell>
  );
}
interface NotionColorsGridProps {
  props: Comps.NotionColorsGridComps;
}
export function NotionColorsGrid({ props: { colorCode } }: NotionColorsGridProps) {
  return (
    <GridShell Size={3}>
      <CardShell>
        <FieldShell Column Flex={"CONTAIER"}>
          <ColorsItem props={colorCode} />
        </FieldShell>
      </CardShell>
    </GridShell>
  );
}

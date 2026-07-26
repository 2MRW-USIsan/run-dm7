import * as Comps from "@/types/top/components";
import { CardShell, FieldShell, GridShell } from "../utils/shell";
import { ButtonItem, ImageItem, LabelItem } from "../utils/ui";

interface NotionHeaderFieldProps {
  props: Comps.NotionHeaderFieldComps;
}
export function NotionHeaderField({ props: { reload } }: NotionHeaderFieldProps) {
  return (
    <FieldShell Column Flex={"CONTAIER"}>
      <ButtonItem props={reload} />
    </FieldShell>
  );
}
interface NotionArticleFieldProps {
  props: Comps.NotionArticleFieldComps;
}
export function NotionArticleField({ props: { itemList } }: NotionArticleFieldProps) {
  return (
    <GridShell Size={"CONTAIER"}>
      {itemList.map((article, index) => (
        <NotionArticleGrid key={index} props={article} />
      ))}
    </GridShell>
  );
}

interface NotionArticleGridProps {
  props: Comps.NotionArticleGridComps;
}
export function NotionArticleGrid({ props: { card, thmbs, title } }: NotionArticleGridProps) {
  return (
    <GridShell Size={3}>
      <CardShell props={card}>
        <FieldShell Column Flex={"CONTAIER"}>
          <ImageItem props={thmbs} />
          <LabelItem props={title} />
        </FieldShell>
      </CardShell>
    </GridShell>
  );
}

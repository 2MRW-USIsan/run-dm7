import * as Comps from "@/types/top/components";
import { FieldShell } from "../utils/shell";
import { NotionHeaderField, NotionArticleField } from "./notion-sheet";
import { NotionArticleModal, NotionColorsModal } from "./notion-modal";

interface NotionSheetProps {
  props: Comps.NotionSheetComps;
}
export function NotionSheet({ props: { header, articleItem } }: NotionSheetProps) {
  return (
    <FieldShell Column Flex={"CONTAIER"}>
      <NotionHeaderField props={header} />
      <FieldShell Flex={1}>
        <NotionArticleField props={articleItem} />
      </FieldShell>
    </FieldShell>
  );
}
interface NotionModalProps {
  props: Comps.NotionModalComps;
}
export function NotionModal({ props: { articleItem, colorsItem } }: NotionModalProps) {
  return (
    <FieldShell Column Flex={"CONTAIER"}>
      {articleItem && <NotionArticleModal props={articleItem} />}
      {colorsItem && <NotionColorsModal props={colorsItem} />}
    </FieldShell>
  );
}

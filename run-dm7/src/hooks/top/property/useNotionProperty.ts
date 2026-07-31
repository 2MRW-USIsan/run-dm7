import * as VMs from "@/types/top/viewmodels";
import * as Props from "@/types/top/properties";
import { INFORMATION } from "@/hooks/top/information";

interface NotionPropertyProps {
  contexts: VMs.TopContexts;
}
interface NotionPropertyReturns {
  property: Props.NotionProperty;
}

export function useNotionProperty({ contexts }: NotionPropertyProps): NotionPropertyReturns {
  const s = contexts.notion.reducer.state;
  const bodiesProperties = {
    showBodies: s.notionInfo.showBodies,
    header: { reload: { label: INFORMATION.TOP.BUTTON.NOTION.RELOAD } },
    articleItem: {
      keyList: s.notionInfo.keyList,
      itemList: s.notionInfo.itemList,
    },
  };
  const modalsProperties = {
    articleItem: {
      showModal: s.article.showArticle,
      articleItem: s.article.articleItem,
      articleNote: {
        label: { item: INFORMATION.TOP.LABEL.NOTION.ARTICLE_NOTE },
        close: { label: INFORMATION.TOP.BUTTON.NOTION.CLOSE },
        notes: {
          value: s.article.notes,
          rows: INFORMATION.TOP.FORM_ROWS.NOTION.ARTICLE_NOTE,
        },
      },
    },
    colorsItem: {
      showModal: s.colors.showColors,
      colorsItem: { itemList: s.colors.itemList },
      colorsNote: {
        label: { item: INFORMATION.TOP.LABEL.NOTION.COLORS_NOTE },
        close: { label: INFORMATION.TOP.BUTTON.NOTION.CLOSE },
        notes: {
          value: s.colors.notes,
          rows: INFORMATION.TOP.FORM_ROWS.NOTION.COLORS_NOTE,
        },
      },
    },
  };
  return { property: { bodies: bodiesProperties, modals: modalsProperties } };
}

import * as VMs from "@/types/top/viewmodels";
import * as Props from "@/types/top/properties";

interface NotionPropertyProps {
  contexts: VMs.TopContexts;
}
interface NotionPropertyReturns {
  property: Props.NotionProperty;
}

export function useNotionProperty({ contexts }: NotionPropertyProps): NotionPropertyReturns {
  const bodiesProperties = {
    showBodies: contexts.notion.reducer.state.notionInfo.showBodies,
    header: { reload: { label: INFORMATION.TOP.BUTTON.NOTION.RELOAD } },
    articleItem: {
      keyList: contexts.notion.reducer.state.notionInfo.keyList,
      itemList: contexts.notion.reducer.state.notionInfo.itemList,
    },
  };
  const modalsProperties = {
    articleItem: {
      showModal: contexts.notion.reducer.state.article.showArticle,
      articleItem: contexts.notion.reducer.state.article.articleItem,
      articleNote: {
        label: { item: INFORMATION.TOP.LABEL.NOTION.ARTICLE_NOTE },
        close: { label: INFORMATION.TOP.BUTTON.NOTION.CLOSE },
        notes: {
          value: contexts.notion.reducer.state.article.notes,
          rows: INFORMATION.TOP.FORM_ROWS.NOTION.ARTICLE_NOTE,
        },
      },
    },
    colorsItem: {
      showModal: contexts.notion.reducer.state.colors.showColors,
      colorsItem: { itemList: contexts.notion.reducer.state.colors.itemList },
      colorsNote: {
        label: { item: INFORMATION.TOP.LABEL.NOTION.COLORS_NOTE },
        close: { label: INFORMATION.TOP.BUTTON.NOTION.CLOSE },
        notes: {
          value: contexts.notion.reducer.state.colors.notes,
          rows: INFORMATION.TOP.FORM_ROWS.NOTION.COLORS_NOTE,
        },
      },
    },
  };
  return { property: { bodies: bodiesProperties, modals: modalsProperties } };
}

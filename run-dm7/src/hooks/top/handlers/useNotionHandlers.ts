import * as VMs from "@/types/top/viewmodels";
import * as Hndls from "@/types/top/handlers";

interface NotionHandlersProps {
  contexts: VMs.TopContexts;
}
interface NotionHandlersReturns {
  handlers: Hndls.NotionHandlers;
}

export function useNotionHandlers({ contexts }: NotionHandlersProps): NotionHandlersReturns {
  const dispatch = contexts.notion.reducer.dispatch;
  const keyList = contexts.notion.reducer.state.notionInfo.keyList;
  const itemList = contexts.notion.reducer.state.notionInfo.itemList;
  const articleItem = contexts.notion.reducer.state.article.articleItem;

  const articleGridHandlers = keyList.map((key) => {
    const found = itemList.find((item) => item.key === key);
    return {
      key,
      card: {
        onClick: () => {
          if (found) {
            dispatch.setArticleItem({
              image: found.thmbs,
              title: found.title,
              descs: { item: "" },
              links: { label: "" },
            });
          }
          dispatch.showArticle(true);
          contexts.page.modals.notion.dispatch(true);
        },
      },
    };
  });

  return {
    handlers: {
      bodies: {
        header: {
          reload: {
            onClick: () => {
              // Reload trigger will be handled by Controls layer
            },
          },
        },
        articleItem: { itemList: articleGridHandlers },
      },
      modals: {
        articleItem: {
          links: { onClick: () => {} },
          articleNote: {
            close: {
              onClick: () => {
                dispatch.showArticle(false);
                contexts.page.modals.notion.dispatch(false);
              },
            },
            notes: { onChange: (text) => dispatch.articleNote(text) },
          },
        },
        colorsItem: {
          colorsNote: {
            close: {
              onClick: () => {
                dispatch.showColors(false);
                contexts.page.modals.notion.dispatch(false);
              },
            },
            notes: { onChange: (text) => dispatch.colorsNote(text) },
          },
        },
      },
    },
  };
}

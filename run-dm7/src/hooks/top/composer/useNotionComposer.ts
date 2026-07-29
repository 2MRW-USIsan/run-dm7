import * as Comps from "@/types/top/components";
import * as VMs from "@/types/top/viewmodels";

interface NotionComposerProps {
  handlers: VMs.TopHandlers;
  property: VMs.TopProperty;
}
interface NotionComposerReturns {
  composed: VMs.NotionComposed;
}

export function useNotionComposer({ handlers, property }: NotionComposerProps): NotionComposerReturns {
  const articleGridList = property.notion.bodies.articleItem.keyList.reduce<Comps.NotionArticleGridComps[]>(
    (list, key) => {
      const findPropsItem = property.notion.bodies.articleItem.itemList.find((item) => item.key === key);
      const findHndlsItem = handlers.notion.bodies.articleItem.itemList.find((item) => item.key === key);
      const gridItem =
        findPropsItem && findHndlsItem
          ? {
              card: { ...findHndlsItem.card },
              thmbs: findPropsItem.thmbs,
              title: { ...findPropsItem.title },
            }
          : undefined;
      return gridItem ? [...list, gridItem] : list;
    },
    [],
  );
  const notionBodies = {
    header: { reload: { ...property.notion.bodies.header.reload, ...handlers.notion.bodies.header.reload } },
    articleItem: { itemList: articleGridList },
  };
  const articleModal = {
    articleItem: {
      image: property.notion.modals.articleItem.articleItem.image,
      title: { ...property.notion.modals.articleItem.articleItem.title },
      descs: { ...property.notion.modals.articleItem.articleItem.descs },
      links: { ...property.notion.modals.articleItem.articleItem.links, ...handlers.notion.modals.articleItem.links },
    },
    articleNote: {
      label: { ...property.notion.modals.articleItem.articleNote.label },
      close: {
        ...property.notion.modals.articleItem.articleNote.close,
        ...handlers.notion.modals.articleItem.articleNote.close,
      },
      notes: {
        ...property.notion.modals.articleItem.articleNote.notes,
        ...handlers.notion.modals.articleItem.articleNote.notes,
      },
    },
  };
  const colorsModal = {
    colorsItem: {
      itemList: property.notion.modals.colorsItem.colorsItem.itemList.map((item) => ({
        colorCode: item.colorCode,
      })),
    },
    colorsNote: {
      label: { ...property.notion.modals.colorsItem.colorsNote.label },
      close: {
        ...property.notion.modals.colorsItem.colorsNote.close,
        ...handlers.notion.modals.colorsItem.colorsNote.close,
      },
      notes: {
        ...property.notion.modals.colorsItem.colorsNote.notes,
        ...handlers.notion.modals.colorsItem.colorsNote.notes,
      },
    },
  };
  return {
    composed: {
      bodies: { notion: property.notion.bodies.showBodies ? notionBodies : undefined },
      modals: {
        notion: {
          articleItem: property.notion.modals.articleItem.showModal ? articleModal : undefined,
          colorsItem: property.notion.modals.colorsItem.showModal ? colorsModal : undefined,
        },
      },
    },
  };
}

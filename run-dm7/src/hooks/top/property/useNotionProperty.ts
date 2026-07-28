import * as VMs from "@/types/top/viewmodels";
import * as Props from "@/types/top/properties";

interface NotionPropertyProps {
  contexts: VMs.TopContexts;
}
interface NotionPropertyReturns {
  property: Props.NotionProperty;
}

export function useNotionProperty({ contexts: _contexts }: NotionPropertyProps): NotionPropertyReturns {
  return {
    property: {
      bodies: {
        showBodies: false,
        header: { reload: { label: "" } },
        articleItem: { keyList: [], itemList: [] },
      },
      modals: {
        articleItem: {
          showModal: false,
          articleItem: {
            image: undefined,
            title: { item: "" },
            descs: { item: "" },
            links: { label: "" },
          },
          articleNote: { label: { item: "" }, close: { label: "" }, notes: { value: "", rows: 1 } },
        },
        colorsItem: {
          showModal: false,
          colorsItem: { itemList: [] },
          colorsNote: { label: { item: "" }, close: { label: "" }, notes: { value: "", rows: 1 } },
        },
      },
    },
  };
}

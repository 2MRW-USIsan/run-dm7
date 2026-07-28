import * as VMs from "@/types/top/viewmodels";
import * as Hndls from "@/types/top/handlers";

interface NotionHandlersProps {
  contexts: VMs.TopContexts;
}
interface NotionHandlersReturns {
  handlers: Hndls.NotionHandlers;
}

export function useNotionHandlers({ contexts: _contexts }: NotionHandlersProps): NotionHandlersReturns {
  return {
    handlers: {
      bodies: {
        header: { reload: {} },
        articleItem: { itemList: [] },
      },
      modals: {
        articleItem: {
          links: {},
          articleNote: { close: {}, notes: { onChange: () => {} } },
        },
        colorsItem: {
          colorsNote: { close: {}, notes: { onChange: () => {} } },
        },
      },
    },
  };
}

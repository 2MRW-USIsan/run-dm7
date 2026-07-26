import * as VMs from "@/types/top/viewmodels";

interface NotionHandlersProps {
  contexts: VMs.TopContexts;
}
interface NotionHandlersReturns {
  handlers: {};
}

export function useNotionHandlers({ contexts }: NotionHandlersProps): NotionHandlersReturns {
  return { handlers: {} };
}

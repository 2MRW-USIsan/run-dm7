import * as VMs from "@/types/top/viewmodels";

interface TopPageHandlersProps {
  contexts: VMs.TopContexts;
}
interface TopPageHandlersReturns {
  handlers: {};
}

export function useTopPageHandlers({ contexts }: TopPageHandlersProps): TopPageHandlersReturns {
  return { handlers: {} };
}

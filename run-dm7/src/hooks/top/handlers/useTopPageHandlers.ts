import * as VMs from "@/types/viewmodels";

interface TopPageHandlersProps {
  contexts: VMs.TopContexts;
}
interface TopPageHandlersReturns {
  handlers: {};
}

export function useTopPageHandlers({ contexts }: TopPageHandlersProps): TopPageHandlersReturns {
  return { handlers: {} };
}

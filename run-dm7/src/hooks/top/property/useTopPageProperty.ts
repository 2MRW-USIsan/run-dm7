import * as VMs from "@/types/top/viewmodels";

interface TopPagePropertyProps {
  contexts: VMs.TopContexts;
}
interface TopPagePropertyReturns {
  property: {};
}

export function useTopPageProperty({ contexts }: TopPagePropertyProps): TopPagePropertyReturns {
  return { property: {} };
}

import * as VMs from "@/types/top/viewmodels";

interface NotionPropertyProps {
  contexts: VMs.TopContexts;
}
interface NotionPropertyReturns {
  property: {};
}

export function useNotionProperty({ contexts }: NotionPropertyProps): NotionPropertyReturns {
  return { property: {} };
}

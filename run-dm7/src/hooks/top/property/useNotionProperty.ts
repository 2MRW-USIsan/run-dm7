import * as VMs from "@/types/viewmodels";

interface NotionPropertyProps {
  contexts: VMs.TopContexts;
}
interface NotionPropertyReturns {
  property: {};
}

export function useNotionProperty({ contexts }: NotionPropertyProps): NotionPropertyReturns {
  return { property: {} };
}

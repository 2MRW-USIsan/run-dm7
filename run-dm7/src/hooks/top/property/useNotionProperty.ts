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
      bodies: { notion: undefined },
      modals: { notion: undefined },
    },
  };
}

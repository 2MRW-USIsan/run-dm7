import * as VMs from "@/types/top/viewmodels";

interface NotionComposerProps {
  handlers: VMs.TopHandlers;
  property: VMs.TopProperty;
}
interface NotionComposerReturns {
  composed: VMs.NotionComposed;
}

export function useNotionComposer({ handlers, property }: NotionComposerProps): NotionComposerReturns {
  return {
    composed: {
      bodies: { notion: undefined },
      modals: { notion: undefined },
    },
  };
}

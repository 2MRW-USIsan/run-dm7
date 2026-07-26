import * as VMs from "@/types/top/viewmodels";

interface NotionComposerProps {
  handlers: {};
  property: {};
}
interface NotionComposerReturns {
  composed: VMs.NotionComposed;
}

export function useNotionComposer({ handlers, property }: NotionComposerProps): NotionComposerReturns {
  return {
    composed: {
      bodies: {},
      modals: {},
    } as VMs.NotionComposed,
  };
}

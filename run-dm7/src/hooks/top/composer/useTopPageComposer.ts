import * as VMs from "@/types/viewmodels";

interface TopPageComposerProps {
  handlers: {};
  property: {};
}
interface TopPageComposerReturns {
  composed: VMs.TopPageComposed;
}

export function useTopPageComposer({ handlers, property }: TopPageComposerProps): TopPageComposerReturns {
  return {
    composed: {
      frames: {},
      bodies: {},
      modals: {},
    } as VMs.TopPageComposed,
  };
}

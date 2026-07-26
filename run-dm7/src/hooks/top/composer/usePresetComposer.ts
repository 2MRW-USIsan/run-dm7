import * as VMs from "@/types/viewmodels";

interface PresetComposerProps {
  handlers: {};
  property: {};
}
interface PresetComposerReturns {
  composed: VMs.PresetComposed;
}

export function usePresetComposer({ handlers, property }: PresetComposerProps): PresetComposerReturns {
  return {
    composed: {
      bodies: {},
      modals: {},
    } as VMs.PresetComposed,
  };
}

import * as VMs from "@/types/top/viewmodels";

interface PresetComposerProps {
  handlers: VMs.TopHandlers;
  property: VMs.TopProperty;
}
interface PresetComposerReturns {
  composed: VMs.PresetComposed;
}

export function usePresetComposer({ handlers: _handlers, property }: PresetComposerProps): PresetComposerReturns {
  return {
    composed: {
      bodies: { ...property.preset.bodies },
      modals: { ...property.preset.modals },
    },
  };
}

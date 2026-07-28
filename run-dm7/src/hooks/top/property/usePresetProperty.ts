import * as VMs from "@/types/top/viewmodels";
import * as Props from "@/types/top/properties";

interface PresetPropertyProps {
  contexts: VMs.TopContexts;
}
interface PresetPropertyReturns {
  property: Props.PresetProperty;
}

export function usePresetProperty({ contexts: _contexts }: PresetPropertyProps): PresetPropertyReturns {
  return {
    property: {
      bodies: { preset: undefined },
      modals: { preset: undefined },
    },
  };
}

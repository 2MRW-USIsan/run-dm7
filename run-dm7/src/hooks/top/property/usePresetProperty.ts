import * as VMs from "@/types/top/viewmodels";

interface PresetPropertyProps {
  contexts: VMs.TopContexts;
}
interface PresetPropertyReturns {
  property: {};
}

export function usePresetProperty({ contexts }: PresetPropertyProps): PresetPropertyReturns {
  return { property: {} };
}

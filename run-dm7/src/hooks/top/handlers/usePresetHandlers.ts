import * as VMs from "@/types/viewmodels";

interface PresetHandlersProps {
  contexts: VMs.TopContexts;
}
interface PresetHandlersReturns {
  handlers: {};
}

export function usePresetHandlers({ contexts }: PresetHandlersProps): PresetHandlersReturns {
  return { handlers: {} };
}

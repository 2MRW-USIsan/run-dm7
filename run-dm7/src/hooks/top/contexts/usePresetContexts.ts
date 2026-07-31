import * as VMs from "@/types/top/viewmodels";

interface PresetContextsProps {
  reducers: VMs.TopReducers;
  services: VMs.TopServices;
}
interface PresetContextsReturns {
  composed: VMs.PresetContexts;
}

export function usePresetContexts({ reducers, services }: PresetContextsProps): PresetContextsReturns {
  return {
    composed: {
      reducer: reducers.preset,
      service: services.preset,
    },
  };
}

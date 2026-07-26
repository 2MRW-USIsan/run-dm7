import * as VMs from "@/types/top/viewmodels";

interface PresetServicesReturns {
  services: VMs.TopServices["preset"];
}

export function usePresetServices(): PresetServicesReturns {
  return { services: {} as VMs.TopServices["preset"] };
}

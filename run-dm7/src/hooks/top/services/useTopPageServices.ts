import * as VMs from "@/types/top/viewmodels";

interface TopPageServicesReturns {
  services: VMs.TopServices["page"];
}

export function useTopPageServices(): TopPageServicesReturns {
  return { services: {} as VMs.TopServices["page"] };
}

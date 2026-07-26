import * as VMs from "@/types/top/viewmodels";

interface NotionServicesReturns {
  services: VMs.TopServices["notion"];
}

export function useNotionServices(): NotionServicesReturns {
  return { services: {} as VMs.TopServices["notion"] };
}

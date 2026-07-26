import * as VMs from "@/types/viewmodels";

interface NotionServicesReturns {
  services: VMs.TopServices["notion"];
}

export function useNotionServices(): NotionServicesReturns {
  return { services: {} as VMs.TopServices["notion"] };
}

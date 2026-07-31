import * as VMs from "@/types/top/viewmodels";

interface NotionContextsProps {
  reducers: VMs.TopReducers;
  services: VMs.TopServices;
}
interface NotionContextsReturns {
  composed: VMs.NotionContexts;
}

export function useNotionContexts({ reducers, services }: NotionContextsProps): NotionContextsReturns {
  return {
    composed: {
      reducer: reducers.notion,
      service: services.notion,
    },
  };
}

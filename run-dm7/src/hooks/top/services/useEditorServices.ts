import * as VMs from "@/types/top/viewmodels";

interface EditorServicesReturns {
  services: VMs.TopServices["editor"];
}

export function useEditorServices(): EditorServicesReturns {
  return { services: {} as VMs.TopServices["editor"] };
}

import * as VMs from "@/types/viewmodels";

interface EditorServicesReturns {
  services: VMs.TopServices["editor"];
}

export function useEditorServices(): EditorServicesReturns {
  return { services: {} as VMs.TopServices["editor"] };
}

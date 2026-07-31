import * as VMs from "@/types/top/viewmodels";

interface EditorContextsProps {
  reducers: VMs.TopReducers;
  services: VMs.TopServices;
}
interface EditorContextsReturns {
  composed: VMs.EditorContexts;
}

export function useEditorContexts({ reducers, services }: EditorContextsProps): EditorContextsReturns {
  return {
    composed: {
      reducer: reducers.editor,
      service: services.editor,
    },
  };
}

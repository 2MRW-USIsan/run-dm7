import * as VMs from "@/types/viewmodels";

interface EditorPropertyProps {
  contexts: VMs.TopContexts;
}
interface EditorPropertyReturns {
  property: {};
}

export function useEditorProperty({ contexts }: EditorPropertyProps): EditorPropertyReturns {
  return { property: {} };
}

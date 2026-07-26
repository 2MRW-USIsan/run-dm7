import * as VMs from "@/types/viewmodels";

interface EditorHandlersProps {
  contexts: VMs.TopContexts;
}
interface EditorHandlersReturns {
  handlers: {};
}

export function useEditorHandlers({ contexts }: EditorHandlersProps): EditorHandlersReturns {
  return { handlers: {} };
}

import * as VMs from "@/types/top/viewmodels";

interface EditorHandlersProps {
  contexts: VMs.TopContexts;
}
interface EditorHandlersReturns {
  handlers: {};
}

export function useEditorHandlers({ contexts }: EditorHandlersProps): EditorHandlersReturns {
  return { handlers: {} };
}

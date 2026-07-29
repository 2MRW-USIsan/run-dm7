import * as VMs from "@/types/top/viewmodels";
import * as Hndls from "@/types/top/handlers";

interface EditorHandlersProps {
  contexts: VMs.TopContexts;
}
interface EditorHandlersReturns {
  handlers: Hndls.EditorHandlers;
}

export function useEditorHandlers({ contexts: _contexts }: EditorHandlersProps): EditorHandlersReturns {
  return {
    handlers: {
      bodies: {
        formsItem: { itemList: [] },
        notesItem: {
          ideasNotes: { notes: { onChange: () => {} } },
          colorsNotes: { notes: { onChange: () => {} } },
        },
      },
      modals: {
        header: { close: {} },
        positive: { copies: {}, prompt: { onChange: () => {} } },
        negative: { copies: {}, prompt: { onChange: () => {} } },
      },
    },
  };
}

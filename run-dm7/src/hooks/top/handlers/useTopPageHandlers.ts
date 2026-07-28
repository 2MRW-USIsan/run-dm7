import * as VMs from "@/types/top/viewmodels";
import * as Hndls from "@/types/top/handlers";

interface TopPageHandlersProps {
  contexts: VMs.TopContexts;
}
interface TopPageHandlersReturns {
  handlers: Hndls.TopPageHandlers;
}

export function useTopPageHandlers({ contexts }: TopPageHandlersProps): TopPageHandlersReturns {
  const ctx = contexts.page;
  return {
    handlers: {
      floating: { onClick: undefined },
      selector: {
        onChange: (_event, value) => ctx.selector.dispatch(value),
      },
      overlay: {
        onClose: () => {
          ctx.modals.preset.dispatch(false);
          ctx.modals.notion.dispatch(false);
          ctx.modals.editor.dispatch(false);
        },
      },
    },
  };
}

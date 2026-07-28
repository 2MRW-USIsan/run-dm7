import * as VMs from "@/types/top/viewmodels";
import * as Hndls from "@/types/top/handlers";

interface PresetHandlersProps {
  contexts: VMs.TopContexts;
}
interface PresetHandlersReturns {
  handlers: Hndls.PresetHandlers;
}

export function usePresetHandlers({ contexts: _contexts }: PresetHandlersProps): PresetHandlersReturns {
  return {
    handlers: {
      bodies: {
        templates: {
          positive: { header: { onChange: () => {} } },
          negative: { header: { onChange: () => {} } },
        },
        tableData: { selector: { onChange: () => {} } },
        categories: { bodiesList: [] },
        directions: { bodiesList: [] },
      },
      modals: {
        header: { close: {} },
        templates: { exports: {}, uploads: {} },
        categories: { exports: {}, uploads: {} },
        directions: { exports: {}, uploads: {} },
      },
    },
  };
}

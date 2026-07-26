import * as VMs from "@/types/top/viewmodels";
import { useEditorHandlers } from "./handlers/useEditorHandlers";
import { useNotionHandlers } from "./handlers/useNotionHandlers";
import { usePresetHandlers } from "./handlers/usePresetHandlers";
import { useTopPageHandlers } from "./handlers/useTopPageHandlers";

interface TopHandlersProps {
  contexts: VMs.TopContexts;
}
interface TopHandlersReturns {
  handlers: VMs.TopHandlers;
}

export function useTopHandlers({ contexts }: TopHandlersProps): TopHandlersReturns {
  const { handlers: topPageHandlers } = useTopPageHandlers({ contexts });
  const { handlers: presetHandlers } = usePresetHandlers({ contexts });
  const { handlers: notionHandlers } = useNotionHandlers({ contexts });
  const { handlers: editorHandlers } = useEditorHandlers({ contexts });

  return {
    handlers: {
      page: topPageHandlers,
      preset: presetHandlers,
      notion: notionHandlers,
      editor: editorHandlers,
    },
  };
}

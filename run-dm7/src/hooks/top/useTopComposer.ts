import * as VMs from "@/types/top/viewmodels";
import { useEditorComposer } from "./composer/useEditorComposer";
import { useNotionComposer } from "./composer/useNotionComposer";
import { usePresetComposer } from "./composer/usePresetComposer";
import { useTopPageComposer } from "./composer/useTopPageComposer";
import { useTopHandlers } from "./useTopHandlers";
import { useTopProperty } from "./useTopProperty";

interface TopComposerProps {
  contexts: VMs.TopContexts;
}
interface TopComposerReturns {
  composed: VMs.TopComposed;
}
export function useTopComposer({ contexts }: TopComposerProps): TopComposerReturns {
  const { handlers } = useTopHandlers({ contexts });
  const { property } = useTopProperty({ contexts });

  const { composed: topPageComposed } = useTopPageComposer({ handlers, property });
  const { composed: presetComposed } = usePresetComposer({ handlers, property });
  const { composed: notionComposed } = useNotionComposer({ handlers, property });
  const { composed: editorComposed } = useEditorComposer({ handlers, property });

  return {
    composed: {
      page: topPageComposed,
      preset: presetComposed,
      notion: notionComposed,
      editor: editorComposed,
    },
  };
}

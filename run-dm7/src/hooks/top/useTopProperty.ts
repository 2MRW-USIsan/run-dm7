import * as VMs from "@/types/viewmodels";
import { useEditorProperty } from "./property/useEditorProperty";
import { useNotionProperty } from "./property/useNotionProperty";
import { usePresetProperty } from "./property/usePresetProperty";
import { useTopPageProperty } from "./property/useTopPageProperty";

interface TopPropertyProps {
  contexts: VMs.TopContexts;
}
interface TopPropertyReturns {
  property: VMs.TopProperty;
}

export function useTopProperty({ contexts }: TopPropertyProps): TopPropertyReturns {
  const { property: topPageProperty } = useTopPageProperty({ contexts });
  const { property: presetProperty } = usePresetProperty({ contexts });
  const { property: notionProperty } = useNotionProperty({ contexts });
  const { property: editorProperty } = useEditorProperty({ contexts });

  return {
    property: {
      page: topPageProperty,
      preset: presetProperty,
      notion: notionProperty,
      editor: editorProperty,
    },
  };
}

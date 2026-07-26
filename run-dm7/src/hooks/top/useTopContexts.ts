import { useEditorContexts } from "./contexts/useEditorContexts";
import { useNotionContexts } from "./contexts/useNotionContexts";
import { usePresetContexts } from "./contexts/usePresetContexts";
import { useTopPageContexts } from "./contexts/useTopPageContexts";
import { useTopReducers } from "./useTopReducers";
import { useTopServices } from "./useTopServices";
import * as VMs from "@/types/viewmodels";

interface TopContextsReturns {
  contexts:  VMs.TopContexts;
}
export function useTopContexts(): TopContextsReturns {
  const { reducers } = useTopReducers();
  const { services } = useTopServices();

  const { composed: topPageContexts } = useTopPageContexts({ reducers, services });
  const { composed: presetContexts } = usePresetContexts({ reducers, services });
  const { composed: notionContexts } = useNotionContexts({ reducers, services });
  const { composed: editorContexts } = useEditorContexts({ reducers, services });

  return {
    contexts: {
      page: topPageContexts,
      preset: presetContexts,
      notion: notionContexts,
      editor: editorContexts,
    },
  };
}

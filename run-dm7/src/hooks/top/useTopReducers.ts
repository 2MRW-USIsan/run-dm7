import * as VMs from "@/types/viewmodels";
import { useEditorReducers } from "./reducers/useEditorReducers";
import { useNotionReducers } from "./reducers/useNotionReducers";
import { usePresetReducers } from "./reducers/usePresetReducers";
import { useTopPageReducers } from "./reducers/useTopPageReducers";

interface TopReducersReturns {
  reducers: VMs.TopReducers;
}

export function useTopReducers(): TopReducersReturns {
  const { reducers: topPageReducers } = useTopPageReducers();
  const { reducers: presetReducers } = usePresetReducers();
  const { reducers: notionReducers } = useNotionReducers();
  const { reducers: editorReducers } = useEditorReducers();

  return {
    reducers: {
      page: topPageReducers,
      preset: presetReducers,
      notion: notionReducers,
      editor: editorReducers,
    },
  };
}

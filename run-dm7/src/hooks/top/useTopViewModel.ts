import * as VMs from "@/types/viewmodels";
import { useTopComposer } from "./useTopComposer";
import { useTopContexts } from "./useTopContexts";
import { useTopControls } from "./useTopControls";

interface TopViewModelReturns {
  viewmodels: VMs.TopViewModels;
}
export function useTopViewModel(): TopViewModelReturns {
  const { contexts } = useTopContexts();
  const { composed } = useTopComposer({ contexts });
  /*----------------*/ useTopControls({ contexts });

  return {
    viewmodels: {
      ...composed.page.frames,
      bodies: {
        ...composed.page.bodies,
        ...composed.preset.bodies,
        ...composed.notion.bodies,
        ...composed.editor.bodies,
      },
      modals: {
        ...composed.page.modals,
        ...composed.preset.modals,
        ...composed.notion.modals,
        ...composed.editor.modals,
      },
    },
  };
}





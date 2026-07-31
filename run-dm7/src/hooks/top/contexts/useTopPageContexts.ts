import * as VMs from "@/types/top/viewmodels";

interface TopPageContextsProps {
  reducers: VMs.TopReducers;
  services: VMs.TopServices;
}
interface TopPageContextsReturns {
  composed: VMs.TopPageContexts;
}

export function useTopPageContexts({ reducers }: TopPageContextsProps): TopPageContextsReturns {
  const page = reducers.page;
  return {
    composed: {
      selector: {
        value: page.state.selectSheet,
        dispatch: page.dispatch.selectSheet,
      },
      modals: {
        preset: { show: page.state.openPreset, dispatch: page.dispatch.openPreset },
        notion: { show: page.state.openNotion, dispatch: page.dispatch.openNotion },
        editor: { show: page.state.openEditor, dispatch: page.dispatch.openEditor },
      },
    },
  };
}

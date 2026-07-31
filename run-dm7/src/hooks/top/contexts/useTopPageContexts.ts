import * as VMs from "@/types/top/viewmodels";

interface TopPageContextsProps {
  reducers: VMs.TopReducers;
  services: VMs.TopServices;
}
interface TopPageContextsReturns {
  composed: VMs.TopPageContexts;
}

export function useTopPageContexts(_props: TopPageContextsProps): TopPageContextsReturns {
  return {
    composed: {
      selector: {
        value: 0,
        dispatch: () => {},
      },
      modals: {
        preset: { show: false, dispatch: () => {} },
        notion: { show: false, dispatch: () => {} },
        editor: { show: false, dispatch: () => {} },
      },
    },
  };
}

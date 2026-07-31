import * as VMs from "@/types/top/viewmodels";
import * as Props from "@/types/top/properties";

const APP_TITLE = "Run DM7";
const FAB_LABEL = "Generate";
const SELECTOR_LIST = ["Preset", "Notion", "Editor"];

interface TopPagePropertyProps {
  contexts: VMs.TopContexts;
}
interface TopPagePropertyReturns {
  property: Props.TopPageProperty;
}

export function useTopPageProperty({ contexts }: TopPagePropertyProps): TopPagePropertyReturns {
  const headerProperties = {
    item: INFORMATION.TOP.LABEL.PAGE.APP_TITLE,
  };
  const floatingProperties = {
    label: contexts.page.reducer.state.floatingLabel,
  };
  const selectorProperties = {
    value: contexts.page.reducer.state.selectSheet,
    list: INFORMATION.TOP.LIST.PAGE.SHEET_SELECTOR,
  };
  const overlayProperties = {
    open: contexts.page.reducer.state.openModal,
  };
  return {
    property: {
      header: headerProperties,
      floating: floatingProperties,
      selector: selectorProperties,
      overlay: overlayProperties,
    },
  };
}

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
  const ctx = contexts.page;
  return {
    property: {
      header: { item: APP_TITLE },
      floating: { label: FAB_LABEL },
      selector: {
        value: ctx.selector.value,
        list: SELECTOR_LIST,
      },
      overlay: {
        open: ctx.modals.preset.show || ctx.modals.notion.show || ctx.modals.editor.show,
      },
    },
  };
}

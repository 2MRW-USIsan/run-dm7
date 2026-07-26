import * as VMs from "@/types/top/viewmodels";
import * as Props from "@/types/top/properties";

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
      selector: {
        value: ctx.selector.value,
        list: SELECTOR_LIST,
      },
      showData: {
        preset: ctx.selector.value === 0,
        notion: ctx.selector.value === 1,
        editor: ctx.selector.value === 2,
        presetModal: ctx.modals.preset.show,
        notionModal: ctx.modals.notion.show,
        editorModal: ctx.modals.editor.show,
      },
    },
  };
}

import * as VMs from "@/types/top/viewmodels";
import * as Props from "@/types/top/properties";
import { INFORMATION } from "@/hooks/top/information";

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
    label: INFORMATION.TOP.LABEL.PAGE.FLOATING,
  };
  const selectorProperties = {
    value: contexts.page.selector.value,
    list: [...INFORMATION.TOP.LIST.PAGE.SHEET_SELECTOR],
  };
  const overlayProperties = {
    open:
      contexts.page.modals.preset.show ||
      contexts.page.modals.notion.show ||
      contexts.page.modals.editor.show,
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

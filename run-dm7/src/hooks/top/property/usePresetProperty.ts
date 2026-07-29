import * as VMs from "@/types/top/viewmodels";
import * as Props from "@/types/top/properties";

interface PresetPropertyProps {
  contexts: VMs.TopContexts;
}
interface PresetPropertyReturns {
  property: Props.PresetProperty;
}

export function usePresetProperty({ contexts: _contexts }: PresetPropertyProps): PresetPropertyReturns {
  return {
    property: {
      bodies: {
        showBodies: false,
        templates: {
          positive: { info: { label: { item: "" } }, header: { value: "", rows: 1 } },
          negative: { info: { label: { item: "" } }, header: { value: "", rows: 1 } },
        },
        tableData: { selector: { value: 0, list: [] } },
        categories: { showTable: false, headerList: [], keyList: [], bodiesList: [] },
        directions: { showTable: false, headerList: [], keyList: [], bodiesList: [] },
      },
      modals: {
        showModals: false,
        header: { info: { label: { item: "" } }, close: { label: "" } },
        templates: {
          info: { title: { item: "" }, label: { item: "" }, sources: { item: "" } },
          exports: { label: "" },
          uploads: { label: "" },
        },
        categories: {
          info: { title: { item: "" }, label: { item: "" }, sources: { item: "" } },
          exports: { label: "" },
          uploads: { label: "" },
        },
        directions: {
          info: { title: { item: "" }, label: { item: "" }, sources: { item: "" } },
          exports: { label: "" },
          uploads: { label: "" },
        },
      },
    },
  };
}

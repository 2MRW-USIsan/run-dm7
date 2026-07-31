import * as VMs from "@/types/top/viewmodels";
import * as Hndls from "@/types/top/handlers";

interface PresetHandlersProps {
  contexts: VMs.TopContexts;
}
interface PresetHandlersReturns {
  handlers: Hndls.PresetHandlers;
}

export function usePresetHandlers({ contexts }: PresetHandlersProps): PresetHandlersReturns {
  const dispatch = contexts.preset.reducer.dispatch;
  const categoriesKeyList = contexts.preset.reducer.state.categories.keyList;
  const directionsKeyList = contexts.preset.reducer.state.directions.keyList;

  const categoriesBodiesList = categoriesKeyList.map((key) => ({
    key,
    exclude: { onClick: () => dispatch.categoriesExclude(key) },
    deleted: { onClick: () => dispatch.categoriesDeleted(key) },
  }));

  const directionsBodiesList = directionsKeyList.map((key) => ({
    key,
    exclude: { onClick: () => dispatch.directionsExclude(key) },
    deleted: { onClick: () => dispatch.directionsDeleted(key) },
  }));

  return {
    handlers: {
      bodies: {
        templates: {
          positive: { header: { onChange: (text) => dispatch.positiveTemplate(text) } },
          negative: { header: { onChange: (text) => dispatch.negativeTemplate(text) } },
        },
        tableData: {
          selector: { onChange: (_event, value) => dispatch.selectTable(value) },
          paginate: { onChange: (_event, page) => dispatch.currentPage(page) },
        },
        categories: { bodiesList: categoriesBodiesList },
        directions: { bodiesList: directionsBodiesList },
      },
      modals: {
        header: { close: { onClick: () => dispatch.showModals(false) } },
        templates: {
          exports: { onClick: () => {} },
          uploads: { onUpload: () => {} },
        },
        categories: {
          exports: { onClick: () => {} },
          uploads: { onUpload: () => {} },
        },
        directions: {
          exports: { onClick: () => {} },
          uploads: { onUpload: () => {} },
        },
      },
    },
  };
}

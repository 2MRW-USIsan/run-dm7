import * as VMs from "@/types/top/viewmodels";
import * as Props from "@/types/top/properties";

interface PresetPropertyProps {
  contexts: VMs.TopContexts;
}
interface PresetPropertyReturns {
  property: Props.PresetProperty;
}

export function usePresetProperty({ contexts }: PresetPropertyProps): PresetPropertyReturns {
  const bodiesProperties = {
    showBodies: contexts.preset.reducer.state.presetInfo.showBodies,
    templates: {
      positive: {
        info: { label: { item: INFORMATION.TOP.LABEL.PRESET.POSITIVE } },
        header: {
          value: contexts.preset.reducer.state.templates.positive,
          rows: INFORMATION.TOP.FORM_ROWS.PRESET.POSITIVE,
        },
      },
      negative: {
        info: { label: { item: INFORMATION.TOP.LABEL.PRESET.NEGATIVE } },
        header: {
          value: contexts.preset.reducer.state.templates.negative,
          rows: INFORMATION.TOP.FORM_ROWS.PRESET.NEGATIVE,
        },
      },
    },
    tableData: {
      selector: {
        value: contexts.preset.reducer.state.presetInfo.selectTable,
        list: INFORMATION.TOP.LIST.PRESET.TABLE_SELECTOR,
      },
    },
    categories: {
      showTable: contexts.preset.reducer.state.categories.showTable,
      headerList: INFORMATION.TOP.LIST.PRESET.TABLE_HEADER,
      keyList: contexts.preset.reducer.state.categories.keyList,
      bodiesList: contexts.preset.reducer.state.categories.bodiesList,
    },
    directions: {
      showTable: contexts.preset.reducer.state.directions.showTable,
      headerList: INFORMATION.TOP.LIST.PRESET.TABLE_HEADER,
      keyList: contexts.preset.reducer.state.directions.keyList,
      bodiesList: contexts.preset.reducer.state.directions.bodiesList,
    },
  };
  const modalsProperties = {
    showModals: contexts.preset.reducer.state.presetInfo.showModals,
    header: {
      info: { label: { item: INFORMATION.TOP.LABEL.PRESET.MODALS_HEADER } },
      close: { label: INFORMATION.TOP.BUTTON.PRESET.CLOSE },
    },
    templates: {
      info: {
        title: { item: INFORMATION.TOP.LABEL.PRESET.MODALS_TEMPLATES },
        label: { item: INFORMATION.TOP.LABEL.PRESET.MODALS_SRC_LABELS },
        sources: { item: contexts.preset.reducer.state.templates.templatesSource },
      },
      exports: { label: INFORMATION.TOP.BUTTON.PRESET.EXPORTS },
      uploads: { label: INFORMATION.TOP.BUTTON.PRESET.UPLOADS },
    },
    categories: {
      info: {
        title: { item: INFORMATION.TOP.LABEL.PRESET.MODALS_CATEGORIES },
        label: { item: INFORMATION.TOP.LABEL.PRESET.MODALS_SRC_LABELS },
        sources: { item: contexts.preset.reducer.state.categories.categoriesSource },
      },
      exports: { label: INFORMATION.TOP.BUTTON.PRESET.EXPORTS },
      uploads: { label: INFORMATION.TOP.BUTTON.PRESET.UPLOADS },
    },
    directions: {
      info: {
        title: { item: INFORMATION.TOP.LABEL.PRESET.MODALS_DIRECTIONS },
        label: { item: INFORMATION.TOP.LABEL.PRESET.MODALS_SRC_LABELS },
        sources: { item: contexts.preset.reducer.state.directions.directionsSource },
      },
      exports: { label: INFORMATION.TOP.BUTTON.PRESET.EXPORTS },
      uploads: { label: INFORMATION.TOP.BUTTON.PRESET.UPLOADS },
    },
  };

  return { property: { bodies: bodiesProperties, modals: modalsProperties } };
}

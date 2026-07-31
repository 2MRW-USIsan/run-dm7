import * as VMs from "@/types/top/viewmodels";
import * as Props from "@/types/top/properties";
import { INFORMATION } from "@/hooks/top/information";

interface PresetPropertyProps {
  contexts: VMs.TopContexts;
}
interface PresetPropertyReturns {
  property: Props.PresetProperty;
}

export function usePresetProperty({ contexts }: PresetPropertyProps): PresetPropertyReturns {
  const s = contexts.preset.reducer.state;
  const totalLength =
    s.presetInfo.selectTable === 0 ? s.categories.bodiesList.length : s.directions.bodiesList.length;
  const bodiesProperties = {
    showBodies: s.presetInfo.showBodies,
    templates: {
      positive: {
        info: { label: { item: INFORMATION.TOP.LABEL.PRESET.POSITIVE } },
        header: {
          value: s.templates.positive,
          rows: INFORMATION.TOP.FORM_ROWS.PRESET.POSITIVE,
        },
      },
      negative: {
        info: { label: { item: INFORMATION.TOP.LABEL.PRESET.NEGATIVE } },
        header: {
          value: s.templates.negative,
          rows: INFORMATION.TOP.FORM_ROWS.PRESET.NEGATIVE,
        },
      },
    },
    tableData: {
      selector: {
        value: s.presetInfo.selectTable,
        list: [...INFORMATION.TOP.LIST.PRESET.TABLE_SELECTOR],
      },
      paginate: {
        totalLength,
        currentPage: s.presetInfo.currentPage,
        rowsPerPage: s.presetInfo.rowsPerPage,
      },
    },
    categories: {
      showTable: s.categories.showTable,
      headerList: INFORMATION.TOP.LIST.PRESET.TABLE_HEADER as Props.PresetProperty["bodies"]["categories"]["headerList"],
      keyList: s.categories.keyList,
      bodiesList: s.categories.bodiesList,
    },
    directions: {
      showTable: s.directions.showTable,
      headerList: INFORMATION.TOP.LIST.PRESET.TABLE_HEADER as Props.PresetProperty["bodies"]["directions"]["headerList"],
      keyList: s.directions.keyList,
      bodiesList: s.directions.bodiesList,
    },
  };
  const modalsProperties = {
    showModals: s.presetInfo.showModals,
    header: {
      info: { label: { item: INFORMATION.TOP.LABEL.PRESET.MODALS_HEADER } },
      close: { label: INFORMATION.TOP.BUTTON.PRESET.CLOSE },
    },
    templates: {
      info: {
        title: { item: INFORMATION.TOP.LABEL.PRESET.MODALS_TEMPLATES },
        label: { item: INFORMATION.TOP.LABEL.PRESET.MODALS_SRC_LABELS },
        sources: { item: s.templates.templatesSource },
      },
      exports: { label: INFORMATION.TOP.BUTTON.PRESET.EXPORTS },
      uploads: { label: INFORMATION.TOP.BUTTON.PRESET.UPLOADS },
    },
    categories: {
      info: {
        title: { item: INFORMATION.TOP.LABEL.PRESET.MODALS_CATEGORIES },
        label: { item: INFORMATION.TOP.LABEL.PRESET.MODALS_SRC_LABELS },
        sources: { item: s.categories.categoriesSource },
      },
      exports: { label: INFORMATION.TOP.BUTTON.PRESET.EXPORTS },
      uploads: { label: INFORMATION.TOP.BUTTON.PRESET.UPLOADS },
    },
    directions: {
      info: {
        title: { item: INFORMATION.TOP.LABEL.PRESET.MODALS_DIRECTIONS },
        label: { item: INFORMATION.TOP.LABEL.PRESET.MODALS_SRC_LABELS },
        sources: { item: s.directions.directionsSource },
      },
      exports: { label: INFORMATION.TOP.BUTTON.PRESET.EXPORTS },
      uploads: { label: INFORMATION.TOP.BUTTON.PRESET.UPLOADS },
    },
  };

  return { property: { bodies: bodiesProperties, modals: modalsProperties } };
}

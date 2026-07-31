import * as Comps from "@/types/top/components";
import * as VMs from "@/types/top/viewmodels";

interface PresetComposerProps {
  handlers: VMs.TopHandlers;
  property: VMs.TopProperty;
}
interface PresetComposerReturns {
  composed: VMs.PresetComposed;
}

export function usePresetComposer({ handlers, property }: PresetComposerProps): PresetComposerReturns {
  const categoriesTable = {
    headerItem: { itemList: property.preset.bodies.categories.headerList },
    bodiesItem: {
      itemList: property.preset.bodies.categories.keyList.reduce<Comps.PresetTableRecordComps[]>((itemList, key) => {
        const findPropsItem = property.preset.bodies.categories.bodiesList.find((item) => item.key === key);
        const findHndlsItem = handlers.preset.bodies.categories.bodiesList.find((item) => item.key === key);
        const bodiesItem =
          findPropsItem && findHndlsItem
            ? {
                name: { ...findPropsItem.name },
                exclude: { ...findPropsItem.exclude, ...findHndlsItem.exclude },
                deleted: { ...findPropsItem.deleted, ...findHndlsItem.deleted },
              }
            : undefined;
        return bodiesItem ? [...itemList, bodiesItem] : itemList;
      }, []),
    },
  };
  const directionsTable = {
    headerItem: { itemList: property.preset.bodies.directions.headerList },
    bodiesItem: {
      itemList: property.preset.bodies.directions.keyList.reduce<Comps.PresetTableRecordComps[]>((itemList, key) => {
        const findPropsItem = property.preset.bodies.directions.bodiesList.find((item) => item.key === key);
        const findHndlsItem = handlers.preset.bodies.directions.bodiesList.find((item) => item.key === key);
        const bodiesItem =
          findPropsItem && findHndlsItem
            ? {
                name: { ...findPropsItem.name },
                exclude: { ...findPropsItem.exclude, ...findHndlsItem.exclude },
                deleted: { ...findPropsItem.deleted, ...findHndlsItem.deleted },
              }
            : undefined;
        return bodiesItem ? [...itemList, bodiesItem] : itemList;
      }, []),
    },
  };
  const presetBodies = {
    templates: {
      positive: {
        ...property.preset.bodies.templates.positive.info,
        header: {
          ...property.preset.bodies.templates.positive.header,
          ...handlers.preset.bodies.templates.positive.header,
        },
      },
      negative: {
        ...property.preset.bodies.templates.negative.info,
        header: {
          ...property.preset.bodies.templates.negative.header,
          ...handlers.preset.bodies.templates.negative.header,
        },
      },
    },
    tableData: {
      selector: { ...property.preset.bodies.tableData.selector, ...handlers.preset.bodies.tableData.selector },
      paginate: { ...property.preset.bodies.tableData.paginate, ...handlers.preset.bodies.tableData.paginate },
      categories: property.preset.bodies.categories.showTable ? categoriesTable : undefined,
      directions: property.preset.bodies.directions.showTable ? directionsTable : undefined,
    },
  };
  const presetModals = {
    header: {
      ...property.preset.modals.header.info,
      close: { ...property.preset.modals.header.close, ...handlers.preset.modals.header.close },
    },
    templates: {
      ...property.preset.modals.templates.info,
      exports: { ...property.preset.modals.templates.exports, ...handlers.preset.modals.templates.exports },
      uploads: { ...property.preset.modals.templates.uploads, ...handlers.preset.modals.templates.uploads },
    },
    categories: {
      ...property.preset.modals.categories.info,
      exports: { ...property.preset.modals.categories.exports, ...handlers.preset.modals.categories.exports },
      uploads: { ...property.preset.modals.categories.uploads, ...handlers.preset.modals.categories.uploads },
    },
    directions: {
      ...property.preset.modals.directions.info,
      exports: { ...property.preset.modals.directions.exports, ...handlers.preset.modals.directions.exports },
      uploads: { ...property.preset.modals.directions.uploads, ...handlers.preset.modals.directions.uploads },
    },
  };
  return {
    composed: {
      bodies: { preset: property.preset.bodies.showBodies ? presetBodies : undefined },
      modals: { preset: property.preset.modals.showModals ? presetModals : undefined },
    },
  };
}

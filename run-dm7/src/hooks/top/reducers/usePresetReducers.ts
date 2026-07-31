import { useReducer } from "react";
import * as Rdcrs from "@/types/top/reducers";

type PresetState = Rdcrs.PresetReducers["state"];
type PresetTableRecord = Rdcrs.PresetTableRecord;

type Action =
  | { type: "SHOW_BODIES"; show: boolean }
  | { type: "SHOW_MODALS"; show: boolean }
  | { type: "SELECT_TABLE"; value: number }
  | { type: "CURRENT_PAGE"; page: number }
  | { type: "POSITIVE_TEMPLATE"; text: string }
  | { type: "NEGATIVE_TEMPLATE"; text: string }
  | { type: "TEMPLATES_SOURCE"; src: string }
  | { type: "CATEGORIES_SOURCE"; src: string }
  | { type: "DIRECTIONS_SOURCE"; src: string }
  | { type: "SET_CATEGORIES_LIST"; list: PresetTableRecord[] }
  | { type: "SET_DIRECTIONS_LIST"; list: PresetTableRecord[] }
  | { type: "CATEGORIES_EXCLUDE"; key: string }
  | { type: "CATEGORIES_DELETED"; key: string }
  | { type: "DIRECTIONS_EXCLUDE"; key: string }
  | { type: "DIRECTIONS_DELETED"; key: string };

function toggleCheck(list: PresetTableRecord[], key: string, field: "exclude" | "deleted"): PresetTableRecord[] {
  return list.map((item) =>
    item.key === key ? { ...item, [field]: { ...item[field], check: !item[field].check } } : item,
  );
}

function reducer(state: PresetState, action: Action): PresetState {
  switch (action.type) {
    case "SHOW_BODIES":
      return { ...state, presetInfo: { ...state.presetInfo, showBodies: action.show } };
    case "SHOW_MODALS":
      return { ...state, presetInfo: { ...state.presetInfo, showModals: action.show } };
    case "SELECT_TABLE":
      return { ...state, presetInfo: { ...state.presetInfo, selectTable: action.value, currentPage: 0 } };
    case "CURRENT_PAGE":
      return { ...state, presetInfo: { ...state.presetInfo, currentPage: action.page } };
    case "POSITIVE_TEMPLATE":
      return { ...state, templates: { ...state.templates, positive: action.text } };
    case "NEGATIVE_TEMPLATE":
      return { ...state, templates: { ...state.templates, negative: action.text } };
    case "TEMPLATES_SOURCE":
      return { ...state, templates: { ...state.templates, templatesSource: action.src } };
    case "CATEGORIES_SOURCE":
      return { ...state, categories: { ...state.categories, categoriesSource: action.src } };
    case "DIRECTIONS_SOURCE":
      return { ...state, directions: { ...state.directions, directionsSource: action.src } };
    case "SET_CATEGORIES_LIST":
      return {
        ...state,
        categories: {
          ...state.categories,
          keyList: action.list.map((i) => i.key),
          bodiesList: action.list,
          showTable: action.list.length > 0,
        },
      };
    case "SET_DIRECTIONS_LIST":
      return {
        ...state,
        directions: {
          ...state.directions,
          keyList: action.list.map((i) => i.key),
          bodiesList: action.list,
          showTable: action.list.length > 0,
        },
      };
    case "CATEGORIES_EXCLUDE":
      return { ...state, categories: { ...state.categories, bodiesList: toggleCheck(state.categories.bodiesList, action.key, "exclude") } };
    case "CATEGORIES_DELETED":
      return { ...state, categories: { ...state.categories, bodiesList: toggleCheck(state.categories.bodiesList, action.key, "deleted") } };
    case "DIRECTIONS_EXCLUDE":
      return { ...state, directions: { ...state.directions, bodiesList: toggleCheck(state.directions.bodiesList, action.key, "exclude") } };
    case "DIRECTIONS_DELETED":
      return { ...state, directions: { ...state.directions, bodiesList: toggleCheck(state.directions.bodiesList, action.key, "deleted") } };
    default:
      return state;
  }
}

const initialState: PresetState = {
  presetInfo: { showBodies: true, showModals: false, selectTable: 0, currentPage: 0, rowsPerPage: 10 },
  templates: { positive: "", negative: "", templatesSource: "" },
  categories: { showTable: false, keyList: [], bodiesList: [], categoriesSource: "" },
  directions: { showTable: false, keyList: [], bodiesList: [], directionsSource: "" },
};

interface PresetReducersReturns {
  reducers: Rdcrs.PresetReducers;
}

export function usePresetReducers(): PresetReducersReturns {
  const [state, dispatch] = useReducer(reducer, initialState);
  return {
    reducers: {
      state,
      dispatch: {
        showBodies: (show) => dispatch({ type: "SHOW_BODIES", show }),
        showModals: (show) => dispatch({ type: "SHOW_MODALS", show }),
        selectTable: (value) => dispatch({ type: "SELECT_TABLE", value }),
        currentPage: (page) => dispatch({ type: "CURRENT_PAGE", page }),
        positiveTemplate: (text) => dispatch({ type: "POSITIVE_TEMPLATE", text }),
        negativeTemplate: (text) => dispatch({ type: "NEGATIVE_TEMPLATE", text }),
        templatesSource: (src) => dispatch({ type: "TEMPLATES_SOURCE", src }),
        categoriesSource: (src) => dispatch({ type: "CATEGORIES_SOURCE", src }),
        directionsSource: (src) => dispatch({ type: "DIRECTIONS_SOURCE", src }),
        setCategoriesList: (list) => dispatch({ type: "SET_CATEGORIES_LIST", list }),
        setDirectionsList: (list) => dispatch({ type: "SET_DIRECTIONS_LIST", list }),
        categoriesExclude: (key) => dispatch({ type: "CATEGORIES_EXCLUDE", key }),
        categoriesDeleted: (key) => dispatch({ type: "CATEGORIES_DELETED", key }),
        directionsExclude: (key) => dispatch({ type: "DIRECTIONS_EXCLUDE", key }),
        directionsDeleted: (key) => dispatch({ type: "DIRECTIONS_DELETED", key }),
      },
    },
  };
}

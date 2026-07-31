import { useReducer } from "react";
import * as Rdcrs from "@/types/top/reducers";

type EditorState = Rdcrs.EditorReducers["state"];
type EditorFormRecord = Rdcrs.EditorFormRecord;

type Action =
  | { type: "SHOW_BODIES"; show: boolean }
  | { type: "SHOW_MODALS"; show: boolean }
  | { type: "SET_FORMS"; keyList: string[]; itemList: EditorFormRecord[] }
  | { type: "FORM_ENTRY"; key: string; value: string }
  | { type: "FORM_RESET"; key: string }
  | { type: "FORM_CLEAR"; key: string }
  | { type: "FORM_SHUFFLE"; key: string }
  | { type: "SELECT_RADIO"; formKey: string; sectionKey: string; radioKey: string }
  | { type: "RELOAD_SECTION"; formKey: string; sectionKey: string }
  | { type: "IDEAS_NOTE"; text: string }
  | { type: "COLORS_NOTE"; text: string }
  | { type: "POSITIVE_PROMPT"; text: string }
  | { type: "NEGATIVE_PROMPT"; text: string };

function updateForm(itemList: EditorFormRecord[], key: string, updater: (f: EditorFormRecord) => EditorFormRecord): EditorFormRecord[] {
  return itemList.map((form) => (form.key === key ? updater(form) : form));
}

function shuffleArray<T>(arr: T[]): T[] {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j]!, copy[i]!];
  }
  return copy;
}

function reducer(state: EditorState, action: Action): EditorState {
  switch (action.type) {
    case "SHOW_BODIES":
      return { ...state, editorInfo: { ...state.editorInfo, showBodies: action.show } };
    case "SHOW_MODALS":
      return { ...state, editorInfo: { ...state.editorInfo, showModals: action.show } };
    case "SET_FORMS":
      return { ...state, formsItem: { keyList: action.keyList, itemList: action.itemList } };
    case "FORM_ENTRY":
      return {
        ...state,
        formsItem: {
          ...state.formsItem,
          itemList: updateForm(state.formsItem.itemList, action.key, (f) => ({ ...f, entryValue: action.value })),
        },
      };
    case "FORM_RESET":
      return {
        ...state,
        formsItem: {
          ...state.formsItem,
          itemList: updateForm(state.formsItem.itemList, action.key, (f) => ({ ...f, entryValue: "" })),
        },
      };
    case "FORM_CLEAR":
      return {
        ...state,
        formsItem: {
          ...state.formsItem,
          itemList: updateForm(state.formsItem.itemList, action.key, (f) => ({
            ...f,
            entryValue: "",
            sectionItemList: f.sectionItemList.map((s) => ({
              ...s,
              selectedRadioKey: s.radioKeyList[0] ?? "",
            })),
          })),
        },
      };
    case "FORM_SHUFFLE":
      return {
        ...state,
        formsItem: {
          ...state.formsItem,
          itemList: updateForm(state.formsItem.itemList, action.key, (f) => ({
            ...f,
            sectionItemList: f.sectionItemList.map((s) => {
              const shuffled = shuffleArray(s.radioKeyList);
              return { ...s, radioKeyList: shuffled, selectedRadioKey: shuffled[0] ?? "" };
            }),
          })),
        },
      };
    case "SELECT_RADIO":
      return {
        ...state,
        formsItem: {
          ...state.formsItem,
          itemList: updateForm(state.formsItem.itemList, action.formKey, (f) => ({
            ...f,
            sectionItemList: f.sectionItemList.map((s) =>
              s.key === action.sectionKey ? { ...s, selectedRadioKey: action.radioKey } : s,
            ),
          })),
        },
      };
    case "RELOAD_SECTION":
      return {
        ...state,
        formsItem: {
          ...state.formsItem,
          itemList: updateForm(state.formsItem.itemList, action.formKey, (f) => ({
            ...f,
            sectionItemList: f.sectionItemList.map((s) =>
              s.key === action.sectionKey
                ? { ...s, selectedRadioKey: s.radioKeyList[0] ?? "" }
                : s,
            ),
          })),
        },
      };
    case "IDEAS_NOTE":
      return { ...state, notesItem: { ...state.notesItem, ideasNote: action.text } };
    case "COLORS_NOTE":
      return { ...state, notesItem: { ...state.notesItem, colorsNote: action.text } };
    case "POSITIVE_PROMPT":
      return { ...state, modals: { ...state.modals, positivePrompt: action.text } };
    case "NEGATIVE_PROMPT":
      return { ...state, modals: { ...state.modals, negativePrompt: action.text } };
    default:
      return state;
  }
}

const initialState: EditorState = {
  editorInfo: { showBodies: false, showModals: false },
  formsItem: { keyList: [], itemList: [] },
  notesItem: { mainChip: null, subChips: [], ideasNote: "", colorsNote: "" },
  modals: { positivePrompt: "", negativePrompt: "" },
};

interface EditorReducersReturns {
  reducers: Rdcrs.EditorReducers;
}

export function useEditorReducers(): EditorReducersReturns {
  const [state, dispatch] = useReducer(reducer, initialState);
  return {
    reducers: {
      state,
      dispatch: {
        showBodies: (show) => dispatch({ type: "SHOW_BODIES", show }),
        showModals: (show) => dispatch({ type: "SHOW_MODALS", show }),
        setForms: (keyList, itemList) => dispatch({ type: "SET_FORMS", keyList, itemList }),
        formEntry: (key, value) => dispatch({ type: "FORM_ENTRY", key, value }),
        formReset: (key) => dispatch({ type: "FORM_RESET", key }),
        formClear: (key) => dispatch({ type: "FORM_CLEAR", key }),
        formShuffle: (key) => dispatch({ type: "FORM_SHUFFLE", key }),
        selectRadio: (formKey, sectionKey, radioKey) => dispatch({ type: "SELECT_RADIO", formKey, sectionKey, radioKey }),
        reloadSection: (formKey, sectionKey) => dispatch({ type: "RELOAD_SECTION", formKey, sectionKey }),
        ideasNote: (text) => dispatch({ type: "IDEAS_NOTE", text }),
        colorsNote: (text) => dispatch({ type: "COLORS_NOTE", text }),
        positivePrompt: (text) => dispatch({ type: "POSITIVE_PROMPT", text }),
        negativePrompt: (text) => dispatch({ type: "NEGATIVE_PROMPT", text }),
      },
    },
  };
}

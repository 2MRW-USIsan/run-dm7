import { useReducer } from "react";
import * as Rdcrs from "@/types/top/reducers";

type NotionState = Rdcrs.NotionReducers["state"];

type Action =
  | { type: "SHOW_BODIES"; show: boolean }
  | { type: "SET_ARTICLES"; keyList: string[]; itemList: Rdcrs.NotionArticleRecord[] }
  | { type: "SHOW_ARTICLE"; show: boolean }
  | { type: "SET_ARTICLE_ITEM"; item: Rdcrs.NotionArticleDetail }
  | { type: "ARTICLE_NOTE"; text: string }
  | { type: "SHOW_COLORS"; show: boolean }
  | { type: "SET_COLORS"; itemList: { colorCode: any }[] }
  | { type: "COLORS_NOTE"; text: string };

function reducer(state: NotionState, action: Action): NotionState {
  switch (action.type) {
    case "SHOW_BODIES":
      return { ...state, notionInfo: { ...state.notionInfo, showBodies: action.show } };
    case "SET_ARTICLES":
      return { ...state, notionInfo: { ...state.notionInfo, keyList: action.keyList, itemList: action.itemList } };
    case "SHOW_ARTICLE":
      return { ...state, article: { ...state.article, showArticle: action.show } };
    case "SET_ARTICLE_ITEM":
      return { ...state, article: { ...state.article, articleItem: action.item } };
    case "ARTICLE_NOTE":
      return { ...state, article: { ...state.article, notes: action.text } };
    case "SHOW_COLORS":
      return { ...state, colors: { ...state.colors, showColors: action.show } };
    case "SET_COLORS":
      return { ...state, colors: { ...state.colors, itemList: action.itemList } };
    case "COLORS_NOTE":
      return { ...state, colors: { ...state.colors, notes: action.text } };
    default:
      return state;
  }
}

const initialState: NotionState = {
  notionInfo: { showBodies: false, keyList: [], itemList: [] },
  article: {
    showArticle: false,
    articleItem: { image: undefined, title: { item: "" }, descs: { item: "" }, links: { label: "" } },
    notes: "",
  },
  colors: { showColors: false, itemList: [], notes: "" },
};

interface NotionReducersReturns {
  reducers: Rdcrs.NotionReducers;
}

export function useNotionReducers(): NotionReducersReturns {
  const [state, dispatch] = useReducer(reducer, initialState);
  return {
    reducers: {
      state,
      dispatch: {
        showBodies: (show) => dispatch({ type: "SHOW_BODIES", show }),
        setArticles: (keyList, itemList) => dispatch({ type: "SET_ARTICLES", keyList, itemList }),
        showArticle: (show) => dispatch({ type: "SHOW_ARTICLE", show }),
        setArticleItem: (item) => dispatch({ type: "SET_ARTICLE_ITEM", item }),
        articleNote: (text) => dispatch({ type: "ARTICLE_NOTE", text }),
        showColors: (show) => dispatch({ type: "SHOW_COLORS", show }),
        setColors: (itemList) => dispatch({ type: "SET_COLORS", itemList }),
        colorsNote: (text) => dispatch({ type: "COLORS_NOTE", text }),
      },
    },
  };
}

import { useReducer } from "react";
import * as Rdcrs from "@/types/top/reducers";

type TopPageState = TopPageReducers["state"];
type TopPageReducers = Rdcrs.TopPageReducers;

type Action =
  | { type: "SELECT_SHEET"; value: number }
  | { type: "OPEN_PRESET"; open: boolean }
  | { type: "OPEN_NOTION"; open: boolean }
  | { type: "OPEN_EDITOR"; open: boolean };

function reducer(state: TopPageState, action: Action): TopPageState {
  switch (action.type) {
    case "SELECT_SHEET":
      return { ...state, selectSheet: action.value };
    case "OPEN_PRESET":
      return { ...state, openPreset: action.open };
    case "OPEN_NOTION":
      return { ...state, openNotion: action.open };
    case "OPEN_EDITOR":
      return { ...state, openEditor: action.open };
    default:
      return state;
  }
}

const initialState: TopPageState = {
  selectSheet: 0,
  openPreset: false,
  openNotion: false,
  openEditor: false,
};

interface TopPageReducersReturns {
  reducers: Rdcrs.TopPageReducers;
}

export function useTopPageReducers(): TopPageReducersReturns {
  const [state, dispatch] = useReducer(reducer, initialState);
  return {
    reducers: {
      state,
      dispatch: {
        selectSheet: (value) => dispatch({ type: "SELECT_SHEET", value }),
        openPreset: (open) => dispatch({ type: "OPEN_PRESET", open }),
        openNotion: (open) => dispatch({ type: "OPEN_NOTION", open }),
        openEditor: (open) => dispatch({ type: "OPEN_EDITOR", open }),
      },
    },
  };
}

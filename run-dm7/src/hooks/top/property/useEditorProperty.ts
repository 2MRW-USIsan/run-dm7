import * as VMs from "@/types/top/viewmodels";
import * as Props from "@/types/top/properties";

interface EditorPropertyProps {
  contexts: VMs.TopContexts;
}
interface EditorPropertyReturns {
  property: Props.EditorProperty;
}

export function useEditorProperty({ contexts: _contexts }: EditorPropertyProps): EditorPropertyReturns {
  return {
    property: {
      bodies: {
        showBodies: false,
        formsItem: { keyList: [], itemList: [] },
        notesItem: {
          chipsNotes: {
            label: { item: "" },
            main: { label: { item: "" }, chips: { item: undefined } },
            sub: { label: { item: "" }, chips: { itemList: [] } },
          },
          ideasNotes: { label: { item: "" }, notes: { value: "", rows: 1 } },
          colorsNotes: { label: { item: "" }, notes: { value: "", rows: 1 } },
        },
      },
      modals: {
        showModals: false,
        header: { info: { label: { item: "" } }, close: { label: "" } },
        positive: { info: { label: { item: "" } }, copies: { label: "" }, prompt: { value: "", rows: 1 } },
        negative: { info: { label: { item: "" } }, copies: { label: "" }, prompt: { value: "", rows: 1 } },
      },
    },
  };
}

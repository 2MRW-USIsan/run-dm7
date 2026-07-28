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
      bodies: { editor: undefined },
      modals: { editor: undefined },
    },
  };
}

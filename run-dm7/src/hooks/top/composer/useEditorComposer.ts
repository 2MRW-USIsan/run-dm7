import * as VMs from "@/types/top/viewmodels";

interface EditorComposerProps {
  handlers: VMs.TopHandlers;
  property: VMs.TopProperty;
}
interface EditorComposerReturns {
  composed: VMs.EditorComposed;
}

export function useEditorComposer({ handlers, property }: EditorComposerProps): EditorComposerReturns {
  return {
    composed: {
      bodies: { editor: undefined },
      modals: { editor: undefined },
    },
  };
}

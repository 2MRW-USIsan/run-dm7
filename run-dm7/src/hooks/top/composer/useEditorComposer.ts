import * as VMs from "@/types/viewmodels";

interface EditorComposerProps {
  handlers: {};
  property: {};
}
interface EditorComposerReturns {
  composed: VMs.EditorComposed;
}

export function useEditorComposer({ handlers, property }: EditorComposerProps): EditorComposerReturns {
  return {
    composed: {
      bodies: {},
      modals: {},
    } as VMs.EditorComposed,
  };
}

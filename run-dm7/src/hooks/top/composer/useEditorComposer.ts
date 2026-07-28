import * as VMs from "@/types/top/viewmodels";

interface EditorComposerProps {
  handlers: VMs.TopHandlers;
  property: VMs.TopProperty;
}
interface EditorComposerReturns {
  composed: VMs.EditorComposed;
}

export function useEditorComposer({ handlers: _handlers, property }: EditorComposerProps): EditorComposerReturns {
  return {
    composed: {
      bodies: { ...property.editor.bodies },
      modals: { ...property.editor.modals },
    },
  };
}

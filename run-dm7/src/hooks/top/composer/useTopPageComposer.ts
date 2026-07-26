import * as VMs from "@/types/top/viewmodels";

const APP_TITLE = "Run DM7";
const FAB_LABEL = "Generate";

interface TopPageComposerProps {
  handlers: VMs.TopHandlers;
  property: VMs.TopProperty;
}
interface TopPageComposerReturns {
  composed: VMs.TopPageComposed;
}

export function useTopPageComposer({ handlers, property }: TopPageComposerProps): TopPageComposerReturns {
  const h = handlers.page;
  const p = property.page;

  return {
    composed: {
      frames: {
        header: { header: { item: APP_TITLE } },
        footer: { floating: { label: FAB_LABEL } },
      },
      bodies: {
        selector: {
          value: p.selector.value,
          list: p.selector.list,
          onChange: h.selector.onChange,
        },
      },
      modals: {
        overlay: {
          open: p.showData.presetModal || p.showData.notionModal || p.showData.editorModal,
          onClose: h.modals.overlay.onClose,
        },
      },
    },
  };
}

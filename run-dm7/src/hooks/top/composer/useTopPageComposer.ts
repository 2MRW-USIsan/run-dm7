import * as VMs from "@/types/top/viewmodels";

interface TopPageComposerProps {
  handlers: VMs.TopHandlers;
  property: VMs.TopProperty;
}
interface TopPageComposerReturns {
  composed: VMs.TopPageComposed;
}

export function useTopPageComposer({ handlers, property }: TopPageComposerProps): TopPageComposerReturns {
  return {
    composed: {
      frames: {
        header: { header: { ...property.page.header } },
        footer: { floating: { ...property.page.floating, ...handlers.page.floating } },
      },
      bodies: { selector: { ...property.page.selector, ...handlers.page.selector } },
      modals: { overlay: { ...property.page.overlay, ...handlers.page.overlay } },
    },
  };
}

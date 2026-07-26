"use client";

import { TopPage } from "@/components/top/top-page";
import * as Comps from "@/types/components";

export default function Top() {
  const props: Comps.TopPageComps = {
    header: { header: { item: "" } },
    bodies: {
      selector: { value: 0, list: [], onChange: function (event: React.SyntheticEvent, value: any): void {} },
      preset: undefined,
      notion: undefined,
      editor: undefined,
    },
    footer: { floating: { label: "", onClick: undefined } },
    modals: {
      overlay: { open: false, onClose: function (): void {} },
      preset: undefined,
      notion: undefined,
      editor: undefined,
    },
  };
  return <TopPage props={props} />;
}

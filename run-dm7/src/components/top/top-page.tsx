"use client";

import * as Comps from "@/types/components";
import { PageShell } from "../utils/shell";
import { TopPageBodies, TopPageModals } from "./top-contents";
import { TopPageHeader, TopPageFooter } from "./top-frame";

interface TopPageProps {
  props: Comps.TopPageComps;
}
export function TopPage({ props: { header, bodies, footer, modals } }: TopPageProps) {
  return (
    <PageShell>
      <TopPageHeader props={header} />
      <TopPageBodies props={bodies} />
      <TopPageFooter props={footer} />
      <TopPageModals props={modals} />
    </PageShell>
  );
}

import * as Comps from "@/types/components";
import { AppbarShell, ToolbarShell } from "../utils/shell";
import { FabItem, LabelItem } from "../utils/ui";

interface TopPageHeaderProps {
  props: Comps.TopPageHeaderComps;
}
export function TopPageHeader({ props: {} }: TopPageHeaderProps) {
  return (
    <AppbarShell>
      <LabelItem props={undefined} />
    </AppbarShell>
  );
}

interface TopPageFooterProps {
  props: Comps.TopPageFooterComps;
}
export function TopPageFooter({ props: {} }: TopPageFooterProps) {
  return (
    <ToolbarShell>
      <FabItem props={undefined} />
    </ToolbarShell>
  );
}

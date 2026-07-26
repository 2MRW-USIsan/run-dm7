import * as Comps from "@/types/top/components";
import { AppbarShell, ToolbarShell } from "../utils/shell";
import { FabItem, LabelItem } from "../utils/ui";

interface TopPageHeaderProps {
  props: Comps.TopPageHeaderComps;
}
export function TopPageHeader({ props: { header } }: TopPageHeaderProps) {
  return (
    <AppbarShell>
      <LabelItem props={header} />
    </AppbarShell>
  );
}

interface TopPageFooterProps {
  props: Comps.TopPageFooterComps;
}
export function TopPageFooter({ props: { floating } }: TopPageFooterProps) {
  return (
    <ToolbarShell>
      <FabItem props={floating} />
    </ToolbarShell>
  );
}

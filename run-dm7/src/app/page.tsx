import { TopPage } from "@/components/top/top-page";
import * as Comps from "@/types/components";

export default function Top() {
  const props: Comps.TopPagePropsComps = {
    header: {},
    bodies: {},
    footer: {},
    modals: {},
  };
  return <TopPage props={props} />;
}

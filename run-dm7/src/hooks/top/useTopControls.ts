import * as VMs from "@/types/top/viewmodels";
import { useEditorControls } from "./controls/useEditorControls";
import { useNotionControls } from "./controls/useNotionControls";
import { usePresetControls } from "./controls/usePresetControls";
import { useTopPageControls } from "./controls/useTopPageControls";

interface TopControlsProps {
  contexts: VMs.TopContexts;
}
export function useTopControls({ contexts }: TopControlsProps): void {
  useTopPageControls({ contexts });
  usePresetControls({ contexts });
  useNotionControls({ contexts });
  useEditorControls({ contexts });
}

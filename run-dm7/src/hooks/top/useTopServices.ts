import * as VMs from "@/types/top/viewmodels";
import { useEditorServices } from "./services/useEditorServices";
import { useNotionServices } from "./services/useNotionServices";
import { usePresetServices } from "./services/usePresetServices";
import { useTopPageServices } from "./services/useTopPageServices";

interface TopServicesReturns {
  services: VMs.TopServices;
}

export function useTopServices(): TopServicesReturns {
  const { services: topPageServices } = useTopPageServices();
  const { services: presetServices } = usePresetServices();
  const { services: notionServices } = useNotionServices();
  const { services: editorServices } = useEditorServices();

  return {
    services: {
      page: topPageServices,
      preset: presetServices,
      notion: notionServices,
      editor: editorServices,
    },
  };}

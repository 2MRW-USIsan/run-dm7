import * as Comps from "@/types/top/components";
import * as Props from "@/types/top/properties";
import * as Hndls from "@/types/top/handlers";
import * as Rdcrs from "@/types/top/reducers";
import * as Srvcs from "@/types/top/services";

export type TopViewModels = Comps.TopPageComps;

export type TopComposed = {
  page: TopPageComposed;
  preset: PresetComposed;
  notion: NotionComposed;
  editor: EditorComposed;
};

export type TopPageComposed = {
  frames: {
    header: Comps.TopPageHeaderComps;
    footer: Comps.TopPageFooterComps;
  };
  bodies: {
    selector: Comps.TabSelectItemComps;
  };
  modals: {
    overlay: Comps.ModalShellComps;
  };
};
export type PresetComposed = {
  bodies: { preset: Comps.PresetSheetComps | undefined };
  modals: { preset: Comps.PresetModalComps | undefined };
};
export type NotionComposed = {
  bodies: { notion: Comps.NotionSheetComps | undefined };
  modals: { notion: Comps.NotionModalComps | undefined };
};
export type EditorComposed = {
  bodies: { editor: Comps.EditorSheetComps | undefined };
  modals: { editor: Comps.EditorModalComps | undefined };
};

export type TopProperty = {
  page: Props.TopPageProperty;
  preset: Props.PresetProperty;
  notion: Props.NotionProperty;
  editor: Props.EditorProperty;
};
export type TopHandlers = {
  page: Hndls.TopPageHandlers;
  preset: Hndls.PresetHandlers;
  notion: Hndls.NotionHandlers;
  editor: Hndls.EditorHandlers;
};

export type TopContexts = {
  page: TopPageContexts;
  preset: PresetContexts;
  notion: NotionContexts;
  editor: EditorContexts;
};

export type TopPageContexts = {
  selector: {
    value: number;
    dispatch: (value: number) => void;
  };
  modals: {
    preset: { show: boolean; dispatch: (show: boolean) => void };
    notion: { show: boolean; dispatch: (show: boolean) => void };
    editor: { show: boolean; dispatch: (show: boolean) => void };
  };
};
export type PresetContexts = Record<string, never>;
export type NotionContexts = Record<string, never>;
export type EditorContexts = Record<string, never>;

export type TopReducers = {
  page: Rdcrs.TopPageReducers;
  preset: Rdcrs.PresetReducers;
  notion: Rdcrs.NotionReducers;
  editor: Rdcrs.EditorReducers;
};
export type TopServices = {
  page: Srvcs.TopPageServices;
  preset: Srvcs.PresetServices;
  notion: Srvcs.NotionServices;
  editor: Srvcs.EditorServices;
};

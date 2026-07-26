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

export type TopPageComposed = {};
export type PresetComposed = {};
export type NotionComposed = {};
export type EditorComposed = {};

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

export type TopPageContexts = {};
export type PresetContexts = {};
export type NotionContexts = {};
export type EditorContexts = {};

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

import * as Comps from "@/types/top/components";

export const INFORMATION = {
  TOP: {
    LABEL: {
      PAGE: {
        APP_TITLE: "Run DM7",
        FLOATING: "Generate",
      },
      PRESET: {
        POSITIVE: "Positive",
        NEGATIVE: "Negative",
        MODALS_HEADER: "File Manager",
        MODALS_TEMPLATES: "Templates",
        MODALS_CATEGORIES: "Categories",
        MODALS_DIRECTIONS: "Directions",
        MODALS_SRC_LABELS: "Source",
      },
      NOTION: {
        ARTICLE_NOTE: "Note",
        COLORS_NOTE: "Colors Note",
      },
      EDITOR: {
        CHIPS: "Chips",
        MAIN_CHIP: "Main",
        SUB_CHIPS: "Sub",
        IDEAS_NOTE: "Ideas",
        COLORS_NOTE: "Colors",
        MODALS_HEADER: "Preview",
        POSITIVE: "Positive Prompt",
        NEGATIVE: "Negative Prompt",
      },
    },
    BUTTON: {
      PRESET: {
        CLOSE: "Close",
        EXPORTS: "Export",
        UPLOADS: "Import",
      },
      NOTION: {
        RELOAD: "Reload",
        CLOSE: "Close",
      },
      EDITOR: {
        CLOSE: "Close",
        COPIES: "Copy",
        SHUFFLE: "Shuffle",
        RELOAD: "Reload",
        RESET: "Reset",
        CLEAR: "Clear",
      },
    },
    LIST: {
      PAGE: {
        SHEET_SELECTOR: ["Preset", "Notion", "Editor"],
      },
      PRESET: {
        TABLE_SELECTOR: ["Categories", "Directions"],
        TABLE_HEADER: [{ item: "Name" }, { item: "Exclude" }, { item: "Deleted" }] satisfies Comps.LabelItemComps[],
      },
    },
    FORM_ROWS: {
      PRESET: {
        POSITIVE: 6,
        NEGATIVE: 4,
      },
      NOTION: {
        ARTICLE_NOTE: 4,
        COLORS_NOTE: 4,
      },
      EDITOR: {
        IDEAS_NOTE: 4,
        COLORS_NOTE: 4,
        PROMPT: 8,
      },
    },
    ROWS_PER_PAGE: {
      PRESET: {
        TABLE: 10,
      },
    },
  },
} as const;

import * as VMs from "@/types/top/viewmodels";
import * as Props from "@/types/top/properties";
import * as Comps from "@/types/top/components";
import * as Rdcrs from "@/types/top/reducers";
import { INFORMATION } from "@/hooks/top/information";

interface EditorPropertyProps {
  contexts: VMs.TopContexts;
}
interface EditorPropertyReturns {
  property: Props.EditorProperty;
}

function buildFormsItemList(
  keyList: string[],
  itemList: Rdcrs.EditorFormRecord[],
): Props.EditorProperty["bodies"]["formsItem"]["itemList"] {
  return keyList.reduce<Props.EditorProperty["bodies"]["formsItem"]["itemList"]>((acc, formKey) => {
    const form = itemList.find((f) => f.key === formKey);
    if (!form) return acc;

    const sectionItemList = form.sectionKeyList.reduce<
      Props.EditorProperty["bodies"]["formsItem"]["itemList"][number]["selectItem"]["section"]["itemList"]
    >((secAcc, secKey) => {
      const sec = form.sectionItemList.find((s) => s.key === secKey);
      if (!sec) return secAcc;

      const radioItemList = sec.radioKeyList.reduce<
        Props.EditorProperty["bodies"]["formsItem"]["itemList"][number]["selectItem"]["section"]["itemList"][number]["selector"]["itemList"]
      >((radioAcc, radioKey) => {
        const radio = sec.radioItemList.find((r) => r.key === radioKey);
        if (!radio) return radioAcc;
        return [
          ...radioAcc,
          {
            key: radioKey,
            label: radio.label,
            check: sec.selectedRadioKey === radioKey,
          },
        ];
      }, []);

      return [
        ...secAcc,
        {
          key: secKey,
          selector: {
            keyList: sec.radioKeyList,
            itemList: radioItemList,
          },
          reload: { label: INFORMATION.TOP.BUTTON.EDITOR.RELOAD },
        },
      ];
    }, []);

    return [
      ...acc,
      {
        key: formKey,
        selectItem: {
          shuffle: { label: INFORMATION.TOP.BUTTON.EDITOR.SHUFFLE },
          section: {
            keyList: form.sectionKeyList,
            itemList: sectionItemList,
          },
        },
        entryItem: {
          field: { value: form.entryValue, rows: 2 },
          reset: { label: INFORMATION.TOP.BUTTON.EDITOR.RESET },
          clear: { label: INFORMATION.TOP.BUTTON.EDITOR.CLEAR },
        },
      },
    ];
  }, []);
}

function buildChipsNotes(
  notesItem: Rdcrs.EditorReducers["state"]["notesItem"],
): Comps.EditorChipsNotesFieldComps {
  return {
    label: { item: INFORMATION.TOP.LABEL.EDITOR.CHIPS },
    main: {
      label: { item: INFORMATION.TOP.LABEL.EDITOR.MAIN_CHIP },
      chips: { item: notesItem.mainChip !== null ? { item: notesItem.mainChip } : undefined },
    },
    sub: {
      label: { item: INFORMATION.TOP.LABEL.EDITOR.SUB_CHIPS },
      chips: { itemList: notesItem.subChips.map((chip) => ({ item: chip })) },
    },
  };
}

export function useEditorProperty({ contexts }: EditorPropertyProps): EditorPropertyReturns {
  const s = contexts.editor.reducer.state;

  const bodiesProperties: Props.EditorProperty["bodies"] = {
    showBodies: s.editorInfo.showBodies,
    formsItem: {
      keyList: s.formsItem.keyList,
      itemList: buildFormsItemList(s.formsItem.keyList, s.formsItem.itemList),
    },
    notesItem: {
      chipsNotes: buildChipsNotes(s.notesItem),
      ideasNotes: {
        label: { item: INFORMATION.TOP.LABEL.EDITOR.IDEAS_NOTE },
        notes: { value: s.notesItem.ideasNote, rows: INFORMATION.TOP.FORM_ROWS.EDITOR.IDEAS_NOTE },
      },
      colorsNotes: {
        label: { item: INFORMATION.TOP.LABEL.EDITOR.COLORS_NOTE },
        notes: { value: s.notesItem.colorsNote, rows: INFORMATION.TOP.FORM_ROWS.EDITOR.COLORS_NOTE },
      },
    },
  };

  const modalsProperties: Props.EditorProperty["modals"] = {
    showModals: s.editorInfo.showModals,
    header: {
      info: { label: { item: INFORMATION.TOP.LABEL.EDITOR.MODALS_HEADER } },
      close: { label: INFORMATION.TOP.BUTTON.EDITOR.CLOSE },
    },
    positive: {
      info: { label: { item: INFORMATION.TOP.LABEL.EDITOR.POSITIVE } },
      copies: { label: INFORMATION.TOP.BUTTON.EDITOR.COPIES },
      prompt: { value: s.modals.positivePrompt, rows: INFORMATION.TOP.FORM_ROWS.EDITOR.PROMPT },
    },
    negative: {
      info: { label: { item: INFORMATION.TOP.LABEL.EDITOR.NEGATIVE } },
      copies: { label: INFORMATION.TOP.BUTTON.EDITOR.COPIES },
      prompt: { value: s.modals.negativePrompt, rows: INFORMATION.TOP.FORM_ROWS.EDITOR.PROMPT },
    },
  };

  return { property: { bodies: bodiesProperties, modals: modalsProperties } };
}

import * as VMs from "@/types/top/viewmodels";
import * as Hndls from "@/types/top/handlers";
import * as Rdcrs from "@/types/top/reducers";

interface EditorHandlersProps {
  contexts: VMs.TopContexts;
}
interface EditorHandlersReturns {
  handlers: Hndls.EditorHandlers;
}

function buildFormsItemHandlers(
  keyList: string[],
  itemList: Rdcrs.EditorFormRecord[],
  dispatch: Rdcrs.EditorReducers["dispatch"],
): Hndls.EditorHandlers["bodies"]["formsItem"]["itemList"] {
  return keyList.reduce<Hndls.EditorHandlers["bodies"]["formsItem"]["itemList"]>((acc, formKey) => {
    const form = itemList.find((f) => f.key === formKey);
    if (!form) return acc;

    const sectionItemList = form.sectionKeyList.reduce<
      Hndls.EditorHandlers["bodies"]["formsItem"]["itemList"][number]["selectItem"]["section"]["itemList"]
    >((secAcc, secKey) => {
      const sec = form.sectionItemList.find((s) => s.key === secKey);
      if (!sec) return secAcc;

      const radioItemList = sec.radioKeyList.map((radioKey) => ({
        key: radioKey,
        onClick: () => dispatch.selectRadio(formKey, secKey, radioKey),
      }));

      return [
        ...secAcc,
        {
          key: secKey,
          selector: { itemList: radioItemList },
          reload: { onClick: () => dispatch.reloadSection(formKey, secKey) },
        },
      ];
    }, []);

    return [
      ...acc,
      {
        key: formKey,
        selectItem: {
          shuffle: { onClick: () => dispatch.formShuffle(formKey) },
          section: { itemList: sectionItemList },
        },
        entryItem: {
          field: { onChange: (text) => dispatch.formEntry(formKey, text) },
          reset: { onClick: () => dispatch.formReset(formKey) },
          clear: { onClick: () => dispatch.formClear(formKey) },
        },
      },
    ];
  }, []);
}

export function useEditorHandlers({ contexts }: EditorHandlersProps): EditorHandlersReturns {
  const dispatch = contexts.editor.reducer.dispatch;
  const { keyList, itemList } = contexts.editor.reducer.state.formsItem;

  const formsItemHandlers = buildFormsItemHandlers(keyList, itemList, dispatch);

  return {
    handlers: {
      bodies: {
        formsItem: { itemList: formsItemHandlers },
        notesItem: {
          ideasNotes: { notes: { onChange: (text) => dispatch.ideasNote(text) } },
          colorsNotes: { notes: { onChange: (text) => dispatch.colorsNote(text) } },
        },
      },
      modals: {
        header: {
          close: {
            onClick: () => {
              dispatch.showModals(false);
              contexts.page.modals.editor.dispatch(false);
            },
          },
        },
        positive: {
          copies: { onClick: () => navigator.clipboard?.writeText(contexts.editor.reducer.state.modals.positivePrompt) },
          prompt: { onChange: (text) => dispatch.positivePrompt(text) },
        },
        negative: {
          copies: { onClick: () => navigator.clipboard?.writeText(contexts.editor.reducer.state.modals.negativePrompt) },
          prompt: { onChange: (text) => dispatch.negativePrompt(text) },
        },
      },
    },
  };
}

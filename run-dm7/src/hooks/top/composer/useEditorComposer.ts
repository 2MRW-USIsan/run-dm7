import * as Comps from "@/types/top/components";
import * as VMs from "@/types/top/viewmodels";

interface EditorComposerProps {
  handlers: VMs.TopHandlers;
  property: VMs.TopProperty;
}
interface EditorComposerReturns {
  composed: VMs.EditorComposed;
}

export function useEditorComposer({ handlers, property }: EditorComposerProps): EditorComposerReturns {
  const formsItemList = property.editor.bodies.formsItem.keyList.reduce<Comps.EditorFormsCardComps[]>(
    (formList, formKey) => {
      const findPropsForm = property.editor.bodies.formsItem.itemList.find((item) => item.key === formKey);
      const findHndlsForm = handlers.editor.bodies.formsItem.itemList.find((item) => item.key === formKey);
      if (!findPropsForm || !findHndlsForm) return formList;

      const sectionItemList = findPropsForm.selectItem.section.keyList.reduce<Comps.SelectRecordItemComps[]>(
        (secList, secKey) => {
          const findPropsSection = findPropsForm.selectItem.section.itemList.find((item) => item.key === secKey);
          const findHndlsSection = findHndlsForm.selectItem.section.itemList.find((item) => item.key === secKey);
          if (!findPropsSection || !findHndlsSection) return secList;

          const radioItemList = findPropsSection.selector.keyList.reduce<Comps.RadioItemComps[]>(
            (radioList, radioKey) => {
              const findPropsRadio = findPropsSection.selector.itemList.find((item) => item.key === radioKey);
              const findHndlsRadio = findHndlsSection.selector.itemList.find((item) => item.key === radioKey);
              const radioItem =
                findPropsRadio && findHndlsRadio
                  ? {
                      label: findPropsRadio.label,
                      check: findPropsRadio.check,
                      onClick: findHndlsRadio.onClick,
                    }
                  : undefined;
              return radioItem ? [...radioList, radioItem] : radioList;
            },
            [],
          );

          const sectionItem = {
            selector: { itemList: radioItemList },
            reload: { ...findPropsSection.reload, ...findHndlsSection.reload },
          };
          return [...secList, sectionItem];
        },
        [],
      );

      const formItem = {
        selectItem: {
          shuffle: { ...findPropsForm.selectItem.shuffle, ...findHndlsForm.selectItem.shuffle },
          section: { itemList: sectionItemList },
        },
        entryItem: {
          field: { ...findPropsForm.entryItem.field, ...findHndlsForm.entryItem.field },
          reset: { ...findPropsForm.entryItem.reset, ...findHndlsForm.entryItem.reset },
          clear: { ...findPropsForm.entryItem.clear, ...findHndlsForm.entryItem.clear },
        },
      };
      return [...formList, formItem];
    },
    [],
  );
  const editorBodies = {
    formsItem: { itemList: formsItemList },
    notesItem: {
      chipsNotes: property.editor.bodies.notesItem.chipsNotes,
      ideasNotes: {
        label: { ...property.editor.bodies.notesItem.ideasNotes.label },
        notes: {
          ...property.editor.bodies.notesItem.ideasNotes.notes,
          ...handlers.editor.bodies.notesItem.ideasNotes.notes,
        },
      },
      colorsNotes: {
        label: { ...property.editor.bodies.notesItem.colorsNotes.label },
        notes: {
          ...property.editor.bodies.notesItem.colorsNotes.notes,
          ...handlers.editor.bodies.notesItem.colorsNotes.notes,
        },
      },
    },
  };
  const editorModals = {
    header: {
      ...property.editor.modals.header.info,
      close: { ...property.editor.modals.header.close, ...handlers.editor.modals.header.close },
    },
    positive: {
      ...property.editor.modals.positive.info,
      copies: { ...property.editor.modals.positive.copies, ...handlers.editor.modals.positive.copies },
      prompt: { ...property.editor.modals.positive.prompt, ...handlers.editor.modals.positive.prompt },
    },
    negative: {
      ...property.editor.modals.negative.info,
      copies: { ...property.editor.modals.negative.copies, ...handlers.editor.modals.negative.copies },
      prompt: { ...property.editor.modals.negative.prompt, ...handlers.editor.modals.negative.prompt },
    },
  };
  return {
    composed: {
      bodies: { editor: property.editor.bodies.showBodies ? editorBodies : undefined },
      modals: { editor: property.editor.modals.showModals ? editorModals : undefined },
    },
  };
}

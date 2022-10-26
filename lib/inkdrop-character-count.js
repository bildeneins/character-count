'use babel';

import InkdropCharacterCountMessageDialog from './inkdrop-character-count-message-dialog';

module.exports = {

  activate() {
    inkdrop.components.registerClass(InkdropCharacterCountMessageDialog);
    inkdrop.layouts.addComponentToLayout(
      'modal',
      'InkdropCharacterCountMessageDialog'
    )
  },

  deactivate() {
    inkdrop.layouts.removeComponentFromLayout(
      'modal',
      'InkdropCharacterCountMessageDialog'
    )
    inkdrop.components.deleteClass(InkdropCharacterCountMessageDialog);
  }

};

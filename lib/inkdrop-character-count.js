'use babel';

import InkdropCharacterCountStatusBarItem from './inkdrop-character-count-status-bar-item';

module.exports = {

  activate() {
    inkdrop.components.registerClass(InkdropCharacterCountStatusBarItem)
    inkdrop.layouts.addComponentToLayout(
      'editor-status-bar',
      'InkdropCharacterCountStatusBarItem'
    )
  },

  deactivate() {
    inkdrop.layouts.removeComponentFromLayout(
      'editor-status-bar',
      'InkdropCharacterCountStatusBarItem'
    )
    inkdrop.components.deleteClass(InkdropCharacterCountStatusBarItem)
  }

};

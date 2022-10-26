'use babel';

import React, { useEffect, useCallback } from 'react'
import { logger, useModal } from 'inkdrop'

const InkdropCharacterCountMessageDialog = (props) => {
  const modal = useModal()
  const { Dialog } = inkdrop.components.classes

  const toggle = useCallback(() => {
    modal.show()
    logger.debug('InkdropCharacterCount was toggled!')
  }, [])

  useEffect(() => {
    const sub = inkdrop.commands.add(document.body, {
      'inkdrop-character-count:toggle': toggle
    })
    return () => sub.dispose()
  }, [toggle])

  return (
    <Dialog {...modal.state} onBackdropClick={modal.close}>
      <Dialog.Title>InkdropCharacterCount</Dialog.Title>
      <Dialog.Content>InkdropCharacterCount was toggled!</Dialog.Content>
      <Dialog.Actions>
        <button className="ui button" onClick={modal.close}>
          Close
        </button>
      </Dialog.Actions>
    </Dialog>
  )
}

export default InkdropCharacterCountMessageDialog

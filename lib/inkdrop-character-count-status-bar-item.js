'use babel'

import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import wordsCount from 'words-count'
import debounce from 'lodash.debounce'

const selectEditingNoteBody = ({ editingNote }) =>
  editingNote ? editingNote.body : ""

export default function InkdropCharacterCountStatusBarItem() {
  const [ selectedCharactersCount, setSelectedCharactersCount ] = useState(0)
  const [ selectedWordsCount, setSelectedWordsCount ] = useState(0)
  const [ totalWordsCount, setTotalWordsCount ] = useState(0)
  const noteBody = useSelector(selectEditingNoteBody)
  
  useEffect(() => {
    const { cm } = inkdrop.getActiveEditor()

    const onSelectionChange = debounce(() => {
      const selection = cm.getSelection()
      setSelectedCharactersCount(selection.length)
      setSelectedWordsCount(wordsCount(selection))
      setTotalWordsCount(wordsCount(noteBody))
    }, 100)
    
    cm.on('cursorActivity', onSelectionChange)

    return () => {
      cm.off('cursorActivity', onSelectionChange)
    }
  })
  return (
    <div>
      <span>
        {
          selectedCharactersCount === 0
          ? `${noteBody.length} characters, `
          : `${selectedCharactersCount} / ${noteBody.length} characters, `
        }
      </span>
      <span>
        {
          totalWordsCount !== 0
          && selectedWordsCount === 0
             ? `${totalWordsCount} words`
             : `${selectedWordsCount} / ${totalWordsCount} words`
        }
      </span>
    </div>
  )
}

export const componentName = InkdropCharacterCountStatusBarItem.name
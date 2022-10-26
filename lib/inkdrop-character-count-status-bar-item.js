'use babel'

import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

const selectEditingNoteBody = ({ editingNote }) =>
  editingNote ? editingNote.body : ""

export default function InkdropCharacterCountStatusBarItem() {
  const [ selectedCount, setSelectedCount ] = useState(0)
  const noteBody = useSelector(selectEditingNoteBody)
  
  useEffect(() => {
    const { cm } = inkdrop.getActiveEditor()

    const onSelectionChange = () => {
      const selection = cm.getSelection()
      setSelectedCount(selection.length)
    }
    
    cm.on('cursorActivity', onSelectionChange)

    return () => {
      cm.off('cursorActivity', onSelectionChange)
    }
  })
  return (
    <div>
      {
        selectedCount === 0
        ? `${noteBody.length} characters`
        : `${selectedCount} / ${noteBody.length} characters`
      }
    </div>
  )
}

export const componentName = InkdropCharacterCountStatusBarItem.name
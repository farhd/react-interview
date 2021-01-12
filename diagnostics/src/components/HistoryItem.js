import { useState } from 'react'

import TestCollection from './TestCollection'

function HistoryItem(props) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="HistoryItem py-3 border-b">
      <div>
        <span className="font-bold">Date: </span>
        {new Date(props.date).toLocaleString()}
      </div>
      <div>
        <span className="mr-2">Results: </span>
        <button
          className="border border-green-500 rounded px-2 text-green-500"
          onClick={toggleOpen}
        >
          {isOpen ? 'close' : 'show'}
        </button>
      </div>
      {isOpen && <TestCollection collection={props.results} />}
      <div></div>
    </div>
  )
}

export default HistoryItem

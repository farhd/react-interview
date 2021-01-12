import { useState, useEffect } from 'react'
import { useLocalStorage } from 'react-use'

import HistoryItem from '../components/HistoryItem'

function History() {
  const [testHistory] = useLocalStorage('testHistory', [])
  const [sortedHistory, setSortedHistory] = useState([])

  useEffect(() => {
    setSortedHistory(
      testHistory.sort((a, b) => {
        return new Date(b.date) - new Date(a.date)
      })
    )
  }, [testHistory])

  return (
    <div className="">
      <h1 className="mb-3 border-b">History</h1>
      <div className="max-w-xl divide-2">
        {sortedHistory.map((item, i) => (
          <HistoryItem key={i} {...item} />
        ))}
      </div>
    </div>
  )
}

export default History

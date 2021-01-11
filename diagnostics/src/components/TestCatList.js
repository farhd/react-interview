import { useState, useEffect } from 'react'

import TestCatListItem from './TestCatListItem'

function TestCatList({ tests = [] }) {
  return (
    <div>
      <ul>
        {tests.map((test, i) => (
          <TestCatListItem key={i} {...test} />
        ))}
      </ul>
    </div>
  )
}

export default TestCatList

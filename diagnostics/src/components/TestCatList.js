import { useState, useEffect } from 'react'

import TestCatListItem from './TestCatListItem'

function TestCatList({ tests = [] }) {
  return (
    <div className="TestCatList px-2 py-1">
      <table className="w-full">
        <thead>
          <tr className="">
            <th>Name</th>
            <th>Result</th>
            {/* <th>Date</th> */}
          </tr>
        </thead>
        <tbody>
          {tests.map((test, i) => (
            <TestCatListItem key={i} {...test} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TestCatList

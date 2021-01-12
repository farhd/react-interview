import { useState, useEffect } from 'react'

function TestCatListItem({ name = '', route = '', result = '' }) {
  return (
    <tr className="TestCatListItem">
      <td className="mr-3 flex">{name}</td>
      <td className="text-center">
        <span className="h-4 w-4">{result}</span>
      </td>
      {/* <td>12-12-2012</td> */}
    </tr>
  )
}

export default TestCatListItem

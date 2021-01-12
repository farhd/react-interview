import { useState, useEffect } from 'react'

import { runTest } from '../common/api'
import Spinner from './Spinner'

function TestCatListItem({ name = '', route = '' }) {
  const [result, setResult] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const onClickRun = () => {
    setIsLoading(true)
    runTest(route)
      .then((res) => {
        const { data } = res
        setResult(data.result)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }
  return (
    <tr className="TestCatListItem">
      <td className="mr-3 flex">
        <button className="px-1 mr-1.5" onClick={onClickRun}>
          <Spinner spin={isLoading} />
        </button>
        {name}
      </td>
      <td className="text-center">
        <span className="h-4 w-4">{result}</span>
      </td>
      <td>12-12-2012</td>
    </tr>
  )
}

export default TestCatListItem

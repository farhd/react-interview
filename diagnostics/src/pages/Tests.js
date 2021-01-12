import { useState, useEffect } from 'react'

import { getTests } from '../common/api'
import TestCat from '../components/TestCat.js'
import ButtonAction from '../components/ButtonAction.js'

function Tests() {
  const [tests, setTests] = useState([])

  useEffect(() => {
    getTests().then(({ data }) => setTests(data?.tests))
  }, [])

  return (
    <div className="">
      <div className="flex justify-between">
        <h1>Tests</h1>
        {tests.length && <ButtonAction>Run all</ButtonAction>}
      </div>
      <div>
        {tests.length ? (
          tests.map((test, i) => <TestCat key={i} {...test} />)
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  )
}

export default Tests

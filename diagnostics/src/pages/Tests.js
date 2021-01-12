import { useState, useEffect } from 'react'
import { useLocalStorage } from 'react-use'

import { getTests, runTest } from '../common/api'
import TestCollection from '../components/TestCollection.js'
import ButtonAction from '../components/ButtonAction.js'

function Tests() {
  const [testHistory, setTestHistory] = useLocalStorage('testHistory', [])
  const [testCats, setTestCats] = useState([])
  const [date, setDate] = useState()

  useEffect(() => {
    getTests().then(({ data }) => setTestCats(data?.tests))
  }, [])

  useEffect(() => {
    console.log(testCats)
  }, [testCats])

  const updateResults = ({ date, results }) => {
    setDate(date)
    setTestCats(results)

    updateHistory({ date, results })
  }

  const updateHistory = ({ date, results }) =>
    setTestHistory([
      ...testHistory,
      {
        date,
        results,
      },
    ])

  const onRunAllTest = async () => {
    console.log('onRunAllTest')
    const allCatsWithResults = testCats.map((testCat) => {
      const catTestsWithResults = testCat.tests?.map((test) => {
        return runTest(test.route).then((res) => {
          const { data } = res
          return { ...test, result: data.result }
        })
      })
      return Promise.all(catTestsWithResults).then((resp) => {
        return { ...testCat, tests: resp }
      })
    })
    Promise.all(allCatsWithResults).then((resp) => {
      updateResults({
        date: Date(),
        results: resp,
      })
    })
  }

  return (
    <div className="">
      <h1 className="mb-3 border-b">Tests</h1>
      <div className="flex justify-between">
        {testCats.length && (
          <>
            <div>Run date: {date ? new Date(date).toLocaleString() : ''} </div>
            <ButtonAction onClick={onRunAllTest}>Run</ButtonAction>
          </>
        )}
      </div>

      <div className="flex justify-between space-x-3">
        {testCats.length ? (
          <TestCollection collection={testCats} />
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  )
}

export default Tests

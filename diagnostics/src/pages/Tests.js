import { useState, useEffect } from 'react'
import axios from 'axios'

import TestCat from '../components/TestCat.js'

const apiBase = axios.create({
  baseURL: 'http://localhost:8001/api/v1/diagnostics/',
})

const getTests = () => apiBase.get('/tests')

function Tests() {
  const [tests, setTests] = useState([])

  useEffect(() => {
    getTests().then(({ data }) => setTests(data?.tests))
  }, [])

  return (
    <div className="App">
      <div>Tests:</div>
      <div>
        {tests.map((test, i) => (
          <TestCat key={i} {...test} />
        ))}
      </div>
    </div>
  )
}

export default Tests

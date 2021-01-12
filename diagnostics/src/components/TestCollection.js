import { useState, useEffect } from 'react'

import TestCat from './TestCat'

function TestCollection({ collection = [] }) {
  return collection.map((testCat, i) => <TestCat key={i} {...testCat} />)
}

export default TestCollection

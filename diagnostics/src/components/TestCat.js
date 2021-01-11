import { useState, useEffect } from 'react'

import TestCatList from './TestCatList'

function TestCat({ category = '', description = '', tests = [] }) {
  console.log(tests)
  return (
    <div>
      <div>Category: {category}</div>
      <div>Description: {description}</div>
      <TestCatList tests={tests} />
    </div>
  )
}

export default TestCat

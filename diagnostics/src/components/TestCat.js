import { useState, useEffect } from 'react'

import TestCatList from './TestCatList'
import ButtonAction from './ButtonAction.js'

function TestCat({ category = '', description = '', tests = [] }) {
  console.log(tests)
  return (
    <div className="TestCat border my-4">
      <div className="p-2 border-b flex justify-between items-start">
        <div>
          <h2 className="capitalize" title="Category">
            {category}
          </h2>
          <div className="capitalize" title="Description">
            {description}
          </div>
        </div>
        <ButtonAction>Run</ButtonAction>
      </div>
      <TestCatList tests={tests} />
    </div>
  )
}

export default TestCat

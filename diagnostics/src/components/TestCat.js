import { useState, useEffect } from 'react'

import TestCatList from './TestCatList'

function TestCat({ category = '', description = '', tests = [] }) {
  return (
    <div className="TestCat border my-4 flex-grow">
      <div className="p-2 border-b flex justify-between items-start">
        <div>
          <h2 className="capitalize" title="Category">
            {category}
          </h2>
          <div className="capitalize" title="Description">
            {description}
          </div>
        </div>
      </div>
      <TestCatList tests={tests} />
    </div>
  )
}

export default TestCat

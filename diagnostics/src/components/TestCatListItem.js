import { useState, useEffect } from 'react'

function TestCatListItem({ name = '', route = '' }) {
  return (
    <div>
      <div>Name: {name}</div>
      <div>Route: {route}</div>
    </div>
  )
}

export default TestCatListItem

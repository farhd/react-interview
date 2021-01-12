import React, { createContext, useReducer, useEffect } from 'react'
import Reducer from './reducer'

const initialState = {}

export const State = createContext(initialState)

export const Store = ({ children, state }) => {
  const [newState, dispatch] = useReducer(Reducer, {
    ...initialState,
    ...state,
  })

  useEffect(() => {}, [])

  return (
    <State.Provider value={[newState, dispatch]}>{children}</State.Provider>
  )
}

export default Store

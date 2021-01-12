const Reducer = (state, action) => {
  switch (action.type) {
    case 'SET_TESTS':
      return {
        ...state,
        tests: action.payload,
      }

    default:
      return state
  }
}

export default Reducer

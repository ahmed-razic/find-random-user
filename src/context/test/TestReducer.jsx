const testReducer = (state, action) => {
  switch (action.type) {
    case 'RED':
      return { ...state, color: 'red', name: action.payload.name }
    case 'GREEN':
      return { ...state, color: 'green', name: action.payload.name }
    case 'BLUE':
      return { ...state, color: 'blue', name: action.payload.name }
    default:
      return state
  }
}

export default testReducer

const rugReducer = function (state, action) {
  switch (action.type) {
    case 'SET_RANDOM_USERS':
      return {
        ...state,
        randomUsers: action.payload,
        loading: false,
      }
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
        loading: false,
      }
    case 'CLEAR_USERS':
      return {
        ...state,
        randomUsers: [],
      }
    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      }
    default:
      return state
  }
}

export default rugReducer

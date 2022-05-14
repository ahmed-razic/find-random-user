const rugReducer = function (state, action) {
  switch (action.type) {
    case 'SET_RANDOM_MALE':
      return {
        ...state,
        randomMale: action.payload,
        loading: false,
      }
    case 'SET_RANDOM_FEMALE':
      return {
        ...state,
        randomFemale: action.payload,
        loading: false,
      }
    case 'CLEAR_USERS':
      return {
        ...state,
        randomMale: null,
        randomFemale: null,
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

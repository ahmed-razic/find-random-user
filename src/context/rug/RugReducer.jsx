const rugReducer = function (state, action) {
  switch (action.type) {
    case 'GET_RANDOM_MALE':
      return {
        ...state,
        man: action.payload,
        users: users.push(action.payload),
        loading: false,
      }
    case 'GET_RANDOM_FEMALE':
      return {
        ...state,
        woman: action.payload,
        users: users.push(action.payload),
        loading: false,
      }
    case 'CLEAR_USERS':
      return {
        ...state,
        man: [],
        woman: [],
        users: [],
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

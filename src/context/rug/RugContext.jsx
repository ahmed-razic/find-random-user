//RUG - Random User Generator
import { createContext, useReducer } from 'react'
import rugReducer from './RugReducer'

const RugContext = createContext()

export const RugProvider = function ({ children }) {
  const initialState = {
    man: {},
    woman: {},
    users: [],
    loading: false,
  }

  const [state, dispatch] = useReducer(rugReducer, initialState)

  return (
    <RugContext.Provider value={{ ...state, dispatch }}>
      {children}
    </RugContext.Provider>
  )
}

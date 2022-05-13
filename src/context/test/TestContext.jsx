import { createContext, useReducer } from 'react'
import testReducer from './TestReducer'

const TestContext = createContext()

export const TestProvider = function ({ children }) {
  const initialState = {
    name: 'Initial name',
    color: 'Initial color',
  }
  const [state, dispatch] = useReducer(testReducer, initialState)

  console.log(initialState)

  const setColor = function (type, name) {
    dispatch({ type: type, payload: { name: name } })
  }

  return (
    <TestContext.Provider value={{ state, setColor }}>
      {children}
    </TestContext.Provider>
  )
}

export default TestContext

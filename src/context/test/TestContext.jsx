import { createContext, useReducer, useState } from 'react'
import testReducer from './TestReducer'

const TestContext = createContext()

export const TestProvider = function ({ children }) {
  const [text, setText] = useState('text')

  const initialState = {
    name: 'Initial name',
    color: 'Initial color',
  }
  const [state, dispatch] = useReducer(testReducer, initialState)

  console.log(initialState)

  const setColor = function (type, name) {
    dispatch({ type: type, payload: { name: name } })
  }
  const setText1 = () => {
    setText('Ahmed')

    setTimeout(() => {
      setText('text')
    }, 1000)
  }

  return (
    <TestContext.Provider value={{ state, setColor, setText1, text }}>
      {children}
    </TestContext.Provider>
  )
}

export default TestContext

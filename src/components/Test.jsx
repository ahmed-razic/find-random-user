import { useContext } from 'react'
import TestContext from '../context/test/TestContext'

function Test() {
  const { state, setColor, setText1, text } = useContext(TestContext)

  console.log(state)

  return (
    <div>
      <button
        className='btn btn-primary mr-2'
        onClick={() => setColor('GREEN', 'Ahmed')}
      >
        {state.color}
      </button>
      <button
        className='btn btn-primary mr-2'
        onClick={() => setColor('BLUE', 'Ahmed')}
      >
        {state.color}
      </button>
      <button
        className='btn btn-primary'
        onClick={() => setText1('Ahmed Razic')}
      >
        {text}
      </button>
    </div>
  )
}
export default Test

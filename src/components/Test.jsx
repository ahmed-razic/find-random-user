import { useContext } from 'react'
import TestContext from '../context/test/TestContext'

function Test() {
  const { state, setColor } = useContext(TestContext)

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
        onClick={() => setColor('RED', 'Ahmed')}
      >
        {state.color}
      </button>
    </div>
  )
}
export default Test

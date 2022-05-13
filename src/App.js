import { TestProvider } from './context/test/TestContext'
import Test from './components/Test'

function App() {
  return (
    <TestProvider>
      <div className='p-8'>
        <p className='text-3xl font-bold underline text-blue-700 mb-4'>
          Hello World!
        </p>

        <Test />
      </div>
    </TestProvider>
  )
}

export default App

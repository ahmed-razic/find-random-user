import { useContext } from 'react'
import RugContext from '../../context/rug/RugContext'
import { getRandomUsers } from '../../context/rug/RugActions'

function UserFetch() {
  const { randomUsers, dispatch } = useContext(RugContext)

  const getUsers = async function () {
    dispatch({ type: 'SET_LOADING' })
    const users = await getRandomUsers()
    dispatch({ type: 'SET_RANDOM_USERS', payload: users })
  }

  return (
    <>
      <div className='container mx-auto mb-10'>
        <div className='flex justify-evenly mb-4'>
          <button
            className='btn bg-indigo-700 border-none btn-wide'
            onClick={() => {
              getUsers()
            }}
          >
            Fetch
          </button>
        </div>
        {randomUsers.length > 0 && (
          <div className='flex justify-center mb-12'>
            <button
              className='btn bg-red-600 border-none justify-center'
              onClick={() => dispatch({ type: 'CLEAR_USERS' })}
              style={{
                visibility: randomUsers.length > 0 ? 'visible' : 'hidden',
              }}
            >
              Clear users
            </button>
          </div>
        )}
      </div>
    </>
  )
}
export default UserFetch

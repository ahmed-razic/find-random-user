import { useContext } from 'react'
import RugContext from '../../context/rug/RugContext'
import { getRandomUsers } from '../../context/rug/RugActions'
import UserResults from './UserResults'

function UserFetch() {
  const { randomUsers, dispatch } = useContext(RugContext)

  const getUsers = async function () {
    dispatch({ type: 'SET_LOADING' })
    const users = await getRandomUsers()
    dispatch({ type: 'SET_RANDOM_USERS', payload: users })
  }

  return (
    <>
      <div className='container mx-auto'>
        <div className='flex justify-evenly mb-4'>
          <button
            className='btn bg-indigo-700 border-none'
            onClick={() => {
              getUsers()
            }}
          >
            Get Random Users
          </button>
        </div>
        {randomUsers.length > 0 && (
          <div className='flex justify-center'>
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

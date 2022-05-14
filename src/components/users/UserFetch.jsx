import { useContext } from 'react'
import RugContext from '../../context/rug/RugContext'
import AlertContext from '../../context/alert/AlertContext'
import { getRandomMale, getRandomFemale } from '../../context/rug/RugActions'
import styled from 'daisyui/dist/styled'

function UserFetch() {
  const { setAlert } = useContext(AlertContext)
  const { randomMale, randomFemale, dispatch } = useContext(RugContext)

  const getMale = async function () {
    const male = await getRandomMale()
    if (male.error) {
      setAlert('male.error', 'error')
    } else {
      dispatch({ type: 'SET_RANDOM_MALE', payload: male })
    }
  }

  const getFemale = async function () {
    const female = await getRandomFemale()
    if (female.error) {
      setAlert('female.error', 'error')
    } else {
      dispatch({ type: 'SET_RANDOM_FEMALE', payload: female })
    }
  }

  return (
    <>
      <div className='container mx-auto'>
        <button className='btn bg-green-800 mr-32' onClick={getMale}>
          Get Male User
        </button>
        <button className='btn bg-green-800 mr-4' onClick={getFemale}>
          Get Female User
        </button>
        {(randomMale || randomFemale) && (
          <button
            className='btn bg-red-500'
            onClick={() => dispatch({ type: 'CLEAR_USERS' })}
            style={{
              visibility: randomMale || randomFemale ? 'visible' : 'hidden',
            }}
          >
            Clear users
          </button>
        )}
      </div>
    </>
  )
}
export default UserFetch

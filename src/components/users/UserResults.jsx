import { useContext } from 'react'
import Spinner from '../layout/Spinner'
import UserItem from '../users/UserItem'
import RugContext from '../../context/rug/RugContext'

function UserResults() {
  const { randomMale, randomFemale, loading } = useContext(RugContext)

  if (!loading) {
    return (
      <div className='flex justify-around'>
        <UserItem randomMale={randomMale} />
        <UserItem randomFemale={randomFemale} />
      </div>
    )
  } else {
    return <Spinner />
  }
}
export default UserResults

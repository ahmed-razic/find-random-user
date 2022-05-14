import { useContext } from 'react'
import Spinner from '../layout/Spinner'
import UserItem from '../users/UserItem'
import RugContext from '../../context/rug/RugContext'

function UserResults() {
  const { randomMale, randomFemale, loading } = useContext(RugContext)
  console.log(loading)

  if (loading) {
    return (
      <div className='flex justify-around'>
        <UserItem user={randomMale} />
        <UserItem user={randomFemale} />
      </div>
    )
  } else {
    return <Spinner />
  }
}
export default UserResults

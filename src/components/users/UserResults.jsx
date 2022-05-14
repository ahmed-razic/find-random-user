import { useContext } from 'react'
import Spinner from '../layout/Spinner'
import UserItem from '../users/UserItem'
import RugContext from '../../context/rug/RugContext'

function UserResults() {
  const { randomUsers, loading } = useContext(RugContext)

  if (!loading) {
    return (
      <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
        {randomUsers.map((user, index) => (
          <UserItem key={index} user={user} />
        ))}
      </div>
    )
  } else {
    return <Spinner />
  }
}
export default UserResults

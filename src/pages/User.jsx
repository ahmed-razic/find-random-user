import { useContext } from 'react'
import { useParams, Link } from 'react-router-dom'
import RugContext from '../context/rug/RugContext'
import Spinner from '../components/layout/Spinner'

function User() {
  const { randomUsers, loading } = useContext(RugContext)
  const params = useParams()
  const user = randomUsers.filter((item) => item.login.uuid === params.id)

  if (loading) {
    return <Spinner />
  }

  return (
    <div className='container'>
      <div className='flex justify-center mb-8'>
        <Link to='/' className='btn mb-4 bg-indigo-700 border-none btn-wide'>
          Back To Home
        </Link>
      </div>
      <div className='flex justify-center mb-8'>
        <img src={user[0].picture.large} alt='avatar' />
      </div>
      <div className='flex justify-center mb-8'>
        <h2 className='text-lg stat-value'>
          {user[0].name.title} {user[0].name.first} {user[0].name.last}
        </h2>
      </div>
      <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
        {user[0].location && (
          <div className='stat'>
            <div className='stat-title text-md'>Location</div>
            <div className='text-lg stat-value'>
              {user[0].location.city}, {user[0].location.state}
            </div>
          </div>
        )}
        {user[0].login.username && (
          <div className='stat'>
            <div className='stat-title text-md'>Username</div>
            <div className='text-lg stat-value'>{user[0].login.username}</div>
          </div>
        )}
        {user[0].gender && (
          <div className='stat'>
            <div className='stat-title text-md'>Gender</div>
            <div className='text-lg stat-value'>{user[0].gender}</div>
          </div>
        )}
        {user[0].dob.age && (
          <div className='stat'>
            <div className='stat-title text-md'>Age</div>
            <div className='text-lg stat-value'>{user[0].dob.age}</div>
          </div>
        )}
        {user[0].phone && (
          <div className='stat'>
            <div className='stat-title text-md'>Phone</div>
            <div className='text-lg stat-value'>{user[0].phone}</div>
          </div>
        )}
        {user[0].cell && (
          <div className='stat'>
            <div className='stat-title text-md'>Cell</div>
            <div className='text-lg stat-value'>{user[0].cell}</div>
          </div>
        )}
        {user[0].email && (
          <div className='stat'>
            <div className='stat-title text-md'>Email</div>
            <div className='text-lg stat-value'>{user[0].email}</div>
          </div>
        )}
        {user[0].nat && (
          <div className='stat'>
            <div className='stat-title text-md'>Nationality</div>
            <div className='text-lg stat-value'>{user[0].nat}</div>
          </div>
        )}
      </div>

      <div className='col-span-6'></div>
    </div>
  )
}

export default User

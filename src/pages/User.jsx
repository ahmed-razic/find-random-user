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
    <div className='w-full mx-auto lg:w-10/12'>
      <div className='mb-4'>
        <Link to='/' className='btn btn-ghost'>
          Back To Home
        </Link>
      </div>
      <div className='grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8'>
        <div className='custom-card-image mb-6 md:mb-0'>
          <div className='rounded-lg shadow-xl card image-full'>
            <figure>
              <img src={user[0].picture.large} alt='avatar' />
            </figure>
            <div className='card-body justify-end'>
              <h2 className='card-title mb-0'>
                {user[0].name.title} {user[0].name.first} {user[0].name.last}
              </h2>
              <h2 className='card-title mb-0'>{user[0].gender}</h2>
              <h2 className='card-title mb-0'>Age {user[0].dob.age}</h2>
              <p className='flex-grow-0'>{user[0].login.username}</p>
            </div>
          </div>
        </div>

        <div className='col-span-6'>
          <div className='w-full rounded-lg shadow-md bg-base-100 stats'>
            {user[0].location && (
              <div className='stat'>
                <div className='stat-title text-md'>Location</div>
                <div className='text-lg stat-value'>
                  {user[0].location.city}, {user[0].location.state}
                </div>
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
        </div>
      </div>
    </div>
  )
}

export default User

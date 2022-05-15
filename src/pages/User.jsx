import { useContext, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import RugContext from '../context/rug/RugContext'
import Spinner from '../components/layout/Spinner'
import { getUser } from '../context/rug/RugActions'

function User() {
  const { user, randomUsers, loading, dispatch } = useContext(RugContext)
  const params = useParams()

  useEffect(() => {
    dispatch({ type: 'SET_LOADING' })
    const userData = getUser(randomUsers, params.id)
    dispatch({ type: 'SET_USER', payload: userData })
  }, [params.id, dispatch, user, randomUsers])

  const {
    cell,
    dob,
    email,
    gender,
    location,
    login,
    name,
    nat,
    phone,
    picture,
  } = user

  if (loading) {
    return <Spinner />
  }

  if (Object.keys(user).length > 0) {
    return (
      <div className='container'>
        <div className='flex justify-center mb-8'>
          <Link to='/' className='btn mb-4 bg-indigo-700 border-none btn-wide'>
            Back To Home
          </Link>
        </div>
        <div className='flex justify-center mb-8'>
          <img src={picture.large} alt='avatar' />
        </div>
        <div className='flex justify-center mb-8'>
          <h2 className='text-lg stat-value'>
            {name.title} {name.first} {name.last}
          </h2>
        </div>
        <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
          {location && (
            <div className='stat'>
              <div className='stat-title text-md'>Location</div>
              <div className='text-lg stat-value'>
                {location.city}, {location.state}
              </div>
            </div>
          )}
          {login.username && (
            <div className='stat'>
              <div className='stat-title text-md'>Username</div>
              <div className='text-lg stat-value'>{login.username}</div>
            </div>
          )}
          {gender && (
            <div className='stat'>
              <div className='stat-title text-md'>Gender</div>
              <div className='text-lg stat-value'>{gender}</div>
            </div>
          )}
          {dob.age && (
            <div className='stat'>
              <div className='stat-title text-md'>Age</div>
              <div className='text-lg stat-value'>{dob.age}</div>
            </div>
          )}
          {phone && (
            <div className='stat'>
              <div className='stat-title text-md'>Phone</div>
              <div className='text-lg stat-value'>{phone}</div>
            </div>
          )}
          {cell && (
            <div className='stat'>
              <div className='stat-title text-md'>Cell</div>
              <div className='text-lg stat-value'>{cell}</div>
            </div>
          )}
          {email && (
            <div className='stat'>
              <div className='stat-title text-md'>Email</div>
              <div className='text-lg stat-value'>{email}</div>
            </div>
          )}
          {nat && (
            <div className='stat'>
              <div className='stat-title text-md'>Nationality</div>
              <div className='text-lg stat-value'>{nat}</div>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default User

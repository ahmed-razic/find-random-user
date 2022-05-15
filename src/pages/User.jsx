import { useContext, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import RugContext from '../context/rug/RugContext'
import Spinner from '../components/layout/Spinner'
import { getUser } from '../context/rug/RugActions'

function User() {
  const { randomUsers, loading, user, dispatch } = useContext(RugContext)
  const params = useParams()

  useEffect(() => {
    dispatch({ type: 'SET_LOADING' })
    const getUserData = async () => {
      const result = await getUser(randomUsers, params.id)
      dispatch({ type: 'SET_USER', payload: result })
    }
    getUserData()
  }, [params.id, randomUsers])

  const {
    gender,
    name,
    location,
    email,
    login,
    dob,
    phone,
    cell,
    picture,
    nat,
  } = user

  console.log(loading)
  if (loading) {
    return Spinner
  } else {
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
                <img src={picture.large} alt='avatar' />
              </figure>
              <div className='card-body justify-end'>
                <h2 className='card-title mb-0'>
                  {name.title} {name.first} {name.last}
                </h2>
                <h2 className='card-title mb-0'>{gender}</h2>
                <h2 className='card-title mb-0'>Age {dob.age}</h2>
                <p className='flex-grow-0'>{login.username}</p>
              </div>
            </div>
          </div>

          <div className='col-span-2'>
            <div className='w-full rounded-lg shadow-md bg-base-100 stats'>
              {location && (
                <div className='stat'>
                  <div className='stat-title text-md'>Location</div>
                  <div className='text-lg stat-value'>
                    {location.city}, {location.state}
                  </div>
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
        </div>
      </div>
    )
  }
}

export default User

import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

function UserItem({ user: { name, location, picture, login } }) {
  return (
    <div className='card shadow-md compact side bg-base-100'>
      <div className='flex-row items-center space-x-4 card-body'>
        <div>
          <div className='avatar'>
            <div className='rounded-full shadow w-14 h-14'>
              <img src={picture.large} alt='Profile' />
            </div>
          </div>
        </div>
        <div>
          <h2 className='card-title'>
            {name.first} {name.last}
          </h2>
          <h2 className='card-title'>
            {location.city}, {location.state}
          </h2>
          <Link
            className='text-base-content text-opacity-40'
            to={`/user/${login.uuid}`}
          >
            Visit Profile
          </Link>
        </div>
      </div>
    </div>
  )
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
}

export default UserItem

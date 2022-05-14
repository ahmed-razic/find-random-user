import UserFetch from '../components/users/UserFetch'
import UserResults from '../components/users/UserResults'

function Home() {
  return (
    <div className='container mx-auto'>
      <p className='text-xl text-center mb-8 font-bold'>
        Click to get 33 random users
      </p>
      <UserFetch />
      <UserResults />
    </div>
  )
}
export default Home

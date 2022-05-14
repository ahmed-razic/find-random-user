import UserFetch from '../components/users/UserFetch'
import UserResults from '../components/users/UserResults'

function Home() {
  return (
    <div className='container mx-auto'>
      <UserFetch />
      <UserResults />
    </div>
  )
}
export default Home

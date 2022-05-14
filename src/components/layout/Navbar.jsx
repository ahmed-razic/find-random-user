import { getRandomMale, getRandomFemale } from '../../context/rug/RugActions'

function Navbar() {
  getRandomMale().then((data) => console.log(data))
  getRandomFemale().then((data) => console.log(data))

  return <div>Navbar</div>
}
export default Navbar

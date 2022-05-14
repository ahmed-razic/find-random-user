import { FaUserCircle } from 'react-icons/fa'

function Footer() {
  const footerYear = new Date().getFullYear()

  return (
    <footer className='footer p-5 bg-indigo-800 text-primary-content footer-center'>
      <div>
        <FaUserCircle size={33} />
        <p>Copyright &copy; {footerYear} All rights reserved</p>
      </div>
    </footer>
  )
}

export default Footer

import { Link } from 'react-router-dom'
function Header(){
    return (
      <>
      <Link to='/'>Home</Link>
      <Link to='/aboutus'>About Us</Link>
      <Link to='/rooms'>Rooms</Link>
      <Link to='/dining'>Dining</Link>
      <Link to='/banquet'>Banquet</Link>
      <Link to='/otherfacilities'>Other Facilities</Link>
      <Link to='/gallery'>Gallery</Link>
      <Link to='/getintouch'>Get In Touch</Link>
      </>
    )
  }

  export default Header
import React, { useContext, useState } from 'react'
import '../styles/Navbar.css'
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const {handleSignOut} = useContext(AuthContext)
  
  const [isClicked, setIsClicked] = useState(false);

  const storedUsername = localStorage.getItem('username');
  const storedPhoto = localStorage.getItem('photo');
  
  const handleImgClick = () => {
    setIsClicked(!isClicked);
  }

  const logout = () => {
    localStorage.removeItem('username');
    localStorage.removeItem('photo');
    localStorage.removeItem('items');
    handleSignOut();
  }

  return (
    <div className='navbar'>
      <div className='navbar-logo'>
        <span>TO DO</span>
      </div>
      <div className='user-info'>
        <span>{storedUsername}</span>
        <div className='img-container'>
          <img src={storedPhoto} onClick={handleImgClick}/>
          {isClicked && <div className='signout-container' onClick={logout}>Sign Out</div>}
        </div>
      </div>
    </div>
  )
}

export default Navbar
import React from 'react'
import '../styles/Navbar.css'

const Navbar = () => {
  
  const storedUsername = localStorage.getItem('username');
  const storedPhoto = localStorage.getItem('photo');

  return (
    <div className='navbar'>
      <div className='navbar-logo'>
        <span>TO DO</span>
      </div>
      <div className='user-info'>
        <span>{storedUsername}</span>
        <div className='img-container'>
          <img src={storedPhoto}/>
        </div>
      </div>
    </div>
  )
}

export default Navbar
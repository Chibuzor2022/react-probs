import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className='flex items-center justify-between p-6'>
        <Link className='' to='/'>
        <h1>Softlife College</h1>        
        </Link>
        <div className='space-x-4'>
        <Link className='' to='/dashboard'>
        Dashboard       
          </Link>
          <Link className='' to='/Login'>
        Login      
          </Link>
          <Link className='' to='/Signup'>
        Signup       
        </Link>
        </div>
        <div className="">
          <button>Get Started</button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar

import React from 'react'
import "./Header.css"
import { Link } from 'react-router-dom'

const Header =()=> {
  return (
    <header className=' m-3  shadow-xl  h-20 flex justify-center items-center' >
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
    </header>
  )
}
export default Header
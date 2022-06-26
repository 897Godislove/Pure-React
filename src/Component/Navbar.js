import React from 'react'
import logo from '../assets/berries.jpg'
import { Link } from 'react-router-dom'
import '../css/Navbar.css'
import LunchDiningIcon from '@mui/icons-material/LunchDining'
import {useState} from 'react'

function Navbar() {
  const [hamB, sethamB] = useState(false)
  const reveal = () => {
    sethamB(!hamB)
    console.log(hamB)
    }

  return (
    <div className='navbar'>
      <div className="leftSide" id={hamB ? 'open' : 'close'}>
        <Link to='/'><img src={logo} /></Link>
        <div className="hiddenLinks">
          <Link to='/'>Home</Link>
          <Link to='/menu'>Menu</Link>
          <Link to='/about'>About</Link>
          <Link to='/contact'>Contact</Link>
        </div>
      </div>
      <div className="rightSide">
        <Link to='/'>Home</Link>
        <Link to='/menu'>Menu</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
        <button onClick={reveal}>
          <LunchDiningIcon/>
        </button>
      </div>
    </div>
  )
}

export default Navbar
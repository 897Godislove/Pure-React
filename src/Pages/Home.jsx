import React from 'react'
import Land from '../assets/exotic.jpg'
import {useNavigate} from 'react-router-dom'
import '../css/Home.css'
import Button from '@mui/material/Button';


function Home() {
  const goto = useNavigate()

  return (
    <div className='container' style={{backgroundImage: `url(${Land})`}}>
      <div className="overlay">
        <div className="items">
          <h1>Belly-timber</h1>
          <p>CONTINENTAL DISH AT A CLICK</p>
          {/* <button onClick={() => goto('/')}>order now</button> */}
          <Button 
          variant="contained"
          color="success"
          onClick={() => goto('/menu')}
          >
            order now
            </Button>
        </div>
      </div>
      
    </div>
  )
}

export default Home
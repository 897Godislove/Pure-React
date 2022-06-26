import { Button, TextField } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import sideImage from '../assets/caramel.jpg'
import '../css/Contact.css'

function Contact() {
  const goto = useNavigate()

  return (
    <div className="wrap">
      <div className="leftSide">
        <img src={sideImage} />
      </div>
      <div className="rightSide">
        <h1>Contact Us</h1>
        <form id='tellUs'>
          <label>Full Name</label>
          <input type='text' placeholder='Enter your full name' required/>
          <label>Email</label>
          <input type='text' placeholder='Enter correct email address' required />
          <label>Message</label>
          <textarea type='text' placeholder='Enter your message' rows='5' required />
          <Button
            variant="contained"
            color="warning"
            type="submit"
            onClick={() => goto('/contact')}
          >
            send message
          </Button>
          {/* <button 
          type='submit' 
          onClick={() => goto('/contact')}>
            send message
            <span></span>
            </button> */}
        </form>
      </div>
    </div>
    )
}

export default Contact
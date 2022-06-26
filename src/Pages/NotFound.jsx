import React from 'react'
import '../css/Home.css'
import Land from '../assets/dessert.jpg'



function NotFound() {
  return (
    <div className='container' style={{ backgroundImage: `url(${Land})` }}>
      <div className="overlay">
        <div className="items">
          <h1>404 Error</h1>
          <p>PAGE NOT FOUND</p>
        </div>
      </div>
    </div>
  )
}

export default NotFound
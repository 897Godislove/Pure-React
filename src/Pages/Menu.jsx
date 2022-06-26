import React from 'react'
import { Data } from '../Component/data'
import '../css/Menu.css'

function Menu() {
  return (
    <div className='main'>
      <h1>Our Menu</h1>
      <div className="flexWrap">
        {Data.map((menuList) => (
          <div className="wrap" key={menuList.id}>
            <img src={menuList.image} />
            <div className="desc">
              <h3>{menuList.name}</h3>
              <p>${menuList.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Menu
import React from 'react'
import { Data } from '../Component/data'
import '../css/menu2.css'

function Menu() {
  return (
    // <div className='main'>
    //   <h1>Our Menu</h1>
    //   <div className="flexWrap">
    //     {Data.map((menuList) => (
    //       <div className="wrap" key={menuList.id}>
    //         {/* <div> */}
    //           <img src={menuList.image} />
    //         {/* </div> */}
    //         <div className="desc">
    //           <h3>{menuList.name}</h3>
    //           <p>${menuList.price}</p>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
      <div className="menu">
        <h1 className="menuTitle">Our Menu</h1>
        <div className="menuList">
          {Data.map((menuItem) => (
            <div className='menuItem' key={menuItem.id}>
              <div style={{ backgroundImage: `url(${menuItem.image})`}}></div>
              <h1>{menuItem.name}</h1>
              <p>${menuItem.price}</p>
            </div>
            )
          )}
        </div>
      </div>
    // </div>
  )
}

export default Menu
import React from 'react'
import AboutImage from '../assets/extremadura-flowers.jpg'
import '../css/About.css'

function About() {
  return (
    <div className="wrap">
      <div className="aboutImage" style={{ backgroundImage: `url(${AboutImage})` }}></div>
      <div className="aboutText">
        <h1>About Us</h1>
        <p>
          Eiusmod enim et eiusmod laborum ad. Magna id laborum qui commodo aliqua Lorem. Et proident cupidatat cupidatat ad veniam nostrud dolor et elit cillum in. Occaecat commodo minim dolore nostrud. Qui est deserunt veniam cillum sunt in et.

          Cupidatat occaecat esse ad eu non. Nostrud id elit amet commodo qui eu occaecat Lorem nostrud deserunt eu fugiat fugiat. Magna eu ex ullamco cupidatat aute. Ad non aute anim non aliquip. Duis elit nulla sunt id eu commodo anim velit veniam deserunt mollit pariatur ex do.

          Magna quis cupidatat est deserunt anim veniam non. Excepteur ad dolor mollit et aliquip. Ad irure ad nulla et est minim nisi reprehenderit culpa irure amet consequat aute. Ullamco ad exercitation commodo est veniam in nisi ex officia deserunt aute laboris ad. Labore cupidatat esse deserunt deserunt veniam id in sit nisi et. Sit incididunt ullamco ea consectetur laborum exercitation culpa. Labore do veniam voluptate sint non dolore irure adipisicing.
        </p>
      </div>
    </div>
  )
}

export default About

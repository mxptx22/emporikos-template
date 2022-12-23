import React from 'react'
import { ReactComponent as Phone } from '../../Images/phone.svg'
import { ReactComponent as Facebook } from '../../Images/facebook.svg'
import { ReactComponent as Twitter } from '../../Images/twitter.svg'
import { ReactComponent as Map } from '../../Images/map.svg'

function Contact() {
  return (
    <div className="hero3">
      <h1>Contact</h1>
      <div className="twowing-container gap">
        <div className="fifty">
          <h3>We are available here:</h3>
          <Phone className="icon fill" />
          0123456789
          <br></br>
          <Map className="icon fill" />
          Some Address - Some City
          <div className="margin-small"></div>
          <h3>Our Socials</h3>
          <Twitter className="iconbig fill" />
          <Facebook className="iconbig fill" />
        </div>
        <div className="fifty">
          <h3>Contact Form</h3>
          <form>
            <label>Name</label>
            <input></input>
            <label>E-mail</label>
            <input></input>
            <label>Message</label>
            <textarea></textarea>
            <button className="sendbutton">Send</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact

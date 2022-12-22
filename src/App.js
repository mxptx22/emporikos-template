import { jsx } from '@emotion/react'
/** @jsxImportSource @emotion/react */
import React from 'react' // eslint-disable-line
import tw from 'twin.macro'
import Navbar from './Navbar'
import iPhone from './Images/iphone.png'
import SampleImage from './Images/sampleimage.png'
import Hero1Vid from './Images/hero1vid.mp4'
import { ReactComponent as SmallLogotype } from './Images/agencyidentifier.svg'
import { ReactComponent as Icon1 } from './Images/icon1.svg'
import { ReactComponent as Icon2 } from './Images/icon2.svg'
import { ReactComponent as Icon3 } from './Images/icon3.svg'
import { ReactComponent as Icon4 } from './Images/icon4.svg'
import { ReactComponent as Facebook } from './Images/facebook.svg'
import { ReactComponent as Twitter } from './Images/twitter.svg'
import { ReactComponent as Phone } from './Images/phone.svg'
import { ReactComponent as Map } from './Images/map.svg'
import { useRef, useState, useEffect } from 'react'

// const styles = {
//   // Move long class sets out of jsx to keep it scannable
//   container: ({ hasBackground }) => [
//     tw`flex flex-col items-center justify-center h-screen`,
//     hasBackground && tw`bg-gradient-to-b from-electric to-ribbon`,
//   ],
// }
function App() {
  const startRef = useRef()
  const [navbarLook, setNavbarLook] = useState('navbar navbar-initial')
  const phoneRef = useRef()
  const [phoneLook, setPhoneLook] = useState('translateX(200%)')
  const tableRef = useRef()
  const [tableLook, setTableLook] = useState('blur(2px)')

  useEffect(() => {
    const pastWelcome = startRef.current.offsetTop
    const pastApp = phoneRef.current.offsetTop * 0.7
    const pastTable = tableRef.current.offsetTop * 0.7
    // window.addEventListener('scroll', handleScroll);
    const handleScroll = event => {
      if (window.scrollY < pastWelcome) {
        setNavbarLook('navbar navbar-initial')
      }
      if (window.scrollY > pastWelcome) {
        setNavbarLook('navbar')
      }
      if (window.scrollY > pastApp) {
        setPhoneLook('translateX(0%)')
      }

      if (window.scrollY > pastTable) {
        setTableLook('blur(0px)')
      }
    }
    window.addEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <Navbar passClass={navbarLook} />
      <div className="pagecontainer">
        <div className="hero">
          <div className="herotextcontainer">
            <h1 className="herosubtitle">Reach New Heights</h1>
            <h1 className="herotitle">with us</h1>
            <SmallLogotype className="small-logotype" />
          </div>
          <div className="herooverlay"></div>
          <video className="herovid" src={Hero1Vid} autoPlay loop muted></video>
        </div>
        <div ref={startRef} className="separator-medium"></div>
        <h1 className="accentheader">Our Recipe for Success</h1>
        <p className="coltext1 margin-small al-justify">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
          molestias ab laborum deserunt eum corrupti! Et illo mollitia error.
          Iste molestias praesentium odio quia harum. Quas nam vero distinctio,
          maxime nobis facilis dolorum, ratione optio unde, nulla nemo possimus
          nesciunt ad repellat cupiditate voluptas illum ducimus eaque ea? Et
          magni ut ipsam repudiandae, at aliquam cum rerum reprehenderit ea
          repellat beatae consequatur necessitatibus sed nobis commodi,
          temporibus quisquam velit a, deserunt delectus explicabo dolores!
          Necessitatibus laborum maiores vitae distinctio laudantium nihil,
          obcaecati beatae minus, ipsa rerum ex magni repellat? Illum eius
          necessitatibus temporibus omnis provident est et dignissimos corrupti
          voluptas?
        </p>
        <div className="rectdata-container margin-small">
          <div className="rectdata accent1">
            <div className="rectdata-text">
              <h3>We Do This</h3>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <Icon1 className="recticon" />
          </div>
          <div className="rectdata accent2">
            <div className="rectdata-text">
              <h3>We Do This</h3>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <Icon2 className="recticon" />
          </div>
          <div className="rectdata accent1">
            <div className="rectdata-text">
              <h3>We Do This</h3>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <Icon3 className="recticon" />
          </div>
          <div className="rectdata accent2">
            <div className="rectdata-text">
              <h3>We Do This</h3>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <Icon4 className="recticon" />
          </div>
        </div>
        <h1 ref={phoneRef} className="accentheader">
          Our Brand New App
        </h1>
        <div className="twowing-container">
          <div className="fifty flex-column">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              fugiat accusamus officiis velit officia saepe totam dolor fugit
              libero nobis dolores commodi eaque blanditiis labore, praesentium,
              harum cumque vitae sed reprehenderit esse error aspernatur
              doloremque, odit minus. Quis iure ex exercitationem vitae
              dignissimos molestiae amet, similique culpa animi, mollitia odit
              est corrupti vel minus labore expedita necessitatibus id sit
              magni! Neque fugit nisi nulla tempore beatae voluptates ab. Facere
              culpa officiis esse quidem veniam eum deleniti excepturi mollitia
              voluptatibus est aliquam nesciunt dolorum, quaerat asperiores
              minus assumenda alias voluptatem eligendi pariatur libero maiores
              adipisci reprehenderit consectetur iusto. Eaque, consequatur? Rem.
            </p>
            <button className="button-download">Download</button>
          </div>
          <div className="fifty al-right hidden">
            <img
              src={iPhone}
              style={{ transform: phoneLook, transition: 'all 1s' }}
            ></img>
          </div>
        </div>
        <div className="separator-medium" ref={tableRef}></div>
        <h1 className="accentheader">Years of Experience</h1>
        <div className="margin-medium">
          <div className="table-comparator" style={{ filter: tableLook }}>
            <div className="table-comparator-cell">
              <h2 className="table-comparator-text">2 mil</h2>
              Happy customers
            </div>
            <div className="table-comparator-cell">
              <h2 className="table-comparator-text">95%</h2>
              Satisfaction rate
            </div>
            <div className="table-comparator-cell">
              <h2 className="table-comparator-text">8</h2>
              Countries we operate in
            </div>
          </div>
        </div>
        <div>
          <div className="hero2">
            <div className="news-flex">
              <h1 className="newstitle">News</h1>
              <div className="news-linker">Read more ➞</div>
            </div>
            <div className="news-container">
              <div className="news-item">
                <div className="thirty">
                  <img src={SampleImage} className="news-image"></img>
                </div>
                <div className="seventy">
                  <h4>Title of Item</h4>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. A
                    quibusdam fuga rem veritatis! Rem facilis provident quidem
                    deserunt dolor veniam?
                  </p>
                </div>
              </div>
              <div className="news-item">
                <div className="thirty">
                  <img src={SampleImage} className="news-image"></img>
                </div>
                <div className="seventy">
                  <h4>Title of Item</h4>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. A
                    quibusdam fuga rem veritatis! Rem facilis provident quidem
                    deserunt dolor veniam?
                  </p>
                </div>
              </div>
              <div className="news-item">
                <div className="thirty">
                  <img src={SampleImage} className="news-image"></img>
                </div>
                <div className="seventy">
                  <h4>Title of Item</h4>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. A
                    quibusdam fuga rem veritatis! Rem facilis provident quidem
                    deserunt dolor veniam?
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="separator-medium"></div>
          <h1 className="centered">Any other way we can help?</h1>
          <p className="centered">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            excepturi facilis accusantium odit dicta? Aperiam soluta veritatis
            ratione? Reiciendis officia ipsam esse recusandae, cupiditate
            maiores deserunt autem, quod quisquam vitae inventore voluptas porro
            optio commodi veritatis voluptates similique. Earum perferendis
            maiores pariatur consectetur nostrum tempore aspernatur autem,
            cumque iste corporis.
          </p>
        </div>
        <div className="separator-medium"></div>
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
      </div>
    </>
  )
}

export default App

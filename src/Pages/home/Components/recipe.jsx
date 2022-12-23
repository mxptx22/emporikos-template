import React from 'react'
import { ReactComponent as Icon1 } from '../../../Images/icon1.svg'
import { ReactComponent as Icon2 } from '../../../Images/icon2.svg'
import { ReactComponent as Icon3 } from '../../../Images/icon3.svg'
import { ReactComponent as Icon4 } from '../../../Images/icon4.svg'

function Recipe() {
  return (
    <div>
      <h1 className="accentheader">Our Recipe for Success</h1>
      <p className="coltext1 margin-small al-justify">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
        molestias ab laborum deserunt eum corrupti! Et illo mollitia error. Iste
        molestias praesentium odio quia harum. Quas nam vero distinctio, maxime
        nobis facilis dolorum, ratione optio unde, nulla nemo possimus nesciunt
        ad repellat cupiditate voluptas illum ducimus eaque ea? Et magni ut
        ipsam repudiandae, at aliquam cum rerum reprehenderit ea repellat beatae
        consequatur necessitatibus sed nobis commodi, temporibus quisquam velit
        a, deserunt delectus explicabo dolores! Necessitatibus laborum maiores
        vitae distinctio laudantium nihil, obcaecati beatae minus, ipsa rerum ex
        magni repellat? Illum eius necessitatibus temporibus omnis provident est
        et dignissimos corrupti voluptas?
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
    </div>
  )
}

export default Recipe

import React from 'react'
import SampleImage from '../../../Images/sampleimage.png'

function News() {
  return (
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
  )
}

export default News

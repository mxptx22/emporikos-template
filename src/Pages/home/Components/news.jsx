/** @jsxImportSource @emotion/react */
import tw, { css, styled } from 'twin.macro'

import React from 'react'
import SampleImage from '../../../Images/sampleimage.png'
import { Section } from '../../Reusables/layout'
import { globalPaddingVariants } from '../../../styles/GlobalStyles'
import { Header1 } from '../../Reusables/headers'

function News() {
  const Container2 = [
    tw`bg-neutral-400/40`,
    { ...globalPaddingVariants.classOffset },
  ]

  const HeaderX = tw(Header1)`mx-0 px-0 bg-transparent`

  return (
    //   .hero2 {
    // width: 100vw;
    // margin-left: -10vw;
    // margin-right: -10vw;
    // aspect-ratio: 10/2.5;
    // padding: 1.25em 10vw 1.25em 10vw;
    // background-color: lightgray;
    // }

    <div css={Container2}>
      <Section>
        <div className="news-flex">
          <HeaderX>News</HeaderX>
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
      </Section>
    </div>
  )
}

export default News

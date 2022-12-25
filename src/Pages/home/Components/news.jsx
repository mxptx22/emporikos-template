/** @jsxImportSource @emotion/react */
import tw, { css, styled } from 'twin.macro'

import React from 'react'
import SampleImage from '../../../Images/sampleimage.png'
import { Section } from '../../Reusables/layout'
import { globalPaddingVariants } from '../../../styles/GlobalStyles'
import { Header1, Subheader2 } from '../../Reusables/headers'

const NewsItem = ({ textTitle = '', textDesc = '', imgPrev = SampleImage }) => {
  return (
    <div className="bg-neutral-50 rounded-sm p-4 flex gap-4 shadow-md cursor-pointer hover:scale-105 transition-all duration-500">
      <div className="w-1/3">
        <img src={imgPrev} className="w-full aspect-square"></img>
      </div>
      <div className="w-full">
        <Subheader2>{textTitle}</Subheader2>
        <p>{textDesc}</p>
      </div>
    </div>
  )
}

function News() {
  const Container2 = [
    tw`bg-neutral-300/60`,
    { ...globalPaddingVariants.classOffset },
  ]

  const HeaderX = tw(Header1)`mx-0 px-0 bg-transparent leading-none`

  const ReadMoreLink = [
    tw`uppercase text-neutral-900 font-semibold tracking-wide font-sansax transition-all duration-200 cursor-pointer h-min`,
    tw`hover:(tracking-normal border-b border-current)`,
  ]

  return (
    <div css={Container2}>
      <Section>
        <div className="flex justify-between items-center">
          <HeaderX>News</HeaderX>
          <div css={ReadMoreLink}>Read more ➞</div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mt-3">
          <NewsItem
            textTitle="Sample Item"
            textDesc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. A quibusdam fuga rem veritatis! Rem facilis provident quidem deserunt dolor veniam?"
            imgPrev={SampleImage}
          />
          <NewsItem
            textTitle="Sample Item"
            textDesc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. A quibusdam fuga rem veritatis! Rem facilis provident quidem deserunt dolor veniam?"
            imgPrev={SampleImage}
          />
          <NewsItem
            textTitle="Sample Item"
            textDesc="Lorem ipsum dolor sit, amet consectetur adipisicing elit. A quibusdam fuga rem veritatis! Rem facilis provident quidem deserunt dolor veniam?"
            imgPrev={SampleImage}
          />
        </div>
      </Section>
    </div>
  )
}

export default News

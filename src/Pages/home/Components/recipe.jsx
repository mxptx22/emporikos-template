/** @jsxImportSource @emotion/react */
import tw, { theme, styled } from 'twin.macro'
import React from 'react'
import { Header1, Subheader2 } from '../../Reusables/headers'
import { Section } from '../../Reusables/layout'
import { BiCategoryAlt, BiCard, BiChart, BiRocket } from 'react-icons/bi'
import Tilt from 'react-parallax-tilt'

const Card = ({ header, description, icon }) => {
  return (
    <Tilt
      scale={1.1}
      tiltMaxAngleX={15}
      tiltMaxAngleY={5}
      glareEnable={true}
      glareColor={theme('colors.neutral.500')}
      glareMaxOpacity={0.6}
      glarePosition="all"
    >
      <div className="w-64 bg-neutral-300/50 text-center relative min-h-[8rem] p-4 pb-12 rounded-sm cursor-default">
        <Subheader2>{header}</Subheader2>
        <div>{description}</div>
        <div className="text-neutral-400 w-16 aspect-square absolute bottom-0 left-0 -z-10">
          {icon}
        </div>
      </div>
    </Tilt>
  )
}

function Recipe() {
  return (
    <Section>
      <Header1>
        <span>Our Recipe for Success</span>
      </Header1>
      <p className="columns-2 mb-12 text-justify">
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
      <div className="flex justify-center">
        <div className="grid grid-cols-4 gap-7">
          <Card
            header="Eat"
            description="Lorem ipsum dolor sit amet."
            icon={<BiCategoryAlt className="w-full h-full" />}
          />
          <Card
            header="Sleep"
            description="Lorem ipsum dolor sit amet."
            icon={<BiCard className="w-full h-full" />}
          />
          <Card
            header="Knit"
            description="Lorem ipsum dolor sit amet."
            icon={<BiChart className="w-full h-full" />}
          />
          <Card
            header="Repeat"
            description="Lorem ipsum dolor sit amet."
            icon={<BiRocket className="w-full h-full" />}
          />
        </div>
      </div>
    </Section>
  )
}

// MEMO Consider creating previews for each of the cards in this section
// const OpenUp = keyframes`
// from {
//   height: 0px;
// }

// to {
//   height: 200px;
// }
// `

// const PreviewStyling = css`
//   animation: ${OpenUp} 1s ease;
//   height: 150px;
//   ${tw`bg-primary`}
// `

export default Recipe

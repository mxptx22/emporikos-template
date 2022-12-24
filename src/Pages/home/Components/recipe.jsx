import React from 'react'
import { ReactComponent as Icon1 } from '../../../Images/icon1.svg'
import { ReactComponent as Icon2 } from '../../../Images/icon2.svg'
import { ReactComponent as Icon3 } from '../../../Images/icon3.svg'
import { ReactComponent as Icon4 } from '../../../Images/icon4.svg'
import { Header1 } from '../../Reusables/headers'
import { Section } from '../../Reusables/layout'
import { BiCategoryAlt, BiCard, BiChart, BiRocket } from 'react-icons/bi'

const Card = ({ header, description, icon }) => {
  return (
    <div className="w-64 bg-neutral-300/50 text-center relative min-h-[8rem] p-4 pb-12 rounded-sm">
      <div className="font-sansax text-xl font-semibold uppercase tracking-wider">
        {header}
      </div>
      <div>{description}</div>
      <div className="text-neutral-400 w-16 aspect-square absolute bottom-0 left-0 -z-10">
        {icon}
      </div>
    </div>
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
        <div className="grid grid-cols-4 gap-4">
          <Card
            header="We Do This"
            description="Lorem ipsum dolor sit amet."
            icon={<BiCategoryAlt className="w-full h-full" />}
          />
          <Card
            header="We Do This"
            description="Lorem ipsum dolor sit amet."
            icon={<BiCard className="w-full h-full" />}
          />
          <Card
            header="We Do This"
            description="Lorem ipsum dolor sit amet."
            icon={<BiChart className="w-full h-full" />}
          />
          <Card
            header="We Do This"
            description="Lorem ipsum dolor sit amet."
            icon={<BiRocket className="w-full h-full" />}
          />
        </div>
      </div>
      {/* <div className="rectdata-container margin-small">
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
      </div> */}
    </Section>
  )
}

export default Recipe


import React from "react"
import {Image} from '@chakra-ui/react'
import image from './living-room.jpg'
import "./About.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <div name='About Us' title='About Us - Who We Are?' cover={image}/>
        <div className='container flex mtop'>
          <div className='left row'>
            <h3 title='Our Agency Story' subtitle='Check out our company story and work process'/>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
            <button className='btn2'>More About Us</button>
          </div>
          <div className='right row'>
            <Image src={image} width={400} height={260}alt='house'/>
          </div>
        </div>
      </section>
    </>
  )
}
export default About;

import {Box} from '@chakra-ui/react';
import React from "react"
import "./footer.css"

// const Footer =() =>(
//     <Box textAlign='center' p='5' color='gray.600' borderTop='1px' borderColor='gray.100'>
//         2022 Apartment Hunter, Inc.
//     </Box> 
// )


const Footer = () => {
  return (
    <>
      {/* <section className='footerContact'>
        <div className='container'>
          <div className='send flex'>
            <div className='text'>
              <h1>Do You Have Questions ?</h1>
              <p>We'll help you to grow your career and growth.</p>
            </div>
            <button className='btn5'>Contact Us Today</button>
          </div>
        </div>
      </section> */}

      <footer>
        <div className='container'>
          <div className='box'>
          </div>
        </div>
        <div className='legal'>
        <span>© 2022 Apartment Hunter. Designed By Jacksina.</span>
      </div>
      </footer>
      
    </>
  )
}

export default Footer;
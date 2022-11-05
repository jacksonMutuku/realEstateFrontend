import  React, {useState,useEffect}from "react";
import {Flex, Box, Button,Text,Link ,Image, Img} from '@chakra-ui/react';
import { useTheme, ThemeProvider, withTheme } from '@emotion/react';
import {propertiesForSale, propertiesForRent}from '../../utils/fetchApi';
import Property from './Property';
import options from '../../utils/fetchApi';
import axios from 'axios';
import {FaBed,FaBath} from 'react-icons/fa';
import {BsGridFill} from 'react-icons/bs';
import {GoVerified} from 'react-icons/go';
import millify from 'millify';
import defaultImage from '../../assests/apartment.jpg';

const Banner = ({purpose,desc1,desc2,title1,title2,buttonText,linkName,imageUrl})=> (
  <Flex flexWrap ='wrap' justifyContent='center' alignItems='center' m='10'>
      <Img src={imageUrl} width={500} height={300}/>
      <Box p='5'>
          <Text color='gray.500' fontSize='Sm' fontWeight='medium'>{purpose}</Text>
          <Text  fontSize='3xl' fontWeight=' bold'>{title1} <br/> {title2}</Text>
          <Text color='gray.700' fontSize='lg'paddingBottom='3' paddingTop='3'>{desc1}<br/>{desc2}</Text>
          <Button fontSize='x1' >
              <Link href={linkName}>{buttonText}</Link>
          </Button>

      </Box>
  </Flex>
)
// export default Banner;

const ForSale =()=>{
    const [propertiesforsale,setProperties] =useState([])
    const getProperty=async() =>{
    const response=await axios.get('http://127.0.0.1:8000/forsale/')
    console.log(response.data)
    const myArray = response.data;
    setProperties(response.data)
  }
  useEffect(()=>{
    getProperty();
  },[])

  return(
    <Box>
      <Banner
        purpose='Buy a home'
        title1 =  'Find, Buy Own You'
        title2= 'Dream Home'
        desc1='Explore Apartments, Villas, Homes'
        desc2 = 'and more'
        buttonText='Explore Buying'
        linkName='/search?purpose=for-sale'
        imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008'
        
      />
      <Flex flexWrap='wrap'>
        {
          propertiesforsale.map((property) =>((<Property purpose={"sale"} property={property} key={property.id}/>)))
        }
      </Flex>

    </Box>
  

  )

}

const ForRent=() =>{
  const [properties,setProperties] =useState([])
  const getProperty=async() =>{
    const response=await axios.get('http://127.0.0.1:8000/forrent/')
    console.log(response.data)
    setProperties(response.data)
  }
  useEffect(()=>{
    getProperty();
  },[])
  return (
   
    <Box>
      <Banner
        purpose='Rent a home'
        title1 =  'Rental Home for'
        title2= 'Everyone'
        desc1='Explore Apartments, Villas, Homes'
        desc2 = 'and more'
        buttonText='Explore Renting'
        linkName='/search?purpose=for-rent'
        imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008'
        
      />

      <Flex flexWrap='wrap'>
          {
            properties.map((property) =>((<Property purpose={"rent"} property={property} key={property.id}/>)
              // <div>
              //     <Img src={property.coverPhoto} width={400} height={260}/>
              //     <p>{property.fname}</p> 
              // </div>
            
            ))
         }
      </Flex>
{/*         
      <Flex flexWrap='wrap'>
       {propertiesForRent.map((property)=> (<Property property={property} key={property.id}/>))}
      </Flex> 
         */}

      
      {/* <Banner
        purpose='Buy a home'
        title1 =  'Find, Buy Own You'
        title2= 'Dream Home'
        desc1='Explore Apartments, Villas, Homes'
        desc2 = 'and more'
        buttonText='Explore Buying'
        linkName='/search?purpose=for-sale'
        imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008'
        
      />
      <Flex flexwrap='wrap'>
        {
          propertiesforsale.map((property,index) =>((<Property property={property} key={property.id}/>)))
        }
      </Flex> */}
    </Box>
  )
}
export {ForRent,ForSale};







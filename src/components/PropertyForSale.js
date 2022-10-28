import React,{useState,useEffect} from 'react'
import axios from 'axios';
import {Box, Flex, Spacer,Avatar ,Text,Image} from '@chakra-ui/react';
import {FaBed,FaBath} from 'react-icons/fa';
import {BsGridFill} from 'react-icons/bs';
import {GoVerified} from 'react-icons/go';
import millify from 'millify';
import Property from '../../components/homepage/Property';
import PropertyDetails from './propertyDetails';
import {Link} from 'react-router-dom';
// // import { baseUrl, fetchApi } from '../../utils/fetchApi';
// // import ImageScrollbar from '../../components/homepage/ImageScrollbar';

const PropertyForSale =()=>{
    const [propertyDetails,setProperties] =useState([])
    const getProperty=async() =>{
    const response=await axios.get(`http://127.0.0.1:8000/forsale/`)
    console.log(response.data)
    setProperties(response.data)
  }
  useEffect(()=>{
    getProperty();
  },[])
  return(
    <>
      {propertyDetails.map((property) =>{
        return(
          <div key={property.id}>
            <Link to={`${property.id}`}/>
          </div>

        )
      })}
    </>
    // <Flex flexWrap='wrap'>
    //     {
    //           propertyDetails.map((property) =>((<PropertyDetails property={property} key={property.id}/>)
    //           <Link to={`/property/${property.id}`}/>
    //           ))
    //     }
    // </Flex>
  )
}
export default PropertyForSale;

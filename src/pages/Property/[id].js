import React,{useState,useEffect} from 'react'
import axios from 'axios';
import {Box, Flex, Spacer,Avatar ,Text,Link,Image} from '@chakra-ui/react';
import {FaBed,FaBath} from 'react-icons/fa';
import {BsGridFill} from 'react-icons/bs';
import {GoVerified} from 'react-icons/go';
import millify from 'millify';
// import { baseUrl, fetchApi } from '../../utils/fetchApi';
// import ImageScrollbar from '../../components/homepage/ImageScrollbar';


const PropertyDetails = ({property:{ price, rentFrequency, roomnumber, bathno, Description, housetype, purpose, furnishingStatus, photos}}) =>(
    
    <Box maxWidth='1000px' margin='auto' p='4'>
        {/* {photos && <ImageScrollbar propertiesforsale=/>} */}
            <Box width='910px'>
            <Image 
                alt='property'
                placeholder="blur"
                // blurDataURL={photo} 
                src={photos} width={1000}
                height={500}  
                sizes="(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px" />
            </Box>
            <Box w='full' p='6'>
                    <Flex paddingTop='2' alignItems='center'>
                        {/* <Box paddingRight='3' color='green.400'>{isVerified && <GoVerified />}</Box> */}
                        <Text fontWeight='bold' fontSize='lg'>
                            AED {price} {rentFrequency && `/${rentFrequency}`}
                        </Text>
                        {/* <Spacer />
                        <Avatar size='sm' src={agency?.logo?.url}></Avatar> */}
                    </Flex>
                    <Flex alignItems='center' p='1' justifyContent='space-between' w='250px' color='blue.400'>
                        {/* {roomnumber}<FaBed /> | {bathno} <FaBath /> | {millify(area)} sqft <BsGridFill /> */}
                        {roomnumber}<FaBed /> | {bathno} <FaBath />
                    </Flex>
            </Box>
            <Box marginTop='2'>
                {/* <Text fontSize='lg' marginBottom='2' fontWeight='bold'>{title}</Text> */}
                <Text lineHeight='2' color='gray.600'>{Description}</Text>
            </Box>
            <Flex flexWrap='wrap' textTransform='uppercase' justifyContent='space-between'>
                    <Flex justifyContent='space-between' w='400px' borderBottom='1px' borderColor='gray.100' p='3'>
                        <Text>Type</Text>
                        <Text fontWeight='bold'>{housetype}</Text>
                    </Flex>
                    <Flex justifyContent='space-between' w='400px' borderBottom='1px' borderColor='gray.100' p='3'>
                        <Text>Purpose</Text>
                        <Text fontWeight='bold'>{purpose}</Text>
                    </Flex>
                    {furnishingStatus && (
                        <Flex justifyContent='space-between' w='400px' borderBottom='1px' borderColor='gray.100' p='3' >
                            <Text>Furnishing Status</Text>
                            <Text fontWeight='bold'>{furnishingStatus}</Text>
                        </Flex>
                    )}
            </Flex>
            {/* <Box> */}
                {/* {amenities.length && <Text fontSize='2xl' fontWeight='black' marginTop='5'>Facilites:</Text>}
                    <Flex flexWrap='wrap'>
                        {amenities.map((item) => (
                            item.amenities.map((amenity) => (
                                <Text 
                                    key={amenity.text} 
                                    fontWeight='bold' 
                                    color='blue.400' 
                                    fontSize='l' 
                                    p='2' 
                                    bg='gray.200' 
                                    m='1' 
                                    borderRadius='5'
                                >
                                {amenity.text}
                                </Text>
                            ))
                        ))}
                    </Flex> */}
            {/* </Box> */}
    </Box>
);

// const PropertyDetails = ({property:{coverPhoto,price,rentFrequency,id,
//     roomnumber,purpose,bathno}}) =>(
//         // href = {`/property/${externalID}`} passHref
//     <Link href = {`/property/${id}`} passHref>
//         <Flex flexWrap='wrap' w='420px' p='5' paddingTop='0' justifyContent='flex-start' cursor='pointer'>
//             <Box>
//                 {/* ? coverPhoto.url:defaultImage */}
//                 <Image src={coverPhoto } width={400} height={260}alt='house'/>
//             </Box>
//             <Box>
//                 <Flex paddingTop='2' alignItems ='center' justifyContent='space-between'>
//                     <Flex alignItems='center'>
//                         {/* <Box paddingRight='3' color='green.400'>
//                             {isVerified && <GoVerified/>}
//                         </Box> */}
//                         <Text fontWeight='bold' fontSize='lg'>USD{millify(price)}{rentFrequency && `/${rentFrequency}`}</Text>
//                     </Flex>
//                     {/* <Box>
//                         <Avatar size="sm" src={agency?.logo?.url}/>
//                     </Box> */}
//                 </Flex>
//                 {/* <Flex alignItems='center' p='1' justifyContent='space-between' w= '250px' color='blue.400'>
//                     {roomnumber}<FaBed/> |{bathno}<FaBath/> | {millify(area)} sqft<BsGridFill/>
//                     {roomnumber}<FaBed/> |{bathno}<FaBath/>
//                 </Flex> */}
//                 <Text fontSize='lg' >
//                     {purpose.length>30 ? `${purpose.substring(0,30)}...` :purpose}
//                 </Text>
//             </Box>
//         </Flex>
        
//     </Link>
// );
// export default PropertyDetails

const ForSaleDetails =()=>{
    const [propertiesforsale,setProperties] =useState([])
    const getProperty=async() =>{
    const response=await axios.get('http://127.0.0.1:8000/forsale/')
    console.log(response.data)
    setProperties(response.data)
  }
  useEffect(()=>{
    getProperty();
  },[])
  return(
    <div>
        {
         propertiesforsale.map((property,index) =>((<PropertyDetails property={property} key={property.id}/>)))
        }
    </div>
  )

// export async function getServerSideProps({ params: { id } }) {
//   const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);
  
//   return {
//     props: {
//       propertiesforsale: data,
//     },
//   };
}
export default ForSaleDetails;
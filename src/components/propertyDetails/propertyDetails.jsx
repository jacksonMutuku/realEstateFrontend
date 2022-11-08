import axios from "axios";
import { useState } from "react";

import {Box, Flex, Spacer,Text,Link,Image,Button} from '@chakra-ui/react';
import {FaBed,FaBath} from 'react-icons/fa';
import ImageScrollbar from '../homepage/ImageScrollbar';
import {BsGridFill} from 'react-icons/bs';
import {GoVerified} from 'react-icons/go';

  
const PropertyDetails= ({property}) => {
    const [phoneNumber, setPhoneNumber] = useState(0)
    if (!property) {
        return (<div>No property found!</div>)
    }
    const { price, rentFrequency, roomnumber, bathno, description, housetype, purpose, furnishingStatus,otherPhotos,amenities, ownerId} = property;
    
    if (ownerId) {
        const getOwner = async () => {
            const res = await axios.get(`http://127.0.0.1:8000/owner/${ownerId}/`);
            console.log(res)
            setPhoneNumber(res.data.phoneNumber)
        }
        getOwner()
    }
    return (<Box maxWidth='1000px' margin='auto' p='4'>
        {otherPhotos && <ImageScrollbar propertiesforsale={property} />}
            <Box width='910px'>
            </Box>
            <Box w='full' p='6'>
                    <Flex paddingTop='2' alignItems='center'>
                        <Text fontWeight='bold' fontSize='lg'>
                            KSH{price} {rentFrequency && `/${rentFrequency}`}
                        </Text>
                    </Flex>
                    <Flex alignItems='center' p='1' justifyContent='space-between' w='250px' color='blue.400'>
                        {roomnumber}<FaBed /> | {bathno} <FaBath />
                    </Flex>
            </Box>
            <Box marginTop='2'>
                <Text fontSize='lg' marginBottom='2' fontWeight='bold'>Property Description</Text>
                <Text lineHeight='2' color='gray.600'>{description}</Text>
            </Box>
            <Flex flexWrap='wrap' textTransform='uppercase' justifyContent='space-between'>
                    <Flex justifyContent='space-between' w='400px' borderBottom='1px' borderColor='gray.100' p='3'>
                        <Text>House Type</Text>
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
                    {/* <Box marginTop='2'>
                        <Text fontSize='lg' marginBottom='2' fontWeight='bold'>{title}</Text>
                        <Text lineHeight='2' color='gray.600'>{description}</Text>
                    </Box> */}
            </Flex>
            <Box>
            {amenities && amenities.length > 0 &&<Text fontSize='2xl' fontWeight='black' marginTop='5'>Facilites:</Text>}
                    <Flex flexWrap='wrap'>
                        {amenities && amenities.split(",").map((amenity) => (
                            <Text
                                    key={amenity}
                                    fontWeight='bold' 
                                    color='blue.400' 
                                    fontSize='l' 
                                    p='2' 
                                    bg='gray.200' 
                                    m='1' 
                                    borderRadius='5'
                                >
                                    {amenity}
                                </Text>
                                )
                            )}
                    </Flex>
                    <Flex className="d-flex justify-content-end">
                        <Link
                            href="/bookProperty">
                            <Button colorScheme='yellow'>Book Property</Button>
                        </Link>
                    </Flex>
            </Box>
    </Box>
    )
};
export default PropertyDetails;


{/* <Flex className="d-flex justify-content-end">
                        <Link><Button colorScheme='yellow'>Add new properties</Button></Link>
                        <a href={`tel:${phoneNumber}`} className="btn btn-success">
                            Call
                        </a>

                        {/* <a href="sms:25428562409" className="btn btn-warning">
                        Text
                        </a> */}
                    
{/* <Box>
                {amenities.length&&<Text fontSize='2xl' fontWeight='black' marginTop='5'>Facilites:</Text>}
                {amenities}
                
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
                    </Flex>
            </Box> */}
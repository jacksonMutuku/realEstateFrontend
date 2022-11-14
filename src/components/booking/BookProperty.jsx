import axios from "axios";
import { useState } from "react";
import { connect } from "react-redux";
import {Box, Flex, Spacer,Text,Link,Image,Button, useEditable, HStack,Stack,VStack} from '@chakra-ui/react';
import {FaBed,FaBath} from 'react-icons/fa';
// import ImageScrollbar from '../homepage/ImageScrollbar';
import {BsGridFill} from 'react-icons/bs';
import {GoVerified} from 'react-icons/go';
import { useEffect } from "react";
import { Redirect, withRouter } from "react-router-dom";

  

const BookProperty= ({ currentUser, match }) => {
    const [property, setProperty] = useState({});

    const { purpose, id } = match.params;
    
    const fetchProperty = async () => {
        const response = await axios.get(`http://127.0.0.1:8000/${purpose}/${id}/`);
        console.log(response)
        // console.log(response.data)
        setProperty(response.data)
    }

    useEffect(() => {  
        fetchProperty();
    }, [currentUser])

    const { price, rentFrequency, roomnumber, bathno, description, housetype, furnishingStatus,otherPhotos,amenities, ownerId} = property;

    return (
    // <Box maxWidth='1000px' margin='auto' p='4'>
        <Stack direction='row'>
            <VStack>
                <Image
                    boxSize='500px'
                    marginLeft='30px'
                    marginTop='15px'
                    objectFit='cover'
                    src={otherPhotos}
                />
                <Box w='full' p='6'>
                        <Flex paddingTop='2' alignItems='center'>
                            <Text fontWeight='bold' fontSize='lg'>
                                KSH{price || property.rentamount}{rentFrequency && `/${rentFrequency}`}
                            </Text>
                        </Flex>
                        <Flex alignItems='center' p='1' justifyContent='space-between' w='250px' color='blue.400'>
                            {roomnumber}<FaBed /> | {bathno} <FaBath />
                        </Flex>
                </Box> 
            </VStack>
            <VStack>
                <VStack>
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
                    <Flex justifyContent='space-between' w='400px' borderBottom='1px' borderColor='gray.100' p='3' >
                        <Box>
                            <Text fontSize='lg' marginBottom='2' fontWeight='bold'>Property Description</Text>
                            <Text lineHeight='2' color='gray.600'>{description}</Text>
                        </Box>
                    </Flex>
                </VStack>
                <Flex justifyContent='space-between' w='400px' borderBottom='1px' borderColor='gray.100' p='3' >
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
                    </Box>
                </Flex>
                <Text fontWeight='bold' fontSize='lg'>
                    <Text>Total Amount</Text>
                    KSH{price || property.rentamount}
                </Text>
                <Flex justifyContent='space-between' w='400px' borderBottom='1px' borderColor='gray.100' p='3' >
                    {/* <Button type='submit' colorScheme='yellow'>Check Out</Button> */}
                    <Link href="http://127.0.0.1:8000/realt/"><Button colorScheme='yellow'>Check Out</Button></Link>
                </Flex>
            </VStack>
        </Stack>
        
    // </Box>
    )
};

export default BookProperty;

// const mapStateToProps= state=>({
//     currentUser:state.user.currentUser
// })
// export default connect(mapStateToProps)(withRouter(BookProperty));
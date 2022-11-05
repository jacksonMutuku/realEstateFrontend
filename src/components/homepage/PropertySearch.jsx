// import {Img} from 'react-image';
import {Flex, Box, Avatar,Text,Img,Link} from '@chakra-ui/react';
// import { Link } from 'react-router-dom';
import {FaBed,FaBath} from 'react-icons/fa';
import {BsGridFill} from 'react-icons/bs';
import {GoVerified} from 'react-icons/go';
import millify from 'millify';
import defaultImage from '../../assests/apartment.jpg';
import { useState } from 'react';

// ,agency,isVerified,externalID

const Property = ({property:{coverPhoto,price,rentFrequency,id,
    roomnumber,purpose,bathno}}) =>(
        
        // href = {`/property/${externalID}`} passHref
    <Link href={`/property/${id}`}>
        <Flex flexWrap='wrap' w='420px' p='5' paddingTop='0' justifyContent='flex-start' cursor='pointer'>
            <Box>
                {/* ? coverPhoto.url:defaultImage */}
                <Img src={'http://127.0.0.1:8000'+coverPhoto } width={400} height={260}alt='house'/>
            </Box>
            <Box>
                <Flex paddingTop='2' alignItems ='center' justifyContent='space-between'>
                    <Flex alignItems='center'>
                        {/* <Box paddingRight='3' color='green.400'>
                            {isVerified && <GoVerified/>}
                        </Box> */}
                        <Text fontWeight='bold' fontSize='lg'>USD{millify(price)}{rentFrequency && `/${rentFrequency}`}</Text>
                    </Flex>
                    {/* <Box>
                        <Avatar size="sm" src={agency?.logo?.url}/>
                    </Box> */}
                </Flex>
                <Flex alignItems='center' p='1' justifyContent='space-between' w= '250px' color='blue.400'>
                    {/* {roomnumber}<FaBed/> |{bathno}<FaBath/> | {millify(area)} sqft<BsGridFill/> */}
                    {roomnumber}<FaBed/> |{bathno}<FaBath/>
                </Flex>
                <Text fontSize='lg' >
                    {purpose.length>30 ? `${purpose.substring(0,30)}...` :purpose}
                </Text>
            </Box>
        </Flex>
        
    </Link>
);
export default Property;
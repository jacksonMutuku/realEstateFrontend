import {Flex, Box, Avatar,Text,Img,Link} from '@chakra-ui/react';
import {FaBed,FaBath} from 'react-icons/fa';
import {BsGridFill} from 'react-icons/bs';
import {GoVerified} from 'react-icons/go';
import millify from 'millify';
import defaultImage from '../../assests/apartment.jpg';
import { useState } from 'react';

const Property = ({property}) => {
        const {coverPhoto,price,rentFrequency,id, roomnumber,purpose,bathno} = property;

        return (
            
            <Flex flexWrap='wrap' w='420px' p='5' paddingTop='0' justifyContent='flex-start' cursor='pointer'>
                <Box>
                    <Link href={`/property${purpose}/${id}`}>
                        <Img src={coverPhoto } width={400} height={260}alt='house'/>
                    </Link>
                </Box>
                <Box>
                    <Flex paddingTop='2' alignItems ='center' justifyContent='space-between'>
                        <Flex alignItems='center'>
                            <Text fontWeight='bold' fontSize='lg'>KSH {price || property.rentamount}{rentFrequency && `/${rentFrequency}`}</Text>
                        </Flex>
                    </Flex>
                    <Flex alignItems='center' p='1' justifyContent='space-between' w= '250px' color='blue.400'>
                            {roomnumber}<FaBed/> |{bathno}<FaBath/>
                        </Flex>
                        <Text fontSize='lg' >
                            {purpose.length>30 ? `${purpose.substring(0,30)}...`:purpose}
                        </Text>
                    </Box>
                </Flex>
                
        )
};
export default Property;
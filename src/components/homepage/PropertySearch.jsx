// import {Img} from 'react-image';
import {Flex, Box, Avatar,Text,Img,Link,HStack,Button} from '@chakra-ui/react';
// import { Link } from 'react-router-dom';
import {FaBed,FaBath} from 'react-icons/fa';
import {BsGridFill} from 'react-icons/bs';
import {GoVerified} from 'react-icons/go';
import millify from 'millify';
import defaultImage from '../../assests/apartment.jpg';
import { useEffect, useState } from 'react';

const Property= ({viewProperty, property, deleteProperty}) =>
{
    const {coverPhoto,price,rentFrequency,id, roomnumber,purpose,bathno} = property;
    const [purposeUrl, setPurposeUrl] = useState("");

    useEffect(() => {
        switch(purpose) {
            case 'For-Rent':
                setPurposeUrl("forrent");
                break;
            case 'For-Sale':
                setPurposeUrl("forsale");
                break;
            default:
                setPurposeUrl("not-found")
        }
    }, [purpose]);


    return (
        <>
            <Flex flexWrap='wrap' w='420px' p='5' paddingTop='0' justifyContent='flex-start' cursor='pointer'>
                <Link href={`/property/${id}`}>
                    <Box>
                        <Img src={'http://127.0.0.1:8000'+coverPhoto } width={400} height={260}alt='house'/>
                    </Box>
                </Link>
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
                        {purpose.length>30 ? `${purpose.substring(0,30)}...` :purpose}
                    </Text>
                </Box>
                {viewProperty && 
                    <HStack justifyContent='space-between'>
                        <Button colorScheme='yellow' onClick={() => deleteProperty(id, purposeUrl)}>Delete Property</Button>
                        <Link 
                            href={`/editProperty/${purposeUrl}/${id}`}
                        >
                            <Button colorScheme='yellow'>Update</Button>
                        </Link>
                    </HStack>
                }
            </Flex>
        </>
)};
export default Property;
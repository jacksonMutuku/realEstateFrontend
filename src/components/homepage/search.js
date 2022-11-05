import { useState ,useEffect, useContext} from 'react';
// import useRouter;
// import { useRouter } from './router'
// import { Img } from '@chakra-ui/react';
import { Flex, Box, Text, Icon ,Image} from '@chakra-ui/react';
import { BsFilter } from 'react-icons/bs';
import axios from 'axios'

import Property from './PropertySearch';

import { UpdatedPropertyList } from "./searchFilter";
import SearchFilters from './searchFilter';

// import { baseUrl, fetchApi } from '../utils/fetchApi';
import noresult from '../../assests/noresult.svg'

// const Search = () => {
  // const [searchFilters, setSearchFilters] = useState(false);
  // const router = useRouter();
const Search=()=>{
  const [propertiesforsale,setProperties] =useState([])
  const getProperty=async() =>{
    const response=await axios.get('http://127.0.0.1:8000/properties/')
    // console.log(response.data)
    setProperties(response.data) 
    setUpdatedProperties(response.data)
  }
  useEffect(()=>{
    getProperty();
  },[])

  const [updatedProperties, setUpdatedProperties] = useState(propertiesforsale);

  const getUpdatedProperties = (properties) => {
    setUpdatedProperties(properties);
  }

  console.log(updatedProperties);  

  const [searchFilters, setSearchFilters] = useState(false);
  // const router = useRouter();
  
  return (
    <>
      <Box>
        <Flex
          onClick={() => setSearchFilters(!searchFilters)}
          cursor='pointer'
          bg='gray.100'
          borderBottom='1px'
          borderColor='gray.200'
          p='2'
          fontWeight='black'
          fontSize='lg'
          justifyContent='center'
          alignItems='center'
        >
          <Text>Search Property By Filters</Text>
          <Icon paddingLeft='2' w='7' as={BsFilter} />
        </Flex>

        {searchFilters && <SearchFilters getUpdatedProperties={getUpdatedProperties} propertiesforsale={propertiesforsale}/>}
      
        <Flex flexWrap='wrap'>
          {updatedProperties.map((property,index)=> <Property property={property} key={property.id} />)}
        </Flex>
        {updatedProperties.length === 0 && (
          <Flex justifyContent='center' alignItems='center' flexDir='column' marginTop='5' marginBottom='5'>
            <Image src={noresult}/>
            <Text fontSize='xl' marginTop='3'>No Result Found.</Text>
          </Flex>
        )}
    </Box>
    </>
  );
};


// TODO 
// export async function getServerSideProps({ query }) {
//   const purpose = query.purpose || 'for-rent';
//   const rentFrequency = query.rentFrequency || 'yearly';
//   const minPrice = query.minPrice || '0';
//   const maxPrice = query.maxPrice || '1000000';
//   const roomsMin = query.roomsMin || '0';
//   const bathsMin = query.bathsMin || '0';
//   const sort = query.sort || 'price-desc';
//   // const areaMax = query.areaMax || '35000';
//   // const locationExternalIDs = query.locationExternalIDs || '5002';
//   // const categoryExternalID = query.categoryExternalID || '4';

//   const data = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`);

//   return {
//     props: {
//       properties: data?.hits,
//     },
//   };
// }

export default Search;
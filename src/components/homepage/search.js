import { useState ,useEffect, useContext} from 'react';
import { Flex, Box, Text, Icon ,Image} from '@chakra-ui/react';
import { BsFilter } from 'react-icons/bs';
import axios from 'axios'
import Property from './PropertySearch';
import { UpdatedPropertyList } from "./searchFilter";
import SearchFilters from './searchFilter';
import noresult from '../../assests/noresult.svg'

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
          {updatedProperties.map((property,index)=> <Property property={property} key={`${property.purpose}-${property.id}`} />)}
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
export default Search;
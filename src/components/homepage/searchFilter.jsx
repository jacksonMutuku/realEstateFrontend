import {useEffect,useState, useMemo} from 'react';
import {Box,Select,Button, Icon, Spinner, Input,Text,Flex,Image} from '@chakra-ui/react';
import {
    useParams,
    useLocation,
    useHistory,
    useRouteMatch,
  } from "react-router-dom";
import {MdCancel} from 'react-icons/md';
import {filterData,getFilterValues} from '../../utils/filterData';
import queryString from "query-string";
// Usage
function SearchFilters() {
  // Get the router object


  const [filters,setFilters] =useState(filterData);
    const router = useRouter();
    const searchProperties = (filterValues) =>{
        const path = router.pathname;
        const {query} =router;

        const values = getFilterValues (filterValues);

        values.forEach((item) => {
            if(item.value && filterValues?.[item.name]) {
                query[item.name] = item.value
            }
            
        })

        router.push({ pathname: path, query });

    };
  // Get value from query string (?postId=123) or route param (/:postId)
  console.log(router.query.postId);
  // Get current pathname
  console.log(router.pathname);
  // Navigate with router.push()
//   return <button onClick={(e) => router.push("/about")}>About</button>;
//   return(
    return(
        <Flex bg='gray.100' p='4' justifyContent='center' flexWrap='wrap'>
            {filters?.map((filter) => (
                <Box key={filter.queryName}>
                    <Select 
                        placeholder={filter.placeholder} 
                        w='fit-content' 
                        p='2'
                        onChange={(e) => searchProperties({ [filter.queryName]: e.target.value })}>
                            {filter?.items?.map((item) => (
                            <option value={item.value} key={item.value}>
                                {item.name}
                            </option>
                            ))}
                    </Select>
                </Box>
            ))}
        </Flex>
    )
  
}
// Hook
export function useRouter() {
  const params = useParams();
  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();
  // Return our custom router object
  // Memoize so that a new object is only returned if something changes
  return useMemo(() => {
    return {
      // For convenience add push(), replace(), pathname at top level
      push: history.push,
      replace: history.replace,
      pathname: location.pathname,
      // Merge params and parsed query string into single "query" object
      // so that they can be used interchangeably.
      // Example: /:topic?sort=popular -> { topic: "react", sort: "popular" }
      query: {
        ...queryString.parse(location.search), // Convert string to object
        ...params,
      },
      // Include match, location, history objects so we have
      // access to extra React Router functionality if needed.
      match,
      location,
      history,
    };
  }, [params, match, location, history]);
}
// const SearchFilters= () => {
//     const [filters,setFilters] =useState(filterData);
//     const router = useRouter();
//     const searchProperties = (filterValues) =>{
//         const path = router.pathname;
//         const {query} =router;

//         const values = getFilterValues (filterValues);

//         values.forEach((item) => {
//             if(item.value && filterValues?.[item.name]) {
//                 query[item.name] = item.value
//             }
            
//         })

//         router.push({ pathname: path, query });

//     };
    // return(
    //     <Flex bg='gray.100' p='4' justifyContent='center' flexWrap='wrap'>
    //         {filters?.map((filter) => (
    //             <Box key={filter.queryName}>
    //                 <Select 
    //                     placeholder={filter.placeholder} 
    //                     w='fit-content' 
    //                     p='2'
    //                     onChange={(e) => searchProperties({ [filter.queryName]: e.target.value })}>
    //                         {filter?.items?.map((item) => (
    //                         <option value={item.value} key={item.value}>
    //                             {item.name}
    //                         </option>
    //                         ))}
    //                 </Select>
    //             </Box>
    //         ))}
    //     </Flex>
    // )
// } 
export default SearchFilters;
import React from 'react';
import {Box,Heading} from '@chakra-ui/react';
import Navbar from './NavBar';


const Layout = () => (
    <>
        <Heading as='h1'><title>Apartment Hunter</title></Heading>
        <Box maxwidth ='1280px' m='auto'>
                <Navbar/>
        </Box>
    </>
)
export default Layout;

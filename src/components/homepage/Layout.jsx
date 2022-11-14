import React from 'react';
import {Box,Heading,Stack,Text} from '@chakra-ui/react';
import Navbar from './NavBar';
import { connect } from 'react-redux';

const Layout = ({ currentUser }) => (
    <>
        <Stack direction='row'>
            <Heading as='h1'><title>Apartment Hunter</title></Heading>
            <Text>{currentUser && currentUser.firstName}</Text>
            <Box maxwidth ='1280px' m='auto'>
                    <Navbar/>
            </Box>
        </Stack>
    </>
)
// export default Layout;

const mapStateToProps = ({ user }) => ({
    currentUser: user.currentUser
});
  
export default connect(mapStateToProps)(Layout);
  
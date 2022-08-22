import React from 'react';
import {Box,Heading} from '@chakra-ui/react';
import Navbar from './NavBar';
import Footer from './Footer';


const Layout = () => (
    <>
        <Heading as='h1'><title>Apartment Hunter</title></Heading>
        <Box maxwidth ='1280px' m='auto'>
            <header>
                <Navbar/>
            </header>
        </Box>
    </>
)
export default Layout;

// const mapStateToProps= state =>({
//     currentUser: state.user.currentUser

// });
// export default connect(mapStateToProps)(Layout);

// // const Layout =()=>(
//     <div>
//         <Heading as='h1'><title>Apartment Hunter</title></Heading>
//         <Box maxwidth ='23px' m='auto'>
//             {/* <header>
//                 <Navbar/>
//             </header> */}
//         {/* {/* <main>
           
//            <Home/>
//         </main> */}
//         {/* <footer><Footer/></footer> */} 
//         </Box>
//     </div>
    
// )
// export default Layout;
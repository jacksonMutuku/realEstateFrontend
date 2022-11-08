import {Menu, MenuButton,Link, MenuList, MenuItem, IconButton, Flex, Box, Spacer} from '@chakra-ui/react';
import {connect} from 'react-redux';
import {FcMenu, FcHome, FcAbout, FcAcceptDatabase} from 'react-icons/fc';
import {BsSearch,BsHouseFill} from 'react-icons/bs';
import {FaSignOutAlt} from 'react-icons/fa'
import {RiRegisteredFill} from 'react-icons/ri'
import {FiKey} from 'react-icons/fi';
import {auth} from '../../firebase/firebase.utils';


const Navbar=({currentUser}) =>(
    <Flex p='2' borderBottom='1px' borderColor='gray.100' >
        <Box fontSize='3xl' color ='blue.400' fontWeight='bold'>
            <Link href='/' paddingRight='2'>Apartment Hunter</Link>
        </Box>
        <Spacer/>
        <Box>
            <Menu>
                <MenuButton as={IconButton} icon={<FcMenu/>} variant='outlined' color='red.400'/>
                <MenuList>
                        <Link href='/'><MenuItem icon={<FcHome/>}>Home</MenuItem></Link>
                        <Link href='/search'><MenuItem icon={<BsSearch/>}>Search</MenuItem></Link> 
                        <Link href='/search?purpose=For-Sale'><MenuItem icon={<FcAbout/>}>Buy Property</MenuItem></Link>
                        <Link href='/search?purpose=For-Rent'><MenuItem icon={<FiKey/>}>Rent Property</MenuItem></Link>
                        <Link href='/PropertyDashboard' ><MenuItem icon={<BsHouseFill/>}>Property Dashboard</MenuItem></Link>  
                        <Link href='/signup'><MenuItem icon={<RiRegisteredFill/>}>SignUp</MenuItem></Link> 
                        <Link href='/About'><MenuItem icon={<FcAbout/>}>About</MenuItem></Link>
                        
                        <div>
                            {
                                    currentUser?
                                    <Link><MenuItem icon={<FaSignOutAlt/>} onClick ={() => auth.signOut()}>SignOut</MenuItem></Link> 
                                    :
                                    <Link href='/signin'><MenuItem icon={<FaSignOutAlt/>}>SignIn</MenuItem></Link>
                            }

                        </div>
                        
                    
                        {/* <Link href='' passHref><MenuItem icon={<FaSignOutAlt/>}
                        >SignOut</MenuItem></Link>   */}
                </MenuList>
            </Menu>
        </Box>
    </Flex>
)
// export default Navbar;
const mapStateToProps= state=>({
    currentUser:state.user.currentUser
})
export default connect(mapStateToProps)(Navbar);


import {Box,VStack,Heading,Text,Input,FormControl,FormLabel,HStack,Checkbox,Button,Link,Stack,Center,Flex} from '@chakra-ui/react';
import{FcGoogle} from 'react-icons/fc';
import {auth,signInWithGoogle} from '../../firebase/firebase.utils';
import React from 'react';
import './sign-up.styles.css';

class SignIn extends React.Component{
   
    constructor(props){
        super(props);

        this.state={
            email:'',
            password:'',
            errorMessage: ""
        }
    }
    handleSubmit = async event =>{
        event.preventDefault();

        const {email,password}= this.state;
        
        try{
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email:'',password:''});

        }catch(error){
            console.log(error)
        }

    };
    handleChange =event=>{
        const {value,name}= event.target;
        this.setState({[name]:value})
    }
    render(){
        console.log(this.props)

        const{email,password} = this.state;

        return(
                    <Box 
                        bg='whiteAlpha.900' 
                        w={['full' ,'md']} 
                        p={[8,10]} 
                        mt={[20,'10vh']} 
                        mx='auto' 
                        borderColor={['','']}
                        borderRadius={10}
                    >
                        <HStack w='full' justify='space-between'>
                                <Heading as='h1'>Login</Heading>
                                <Link color='purple' href='/signup'>I do not have an account</Link>
                                {/* <Button colorScheme='purple' variant='link' to='/signup'>I do not have an account</Button> */}
                        </HStack>
                        <form onSubmit={this.handleSubmit}>
                                <VStack>
                                    <Input
                                        type="email"
                                        name="email"
                                        value={email}
                                        placeholder="enter email"
                                        onChange={this.handleChange}
                                        rounded ='none' 
                                        variant ='filled'
                                        required
                                    />
                                    <Input
                                    type="password"
                                    name="password"
                                    value={password}
                                    placeholder="Your Password"
                                    onChange={this.handleChange}
                                    rounded ='none' 
                                    variant ='filled'
                                    required
                                />
                            <Button  type='submit' rounded ='none'  color='white' colorScheme='green' width={['full']}>CONTINUE</Button>
                            <span>OR</span>
                            <Button rounded ='none'  width={['full']} justify='space-between' onClick={signInWithGoogle}><FcGoogle/>SIGN IN WITH GOOGLE</Button>
                            </VStack>
                        </form>
                </Box>

        )
    }
}
export default SignIn;




 {/* <Box 
                        // bg='whiteAlpha.900' 
                        // w={['full' ,'md']} 
                        // p={[8,10]} 
                        // mt={[20,'10vh']} 
                        // mx='auto' 
                        // border={['none']}
                        borderColor={['','']}
                        borderRadius={10}
                    > */}

{/* <Center h='100vh' bg='gray.200'> */}

 {/* <FormControl 
                                    name='email' 
                                    type='email'
                                    handleChange={this.handleChange}
                                    value={this.state.email}
                                    label='email'
                                    required 
                                />
                        
                                <FormInput
                                    name='password' 
                                    type='password' 
                                    value={this.state.password}
                                    handleChange={this.handleChange} 
                                    label='password'
                                    required
                                /> */}
                                
                            
                                
                                {/* <CustomButton type ='submit'>Sign In</CustomButton>
                                <CustomButton  onClick={signInWithGoogle}  isGoogleSignIn>SignIn with Google</CustomButton> */}
                                
                                {/* <div className='buttons'>
                                    <CustomButton  type="submit">Sign In</CustomButton>

                                    <div><span className='unable'>Can't sign in?</span></div>
                                    <CustomButton  onClick={signInWithGoogle}isGoogleSignIn>SignIn with Google</CustomButton>
                                    
                                </div> 
                                */}

// import passwordResetPage from '../../pages/sign-in-and-sign-up/password-reset';
// import { Link } from 'react-router-dom';
// import CustomButton from '../custom-button/custom-button.component';
// import {signInWithGoogle} from '../../firebase/firebase.utils';
// export default function Login(){
//     return(
//         <Center h='100vh' bg='gray.200'>
//                 <Box 
//                     bg='whiteAlpha.900' 
//                     w={['full' ,'md']} 
//                     p={[8,10]} 
//                     mt={[20,'10vh']} 
//                     mx='auto' 
//                     border={['none']}
//                     borderColor={['','']}
//                     borderRadius={10}
//                 >
//                      {/* spacing='1' align={['flex-start','center']} w='full' */}
//                      {/* spacing='4' align='flex-start' w='full' */}
//                     <VStack >
//                         <HStack w='full' justify='space-between'>
//                                 <Heading as='h1'>Login</Heading>
//                                 <Button colorScheme='purple' variant='link'>I do not have an account</Button>
//                         </HStack>
                        // <FormControl>
                        //     <FormLabel>Email Address</FormLabel>
                        //     <Input rounded ='none' variant='filled'/>
                        // </FormControl>
                        // <FormControl>
                        //     <FormLabel>Password</FormLabel>
                        //     <Input rounded ='none' variant='filled' type='password'/>
                        // </FormControl>
//                         <HStack w='full' justify='space-between'>
//                             <Checkbox>Remember Me</Checkbox>
//                             <Button variant='link' colorScheme='blue'>Forgotten Password ?</Button>
//                         </HStack>
//                         <Button rounded ='none' color='white' colorScheme='green' width={['full']}>CONTINUE</Button>
//                         <span justify='center'>OR</span>
//                         <Button rounded ='none'  width={['full']} justify='space-between'><FcGoogle/>SIGN IN WITH GOOGLE</Button>
//                     </VStack>

//                 </Box>

//         </Center>
            
//     )
// };
// export default function Login(){
//     return(
//         <Center h='100vh' bg='gray.200'>
//                 <Box 
//                     bg='whiteAlpha.900' 
//                     w={['full' ,'md']} 
//                     p={[8,10]} 
//                     mt={[20,'10vh']} 
//                     mx='auto' 
//                     border={['none']}
//                     borderColor={['','']}
//                     borderRadius={10}
//                 >
//                      {/* spacing='1' align={['flex-start','center']} w='full' */}
//                      {/* spacing='4' align='flex-start' w='full' */}
//                     <VStack >
//                         <HStack w='full' justify='space-between'>
//                                 <Heading as='h1'>Login</Heading>
//                                 <Button colorScheme='purple' variant='link'>I do not have an account</Button>
//                         </HStack>
//                         <form onSubmit={this.handleSubmit}>
//                             <FormInput 
//                                 name='email' 
//                                 type='email'
//                                 handleChange={this.handleChange}
//                                 value={this.state.email}
//                                 label='email'
//                                 required 
//                             />
                    
//                             <FormInput 
//                                 name='password' 
//                                 type='password' 
//                                 value={this.state.email}
//                                 handleChange={this.handleChange} 
//                                 label='password'
//                                 required
//                             />
                            
                        
                            
//                             {/* <CustomButton type ='submit'>Sign In</CustomButton>
//                             <CustomButton  onClick={signInWithGoogle}  isGoogleSignIn>SignIn with Google</CustomButton> */}
                            
//                             {/* <div className='buttons'>
//                                 <CustomButton  type="submit">Sign In</CustomButton>

//                                 <div><span className='unable'>Can't sign in?</span></div>
//                                 <CustomButton  onClick={signInWithGoogle}isGoogleSignIn>SignIn with Google</CustomButton>
                                
//                             </div> 
//                              */}
                            
                        
                        
//                             <HStack w='full' justify='space-between'>
//                                 <Checkbox>Remember Me</Checkbox>
//                                 <Button variant='link' colorScheme='blue'>Forgotten Password ?</Button>
//                             </HStack>
//                             <Button rounded ='none' color='white' colorScheme='green' width={['full']}>CONTINUE</Button>
//                             <span justify='center'>OR</span>
//                             <Button rounded ='none'  width={['full']} justify='space-between'><FcGoogle/>SIGN IN WITH GOOGLE</Button>
//                         </form>
//                     </VStack>

//                 </Box>

//         </Center>
            
//     )
// };





// export default function LoginPage(): JSX.Element {
//     return(
//         <Center h='100vh' bg='gray.200'>
//             <Stack boxShadow='md' bg='whiteAlpha.900' p='20' rounded='md'>
//                     <Flex justify='space-between'>
//                         <Heading as='h1' >Login</Heading>
//                         <Button colorScheme='purple' variant='link'>I do not have an account</Button>

//                     </Flex>
                    
//                     <Text fontSize='lg' color='gray.600' >
//                         Please log in with your email and password
//                     </Text>
                
//                     <FormControl>
//                             <FormLabel>Email Address</FormLabel>
//                             <Input rounded ='none' variant='filled'/>
//                     </FormControl>
//                     <FormControl>
//                             <FormLabel>Password</FormLabel>
//                             <Input rounded ='none' variant='filled' type='password'/>
//                     </FormControl>
                
//                     <Stack justify='center' color='gray.600' spacing='3'>
//                         <Text as='div' textAlign='center'>
//                             <span>Don't have an account?</span>
//                             <Button colorScheme='purple' variant='link'>Sign Up</Button>
//                         </Text>
//                         <Button colorScheme='purple' text-decoration='underline' variant='link'>Forgot Password?</Button>
//                     </Stack>
                    
//             </Stack>
//         </Center>

//     )
// }







// export default function Login(){
//     return(
//         <Center h='100vh' bg='gray.200'>
//             {/* <Box 
//                     w={['full' ,'md']} 
//                     p={[8,10]} 
//                     mt={[20,'10vh']} 
//                     mx='auto' 
//                     border={['none','solid']}
//                     borderColor={['','green']}
//                     borderRadius={10}
//                 >

//                 </Box> */}


//             <Stack 
//                 boxShadow='md' 
//                 bg='whiteAlpha.900' 
//                 p='20' rounded='md'
//                 w={['full' ,'md']} 
//                 p={[8,10]} 
//                 mt={[20,'10vh']} 
//                 mx='auto' 
//                 border={['none','solid']}
//                 // borderColor={['','green']}
//                 borderRadius={10}
//             >
//                 <VStack spacing='4' align='flex-start' w='full'>
//                         <VStack spacing='1' align={['flex-start','center']} w='full'>
//                             <Heading>SIGN IN</Heading>
//                             <Text>Enter you e-mail and password to login</Text>
//                         </VStack>
//                         <FormControl>
//                             <FormLabel>Email Address</FormLabel>
//                             <Input rounded ='none' variant='filled'/>
//                         </FormControl>
//                         <FormControl>
//                             <FormLabel>Password</FormLabel>
//                             <Input rounded ='none' variant='filled' type='password'/>
//                         </FormControl>
//                         <HStack w='full' justify='space-between'>
//                             <Checkbox>Remember Me</Checkbox>
//                             <Button variant='link' colorScheme='blue'>Forgotten Password ?</Button>
//                         </HStack>
//                         <Button rounded ='none' color='blue' width={['full','auto']}alignSelf='end'>Login</Button>
//                         <Stack justify='center' color='gray.600' spacing='3'>
//                             <Text as='div' textAlign='center'>
//                                 <span>Don't have an account?</span>
//                                 <Button colorScheme='purple' variant='link'>Sign Up</Button>
//                             </Text>
//                             <Button colorScheme='purple' variant='link'>Forgot Password?</Button>
//                     </Stack>
//                 </VStack>

//             </Stack>

//         </Center>

            
//     )
// };


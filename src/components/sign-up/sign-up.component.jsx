
 import React from 'react';
 import {Box,HStack,Heading,Center,Button ,FormControl,VStack,Input,FormLabel} from '@chakra-ui/react';
 import {createUserProfileDocument,auth} from '../../firebase/firebase.utils';
 
 class SignUp extends React.Component{
     constructor(props){
         super(props);
 
         this.state={
             displayName: '',
             email:'',
             password:'',
             confirmPassword: '',
         }
     }
     handleSubmit = async event => {
         event.preventDefault();
     
         const { displayName, email, password, confirmPassword } = this.state;
     
         if (password !== confirmPassword) {
           alert("passwords don't match");
           return;
         }
     
         try {
           const { user } = await auth.createUserWithEmailAndPassword(  email, password);
     
           await createUserProfileDocument(user, { displayName });
     
           this.setState({
             displayName: '',
             email:'',
             password: '',
             confirmPassword: ''
             
           });
         } catch (error) {
           console.error(error);
         }
     };
     handleChange = event => {
        const { name, value } = event.target;
    
        this.setState({ [name]: value });
      };
     render(){
         const{displayName,email,password,confirmPassword} = this.state;
 
         return(
             <Center  h='100vh'bg='gray.200'>
                     <div  className='sign-up' display='flex' flex-direction='column'>
 
                       
                             <Box 
                                 bg='whiteAlpha.900' 
                                 w={['full' ,'md']} 
                                 p={[2,10]} 
                                 mt={[8,'10vh']} 
                                 mx='auto' 
                                 border={['none']}
                                 borderColor={['','']}
                                 borderRadius={10}
                             >   
                                 <HStack w='full' justify='space-between'>
                                         <Heading as='h2'>Enter Details To Register </Heading> 
                                 </HStack>
                                 <form onSubmit={this.handleSubmit}>
                                     <VStack>
                                             <Input
                                                type="text"
                                                name="displayName"
                                                value={displayName}
                                                placeholder="userName"
                                                required
                                                onChange={this.handleChange}
                                                rounded ='none' 
                                                variant ='filled'
                                            />
                                            <Input
                                                type="email"
                                                name="email"
                                                value={email}
                                                placeholder="enter email"
                                                required
                                                onChange={this.handleChange}
                                                rounded ='none' 
                                                variant ='filled'
                                            />
                                             <Input
                                                type="password"
                                                name="password"
                                                value={password}
                                                placeholder="Your Password"
                                                required
                                                onChange={this.handleChange}
                                                rounded ='none' 
                                                variant ='filled'
                                             />
                                            <Input
                                                type="password"
                                                name="confirmPassword"
                                                value={confirmPassword}
                                                placeholder="confirm Password"
                                                required
                                                onChange={this.handleChange}
                                                rounded ='none' 
                                                variant ='filled'
                                                
                                            />
                                                                                            
                                              
                                         
                                             <Button type='submit' rounded ='none'  width={['full']}  colorScheme='green'>Agree And Sign-Up</Button>
                                         
 
                                     </VStack>
                                </form>
                         </Box>
                             
                     
                 </div>
 
             </Center>
         )
     }
 }
 export default SignUp;


//  <FormControl value={displayName}  isRequired>
//  <FormLabel>UserName</FormLabel>
//  < Input rounded ='none' type='text' onChange={handleChange}/>
// </FormControl>


// <FormControl isRequired value={email} >
//  <FormLabel>Email</FormLabel>
//  < Input rounded ='none'  type='email'/>
// </FormControl>
// <FormControl isRequired value={password} >
//  <FormLabel>Password</FormLabel>
//  < Input rounded ='none'  type='password'/>
// </FormControl>

// <FormControl isRequired value={confirmPassword} >
//  <FormLabel> Confirm Password</FormLabel>
//  < Input  rounded ='none' variant ='filled'  />
// </FormControl>

// <button type='submit' rounded ='none'  width={['full']}  color='green'>Agree And Sign-Up</button>

// //
//  import React from 'react';
// import {Box,HStack,Heading,Center,Button ,FormControl,VStack,Input,FormLabel} from '@chakra-ui/react';
// import {createUserProfileDocument,auth,signInWithGoogle} from '../../firebase/firebase.utils';
// import{FcGoogle} from 'react-icons/fc';

// class SignUp extends React.Component{
//     constructor(props){
//         super(props);

//         this.state={
//             displayName: '',
//             email:'',
//             password:'',
//             confirmPassword: '',
//         }
//     }
//     handleSubmit = async event => {
//         event.preventDefault();
    
//         const { displayName, email, password, confirmPassword } = this.state;
    
//         if (password !== confirmPassword) {
//           alert("passwords don't match");
//           return;
//         }
    
//         try {
//           const { user } = await auth.createUserWithEmailAndPassword(  email, password);
    
//           await createUserProfileDocument(user, { displayName });
    
//           this.setState({
//             displayName: '',
//             email:'',
//             password: '',
//             confirmPassword: ''
            
//           });
//         } catch (error) {
//           console.error(error);
//         }
//     };
//     handleChange =event=>{
//         const {value,name}= event.target;
//         this.setState({[name]:value})
//     }
//     render(){
//         // const{displayName,email,password,confirmPassword} = this.state;

//         return(
//             <Center  h='100vh'bg='gray.200'>
//                     <Box 
//                                 bg='whiteAlpha.900' 
//                                 w={['full' ,'md']} 
//                                 p={[2,10]} 
//                                 mt={[8,'10vh']} 
//                                 mx='auto' 
//                                 border={['none']}
//                                 borderColor={['','']}
//                                 borderRadius={10}
//                             > 

                      
                          
//                                 <HStack w='full' justify='space-between'>
//                                         <Heading as='h2'>Enter Details To Register </Heading> 
//                                 </HStack>
//                                 <form onSubmit={this.handleSubmit}>
//                                     <VStack>
//                                         <input placeHolder='username' Input rounded ='none' type='text' value={this.state.displayName} onChange={this.handleChange} isRequired />
                                               

//                                         < input rounded ='none' placeHolder='email' type='email' value={this.state.email} onChange={this.handleChange} isRequired />
                                            
//                                         < input rounded ='none'  placeHolder='password' type='password' value={this.state.password} onChange={this.handleChange}  isRequired />
                                           
                                            
   
//                                         < input  rounded ='none' variant ='filled' placeholder='confirm password' value={this.state.confirmPassword} onChange={this.handleChange} isRequired />
                                            
//                                         <Button type='submit' rounded ='none'  width={['full']}  colorScheme='green'>Agree And Sign-Up</Button>
//                                         <Button rounded ='none'  width={['full']} justify='space-between' onClick={signInWithGoogle}><FcGoogle/>SIGN IN WITH GOOGLE</Button>

//                                     </VStack>
//                                </form>
//                         </Box>
                            
                    
                

//             </Center>
//         )
//     }
// }
// export default SignUp;








//
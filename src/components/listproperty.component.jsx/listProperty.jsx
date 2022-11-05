import React,{ useState }  from "react";
import './listProperty.styles.css';
import background from '../../assests/living-room1.jpg'
import { BsCheckCircle } from "react-icons/bs";
import {Image,Button,Select,Stack,HStack,VStack,Input,InputGroup,Textarea,InputLeftElement,InputRightElement,InputLeftAddon,Checkbox,StackDivider,Heading} from '@chakra-ui/react';
import firebase from './components/firebase/firebase.utils'
  


// const List =()=>{
//     return(
//         <div class='main'>

//             <div className='main-container'style={{ backgroundImage: `url(${background})`,color:"#666"}}>
//                 {/* <div className="container">
//                     <div className='breadcrumb-area '>
//                         <h1 className='page-title'>Add Property</h1>
//                         <h1 className='list-property'>List Property</h1>
//                     </div>
//                 </div> */}
//             </div>
//             <div className="add-new-property-area pd-top-90 mg-bottom-100">
//                 <div className="container">
//                     <div className="row justify-content-center">
//                         <div className="col-xl-9 col-lg-10">
//                             <div className="section-title text-center"><Heading size='4xl'>Add New Property</Heading></div> 
//                                 {/* <div className="border-bottom mb-4"> */}
//                                 <div className="border-bottom mb-4">
//                                     <div className="row">
//                                         <div className="col-md-4">
//                                             <div className="single-intro style-two text-center">
//                                                 <div className="thumb"><h1>1</h1></div> 
//                                                 <div className="details"><h4 class="title">Choose Listing</h4></div>
//                                             </div>
//                                         </div>
//                                         <div className="col-md-4">
//                                             <div className="single-intro style-two text-center">
//                                                 <div className="thumb"><h1>2</h1></div>
//                                                 <div className="details"><h4 class="title">Add Information</h4></div> 
//                                             </div>
//                                         </div>
//                                         <div className="col-md-4">
//                                             <div className="single-intro style-two text-center">
//                                                 <div className="thumb"><h1>3</h1></div>
//                                                 <div className="details"><h4 class="title">Publish</h4></div> 
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className='border-bottom mb-4'>
//                                     <VStack>
//                                         <Heading as='h1'>Choose Property Categories</Heading>
//                                         <Button colorScheme='yellow' variant='solid'>Sell</Button>
//                                         <Button colorScheme='yellow'>Rent</Button>
//                                     </VStack>
//                                 </div>
//                                 {/* <div className="row p-bottom-5">
//                                     <div className="col-5">
//                                         <div className="section-title mb-md-0"><h4 className="pt-lg-1 pt-2">Categories</h4></div>
//                                     </div>
//                                     <div className="col-7 text-right add-property-btn-wrap">
//                                         <button class="btn btn-yellow mr-md-3">Sell</button>
//                                         <button class="btn btn-yellow">Rent</button>
//                                         <Button colorScheme='#fda94f' variant='solid'>Sell</Button>
//                                         <Button colorScheme='#fda94f'>Rent</Button>
//                                     </div>
//                                 </div>  */}
//                                 <div className="row border-bottom mb-4">
//                                     <div className="col-md-4">
//                                             <div class="section-title"><h4><Image src="/assests/square-check.svg" alt="img"/>Contacts</h4></div>
//                                         </div>
//                                         <div className="col-md-8">
//                                             <div className="section-title"><Heading size='sm'>Enter Your Contacts</Heading></div>
//                                             <VStack justify-content="space-between">
//                                                 <Stack direction="row">
//                                                     <Stack spacing={3}>
//                                                         <Input variant='filled' placeholder='First Name'/>
//                                                         <Input variant='filled' placeholder='Last Name'/>
//                                                         <Input variant='filled' placeholder='Email'/>
//                                                         <InputGroup>
//                                                             <InputLeftAddon children='+234' />
//                                                             <Input type='tel' placeholder='phone number' />
//                                                         </InputGroup>
//                                                     </Stack>
//                                                 </Stack>
//                                             </VStack>
//                                         </div>
//                                     </div>
//                                 {/* <div className="row pd-top-80">
//                                 <div/> */}
//                                 <div className="row pd-top-100 border-bottom mb-4">
//                                     <div className="col-md-4">
//                                         <div class="section-title"><h4><Image src="/assests/square-check.svg" alt="img"/>House Name</h4></div>
//                                     </div>
//                                     <div className="col-md-8">
//                                         <div className="section-title"><Heading size='sm'>Jason Landville Apartments</Heading><p>Lorem ipsum dolor sit amet, consectetur adipiscing </p></div>
//                                         <VStack justify-content="space-between">
//                                             <Stack spacing={4}>
//                                                 <InputGroup>
//                                                     <InputLeftElement
//                                                         pointerEvents='none'
//                                                         color='gray.300'
//                                                         fontSize='1.2em'
//                                                         children='$'
//                                                      />
//                                                         <Input placeholder='Enter amount' />
//                                                         <InputRightElement children={<BsCheckCircle  color='green.500' />} />
//                                                 </InputGroup>
//                                                 <InputGroup>
//                                                     <InputLeftElement
//                                                         pointerEvents='none'
//                                                         color='gray.300'
//                                                         fontSize='1.2em'
//                                                         children='$'
//                                                      />
//                                                         <Input placeholder='Enter Property Location' />
//                                                         <InputRightElement children={<BsCheckCircle  color='green.500' />} />
//                                                 </InputGroup>
//                                             </Stack>
//                                             <Stack direction="row">
//                                                 <Select variant='filled' placeholder='houseType' size='md'>
//                                                     <option value='option1'>Bedsitter</option>
//                                                     <option value='option2'>Single-Room</option>
//                                                     <option value='option3'>Villa</option>
//                                                     <option value='option3'>Apartment</option>
//                                                 </Select>
//                                                 <Select variant='filled' placeholder='Bedrooms' size='md'>
//                                                     <option value='option1'>Bedroom 1</option>
//                                                     <option value='option2'>Bedroom 2</option>
//                                                     <option value='option3'>Bedroom 3</option>
//                                                     <option value='option3'>Bedroom 4</option>
//                                                 </Select>
//                                                 </Stack>
//                                                 <Stack direction='row'>
//                                                     <Select variant='filled' placeholder='FurningStatus' size='md'>
//                                                         <option value='option1'>Furnished</option>
//                                                         <option value='option2'>Unfurnished</option>
//                                                     </Select>
//                                                     <Select variant='filled' placeholder='Bathrooms' size='md'>
//                                                         <option value='option1'>Bathroom 1</option>
//                                                         <option value='option2'>Bathroom 2</option>
//                                                         <option value='option3'>Bathroom 3</option>
//                                                         <option value='option3'>Bathroom 4</option>
//                                                         <option value='option3'>More than 4</option>
//                                                     </Select>

//                                                 </Stack>
//                                                 <Stack direction="row">
//                                                     <Select variant='filled' placeholder='Rent Frequency' size='md'>
//                                                         <option value='option1'>Monthly</option>
//                                                         <option value='option2'>Yearly</option>
//                                                         <option value='option3'>Daily</option>
//                                                     </Select>
//                                                     <Select variant='filled' placeholder='Kitchen' size='md'>
//                                                         <option value='option1'>With Kitchen</option>
//                                                         <option value='option2'>No kitchen</option>
//                                                     </Select>
//                                                 </Stack>
//                                                 <Textarea placeholder='Enter a brief description of your property' />
//                                             </VStack>
//                                         </div>
//                                 </div>

//                                 {/* <Stack spacing={[1, 5]} direction={['column', 'row']}>
//                                     <Checkbox size='lg' colorScheme='orange' defaultChecked>Checkbox</Checkbox>
//                                     <Checkbox size='lg' colorScheme='orange' defaultChecked>Checkbox</Checkbox>
//                                     <Checkbox size='lg' colorScheme='orange' defaultChecked>Checkbox</Checkbox>
//                                     <Checkbox size='lg' colorScheme='orange' defaultChecked>Checkbox</Checkbox>
//                                 </Stack> */}

//                                 <div className="row pd-top-80">
//                                     <div className="col-md-4">
//                                         <div class="section-title"><h4><Image src="/assests/square-check.svg" alt="img"/>Amenities</h4></div>
//                                     </div>
//                                     <div className="col-md-8">
//                                         <div className="section-title"><Heading size='sm'>Add The Available Amenities Here</Heading><p>Lorem ipsum dolor sit amet, consectetur adipiscing </p></div>
//                                         <div className="row">
//                                             <div className="col-sm-4">
//                                                 <ul className="rld-list-style mb-3 mb-sm-0">
//                                                     <Checkbox size='lg' colorScheme='orange'>Checkbox</Checkbox>
//                                                     <Checkbox size='lg' colorScheme='orange'>Checkbox</Checkbox>
//                                                     <Checkbox size='lg' colorScheme='orange'>Parking</Checkbox>
//                                                     <Checkbox size='lg' colorScheme='orange'>Sprinklers</Checkbox>

// {/*                                                     
//                                                     <li><i className="fa fa-check"></i>Attic</li>
//                                                     <li><i className="fa fa-check"></i> Poll</li>
//                                                     <li><i className="fa fa-check"></i> Concierge</li>
//                                                     <li><i className="fa fa-check"></i> Basketball</li>
//                                                     <li><i className="fa fa-check"></i> Sprinklers</li> */}
//                                                 </ul>
//                                             </div>
//                                             <div className="col-sm-4">
//                                                 <ul className="rld-list-style mb-3 mb-sm-0">
//                                                     <Checkbox size='lg' colorScheme='orange'>Checkbox</Checkbox>
//                                                     <Checkbox size='lg' colorScheme='orange'>Recreation</Checkbox>
//                                                     <Checkbox size='lg' colorScheme='orange'>Front Yard</Checkbox>
//                                                     <Checkbox size='lg' colorScheme='orange'>Fireplace</Checkbox>
//                                                     {/* <li><i className="fa fa-check"></i>Recreation</li>
//                                                     <li><i className="fa fa-check"></i>Front Yard</li>
//                                                     <li><i className="fa fa-check"></i>Wine Cellar</li>
//                                                     <li><i className="fa fa-check"></i>Basketball</li>
//                                                     <li><i className="fa fa-check"></i>Fireplace</li> */}
//                                                 </ul>
//                                             </div>
//                                             <div className="col-sm-4">
//                                                 <ul className="rld-list-style mb-3 mb-sm-0">
//                                                     <Checkbox size='lg' colorScheme='orange'>Checkbox</Checkbox>
//                                                     <Checkbox size='lg' colorScheme='orange'>Indoor Game</Checkbox>
//                                                     <Checkbox size='lg' colorScheme='orange'>24x7 Sec</Checkbox>
//                                                     <Checkbox size='lg' colorScheme='orange'>Balcony</Checkbox>
//                                                     {/* <li><i className="fa fa-check"></i>Balcony</li>
//                                                     <li><i className="fa fa-check"></i>Pound</li>
//                                                     <li><i className="fa fa-check"></i>Deck</li>
//                                                     <li><i className="fa fa-check"></i>24x7 Sec</li>
//                                                     <li><i className="fa fa-check"></i>Indoor Game</li> */}
//                                                 </ul>
//                                             </div>
//                                             <div className="col-12 mt-5">
//                                                 {/* <button className="btn btn-yellow" href="#">Publish property</button>    */}
//                                                 <Button colorScheme='yellow'>Publish</Button>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             {/* </div> */}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>  
//     )
// }
// export default List;
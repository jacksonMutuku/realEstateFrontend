import * as React from 'react';
import axios from 'axios';
import { connect } from "react-redux";

import { useState } from "react";
import './listProperty.styles.css';
import background from '../../assests/living-room1.jpg'
import { BsCheckCircle } from "react-icons/bs";
import {Image,Button,Select,Stack,HStack,VStack,Input,InputGroup,Textarea,InputLeftElement,InputRightElement,InputLeftAddon,Checkbox,StackDivider,Heading} from '@chakra-ui/react';
import { filterData } from '../../utils/filterData';
import { createPortal } from 'react-dom';

export const OwnerContext = React.createContext();

function ListProperties({ currentUser }) {
    const [email, setEmail] = useState(null)

    if (currentUser && currentUser.email) {
        setEmail(currentUser.email);
    }

    return (
    <>
    <OwnerContext.Provider value={email}>
        <ChooseCategory/>
    </OwnerContext.Provider>
    </>
    );
}

function ListpropertyForsale() {
    // console.log(context.owner)

    const [price, setPrice] = useState(0);
    const [location,setlocation] = useState("");
    const [description, setdescription] = useState("");
    const [message, setMessage] = useState("");
    const [selectedbathroom, setSelectedbathroom] = useState(0);
    const [selectedrooms, setSelectedrooms] = useState(0);
    const [selectedfurnishingStatus, setSelectedfurnishingStatus] = useState(0);
    const [selectedHouseType, setSelectedHouseType] = useState('');

    const [finalAmenitiesList, setFinalAmenitiesList] = useState([])
    // console.log(finalAmenitiesList)

    const amenitiesList = "Checkbox, Parking, Sprinklers, Checkbox, Recreation ,Front Yard, " +
        "Fireplace, Checkbox, Indoor game, 24x7 Sec, Balcony";
  
    let handleSubmit = async (e) => {
      e.preventDefault();

      try {
        const res = await axios.post('http://127.0.0.1:8000/forsale/', ({
          price,
          location,
          description,
          bathrooms: selectedbathroom,
          rooms: selectedrooms,
          furnishingStatus: selectedfurnishingStatus, 
          housetype: selectedHouseType,
          purpose: 'For-Sale',
          amenities: finalAmenitiesList.join(","),
        }));   
  
        if (res.status === 200) {
          setPrice(0);
          setlocation("");
          setdescription("");
          setSelectedbathroom(0);
          setSelectedrooms(0);
          setSelectedfurnishingStatus(""); 
          setSelectedHouseType("");
          setMessage("User created successfully");
        } else {
          setMessage("Some error occured");
        }
      } catch (err) {
        console.log(err);
      }
    };

    let housetypeOptions = filterData.find(obj => {
        return obj.queryName === 'housetype';
    }).items;

    let roomsOptions = filterData.find(obj => {
        return obj.queryName === 'rooms';
    }).items;

    let bathroomOptions = filterData.find(obj => {
        return obj.queryName === 'bathrooms';
    }).items;

    let furnishingStatusOptions = filterData.find(obj => {
        return obj.queryName === 'furnishingStatus';
    }).items;
  
    return (
        <form onSubmit={handleSubmit}>
            <div className="row pd-top-100 mb-4">
                <div className="col-md-4">
                    <div className="section-title"><h4><Image src="/assests/square-check.svg" alt="img"/>House Name</h4></div>
                </div>
                <div className="col-md-8">
                    <div className="section-title"><Heading size='sm'>Jason Landville Apartments</Heading><p>Lorem ipsum dolor sit amet, consectetur adipiscing </p></div>
                            <Stack spacing={4}>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents='none'
                                        color='gray.300'
                                        fontSize='1.2em'
                                        children='$'
                                    />
                                        <Input
                                            placeholder='Enter amount' 
                                            value={price}
                                            onChange={(e) => setPrice(e.target.value)}
                                        />
                                    <InputRightElement children={<BsCheckCircle  color='green.500' />} />
                                </InputGroup>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents='none'
                                        color='gray.300'
                                        fontSize='1.2em'
                                        children='$'
                                    />
                                        <Input 
                                            placeholder='Enter Property Location'
                                            value={location}
                                            onChange={(e) => setlocation(e.target.value)}
                                        />
                                    <InputRightElement children={<BsCheckCircle  color='green.500' />} />
                                </InputGroup>
                            </Stack>
                            <Stack direction="row">
                                <Select 
                                    variant='filled' 
                                    placeholder='houseType' 
                                    size='md'
                                    value={selectedHouseType}
                                    onChange={(e) => setSelectedHouseType(e.target.value)}
                                >
                                    {housetypeOptions.map(option => {
                                        return (<option key={option.value} value={option.value}>{option.name}</option>)
                                    })}
                                </Select>
                                <Select 
                                    variant='filled' 
                                    placeholder='Bedrooms' 
                                    size='md'
                                    value={selectedrooms}
                                    onChange={(e) => setSelectedrooms(e.target.value)}
                                >
                                    {roomsOptions.map(option => {
                                        return (<option key={option.value} value={option.value}>{option.name}</option>)
                                    })}
                                </Select>
                            </Stack>
                                <Stack direction='row'>
                                    <Select 
                                        variant='filled' 
                                        placeholder='furnishingStatus' 
                                        size='md'
                                        value={selectedfurnishingStatus}
                                        onChange={(e) => setSelectedfurnishingStatus(e.target.value)}
                                    >
                                        {furnishingStatusOptions.map(option => {
                                            return (<option key={option.value} value={option.value}>{option.name}</option>)
                                        })}
                                    </Select>
                                    <Select 
                                        variant='filled' 
                                        placeholder='bathroom' 
                                        size='md'
                                        value={selectedbathroom}
                                        onChange={(e) => setSelectedbathroom(e.target.value)}
                                    >
                                        {bathroomOptions.map(option => {
                                            return (<option key={option.value} value={option.value}>{option.name}</option>)
                                        })}
                                    </Select>
                            </Stack>
                                <Textarea 
                                    placeholder='Enter a brief description of your property' 
                                    value={description}
                                    onChange={(e) => setdescription(e.target.value)}
                                />
                                {/* <div className="row pd-top-80"> */}

                                {/* </div> */}
                </div>
            
            </div>
            <div className="row pd-top-80">
                <div className="col-md-4">
                    <div className="section-title"><h4><Image src="/assests/square-check.svg" alt="img"/>Amenities</h4></div>
                </div>
                <div className="col-md-8">
                    <div className="section-title"><Heading size='sm'>Add The Available Amenities Here</Heading><p>Lorem ipsum dolor sit amet, consectetur adipiscing </p></div>
                    <div className="row">
                        {/*  TODO - fix final amenity list when unchecked */}
                        {
                            amenitiesList.split(",").map((amenity, index) => {
                                amenity = amenity.trim();

                                return (
                                    <Checkbox 
                                        key={index}
                                        checked={true} 
                                        onChange={
                                            () => {
                                                setFinalAmenitiesList([...finalAmenitiesList, amenity ])
                                            }
                                        } 
                                        value={amenity} size='lg' colorScheme='orange'
                                        >{amenity}
                                    </Checkbox> 
                                )
                            })
                        }

                        {/* <div className="col-sm-4">
                            <ul className="rld-list-style mb-3 mb-sm-0">
                                <Checkbox checked={true} onChange={() => setParking(!parking)} value={parking} size='lg' colorScheme='orange'>Checkbox</Checkbox>
                                <Checkbox size='lg' colorScheme='orange'>Checkbox</Checkbox>
                                <Checkbox size='lg' colorScheme='orange'>Parking</Checkbox>
                                <Checkbox size='lg' colorScheme='orange'>Sprinklers</Checkbox>
                            </ul>
                        </div>
                        <div className="col-sm-4">
                            <ul className="rld-list-style mb-3 mb-sm-0">
                                <Checkbox size='lg' colorScheme='orange'>Checkbox</Checkbox>
                                <Checkbox size='lg' colorScheme='orange'>Recreation</Checkbox>
                                <Checkbox size='lg' colorScheme='orange'>Front Yard</Checkbox>
                                <Checkbox size='lg' colorScheme='orange'>Fireplace</Checkbox>
                            </ul>
                        </div>
                        <div className="col-sm-4">
                            <ul className="rld-list-style mb-3 mb-sm-0">
                                <Checkbox size='lg' colorScheme='orange'>Checkbox</Checkbox>
                                <Checkbox size='lg' colorScheme='orange'>Indoor Game</Checkbox>
                                <Checkbox size='lg' colorScheme='orange'>24x7 Sec</Checkbox>
                                <Checkbox size='lg' colorScheme='orange'>Balcony</Checkbox>
                            </ul>
                        </div> */}


                        <div className="col-12 mt-5">
                            <Button type="submit" colorScheme='yellow'>Publish</Button>
                        </div>
                    </div>
                </div>
            </div>
        </form>   
    );
}

function ListpropertyForRent() {

    const [rentamount, setrentamount] = useState("");
    const [location,setlocation] = useState("");
    const [description, setdescription] = useState("");
    const [message, setMessage] = useState("");
    const [selectedbathroom, setSelectedbathroom] = useState(0);
    const [selectedrooms, setSelectedrooms] = useState(0);
    const [selectedrentFrequency, setSelectedrentFrequency] = useState('');
    const [selectedfurnishingStatus, setSelectedfurnishingStatus] = useState(0);
    const [selectedHouseType, setSelectedHouseType] = useState('');
  
    let handleSubmit = async (e) => {
      e.preventDefault();
      
      try {
        const res = await axios.post('http://127.0.0.1:8000/forrent/', ({
          rentamount,
          location,
          description,
          bathrooms: selectedbathroom,
          rooms: selectedrooms,
          rentFrequency: selectedrentFrequency,
          furnishingStatus: selectedfurnishingStatus, 
          purpose: 'For-Rent',
          houseType: selectedHouseType,
          
        }))
  
        if (res.status === 200) {
          setrentamount("");
          setlocation("");
          setdescription("");
          selectedbathroom(0);
          selectedrooms(0);
          selectedrentFrequency("");
          selectedfurnishingStatus("");
          selectedHouseType("");
          setMessage("User created successfully");
        } else {
          setMessage("Some error occured");
        }
      } catch (err) {
        console.log(err);
      }
    };

    let housetypeOptions = filterData.find(obj => {
        return obj.queryName === 'housetype';
    }).items;

    let roomsOptions = filterData.find(obj => {
        return obj.queryName === 'rooms';
    }).items;

    let rentFrequencyOptions = filterData.find(obj => {
        return obj.queryName === 'rentFrequency';
    }).items;

    let bathroomOptions = filterData.find(obj => {
        return obj.queryName === 'bathrooms';
    }).items;

    let furnishingStatusOptions = filterData.find(obj => {
        return obj.queryName === 'furnishingStatus';
    }).items;
  
    return (
        <div className="row pd-top-100 border-bottom mb-4">
            <div className="col-md-4">
                <div className="section-title"><h4><Image src="/assests/square-check.svg" alt="img"/>House Name</h4></div>
            </div>
            <div className="col-md-8">
                <div className="section-title"><Heading size='sm'>Jason Landville Apartments</Heading><p>Lorem ipsum dolor sit amet, consectetur adipiscing </p></div>
                <VStack justify-content="space-between">
                    <form onSubmit={handleSubmit}>

                        <Stack spacing={4}>
                            <InputGroup>
                                <InputLeftElement
                                    pointerEvents='none'
                                    color='gray.300'
                                    fontSize='1.2em'
                                    children='$'
                                />
                                    <Input
                                        placeholder='Enter amount' 
                                        value={rentamount}
                                        onChange={(e) => setrentamount(e.target.value)}
                                    />
                                <InputRightElement children={<BsCheckCircle  color='green.500' />} />
                            </InputGroup>
                            <InputGroup>
                                <InputLeftElement
                                    pointerEvents='none'
                                    color='gray.300'
                                    fontSize='1.2em'
                                    children='$'
                                />
                                    <Input 
                                        placeholder='Enter Property Location'
                                        value={location}
                                        onChange={(e) => setlocation(e.target.value)}
                                    />
                                <InputRightElement children={<BsCheckCircle  color='green.500' />} />
                            </InputGroup>
                        </Stack>
                        <Stack direction="row">
                            <Select 
                                variant='filled' 
                                placeholder='houseType' 
                                size='md'
                                value={selectedHouseType}
                                onChange={(e) => setSelectedHouseType(e.target.value)}
                            >
                                {housetypeOptions.map(option => {
                                    return (<option key={option.value} value={option.value}>{option.name}</option>)
                                })}
                            </Select>
                            <Select 
                                variant='filled' 
                                placeholder='Rooms' 
                                size='md'
                                value={selectedrooms}
                                onChange={(e) => setSelectedrooms(e.target.value)}
                            >
                                {roomsOptions.map(option => {
                                    return (<option key={option.value} value={option.value}>{option.name}</option>)
                                })}
                            </Select>
                        </Stack>
                            <Stack direction='row'>
                                <Select 
                                    variant='filled' 
                                    placeholder='furnishingStatus' 
                                    size='md'
                                    value={selectedfurnishingStatus}
                                    onChange={(e) => setSelectedfurnishingStatus(e.target.value)}
                                >
                                    {furnishingStatusOptions.map(option => {
                                        return (<option key={option.value} value={option.value}>{option.name}</option>)
                                    })}
                                </Select>
                                <Select 
                                    variant='filled' 
                                    placeholder='bathroom' 
                                    size='md'
                                    value={selectedbathroom}
                                    onChange={(e) => setSelectedbathroom(e.target.value)}
                                >
                                    {bathroomOptions.map(option => {
                                        return (<option key={option.value} value={option.value}>{option.name}</option>)
                                    })}
                                </Select>

                                {/* <Select variant='filled' placeholder='FurningStatus' size='md'>
                                    <option value='Furnished'>Furnished</option>
                                    <option value='Unfurnished'>Unfurnished</option>
                                </Select> */}
                                {/* <Select variant='filled' placeholder='Bathrooms' size='md'>
                                    <option value={1}>1 Bathrooms</option>
                                    <option value={2}>2 Bathrooms</option>
                                    <option value={3}>3 Bathrooms</option>
                                    <option value={3}>4 Bathrooms</option>
                                    <option value={3}>More than 4</option>
                                </Select> */}

                            </Stack>
                            <Stack direction="row">
                                <Select 
                                    variant='filled' 
                                    placeholder='rentFrequency' 
                                    size='md'
                                    value={selectedrentFrequency}
                                    onChange={(e) => setSelectedrentFrequency(e.target.value)}
                                >
                                    {rentFrequencyOptions.map(option => {
                                        return (<option key={option.value} value={option.value}>{option.name}</option>)
                                    })}
                                </Select>
                                {/* <Select variant='filled' placeholder='Rent Frequency' size='md'>
                                    <option value='Monthly'>Monthly</option>
                                    <option value='Yearly'>Yearly</option>
                                    <option value='Daily'>Daily</option>
                                </Select> */}
                                {/* <Select variant='filled' placeholder='Kitchen' size='md'>
                                    <option value='With Kitchen'>With Kitchen</option>
                                    <option value='No kitchen'>No kitchen</option>
                                </Select> */}
                            </Stack>
                            <Textarea 
                                placeholder='Enter a brief description of your property' 
                                value={description}
                                onChange={(e) => setdescription(e.target.value)}
                            />
                            <Button colorScheme='yellow' type='submit'>Publish</Button>
                            <div className="message">{message ? <p>{message}</p> : null}</div>
                    </form>
                </VStack>
            </div>
        </div>   
    );
}

const ChooseCategory = () => {
    const [selectedPurpose, setSelectedPurpose] = useState("");

    return (
            <div className='border-bottom mb-4'>
                <VStack>
                    <Heading as='h1'>Choose Property Categories</Heading>
                    <Select variant='filled' placeholder='choose property category' size='md'
                        value={selectedPurpose}
                        onChange={(e) => setSelectedPurpose(e.target.value)}
                    >
                        <option value='rent'>For Rent</option>
                        <option value='sale'>For Sale</option>
                    </Select>
                </VStack>
                {selectedPurpose === 'rent' ? 
                    <ListpropertyForRent/> : 
                    <ListpropertyForsale/>
                }
                <Amenities/>
            </div>
        );
    }
// const Features=()=>{
//     return(
//         <div className="row pd-top-100 border-bottom mb-4">
//             <div className="col-md-4">
//                 <div className="section-title"><h4><Image src="/assests/square-check.svg" alt="img"/>House Name</h4></div>
//             </div>
//             <div className="col-md-8">
//                 <div className="section-title"><Heading size='sm'>Jason Landville Apartments</Heading><p>Lorem ipsum dolor sit amet, consectetur adipiscing </p></div>
//                 <VStack justify-content="space-between">
//                     <Stack spacing={4}>
//                         <InputGroup>
//                             <InputLeftElement
//                                 pointerEvents='none'
//                                 color='gray.300'
//                                 fontSize='1.2em'
//                                 children='$'
//                             />
//                                 <Input placeholder='Enter amount' />
//                                 <InputRightElement children={<BsCheckCircle  color='green.500' />} />
//                         </InputGroup>
//                         <InputGroup>
//                             <InputLeftElement
//                                 pointerEvents='none'
//                                 color='gray.300'
//                                 fontSize='1.2em'
//                                 children='$'
//                             />
//                                 <Input placeholder='Enter Property Location' />
//                                 <InputRightElement children={<BsCheckCircle  color='green.500' />} />
//                         </InputGroup>
//                     </Stack>
//                     <Stack direction="row">
//                         <Select variant='filled' placeholder='houseType' size='md'>
//                             <option value='option1'>Bedsitter</option>
//                             <option value='option2'>Single-Room</option>
//                             <option value='option3'>Villa</option>
//                             <option value='option3'>Apartment</option>
//                         </Select>
//                         <Select variant='filled' placeholder='Bedrooms' size='md'>
//                             <option value='option1'>Bedroom 1</option>
//                             <option value='option2'>Bedroom 2</option>
//                             <option value='option3'>Bedroom 3</option>
//                             <option value='option3'>Bedroom 4</option>
//                         </Select>
//                         </Stack>
//                         <Stack direction='row'>
//                             <Select variant='filled' placeholder='FurningStatus' size='md'>
//                                 <option value='option1'>Furnished</option>
//                                 <option value='option2'>Unfurnished</option>
//                             </Select>
//                             <Select variant='filled' placeholder='Bathrooms' size='md'>
//                                 <option value='option1'>Bathroom 1</option>
//                                 <option value='option2'>Bathroom 2</option>
//                                 <option value='option3'>Bathroom 3</option>
//                                 <option value='option3'>Bathroom 4</option>
//                                 <option value='option3'>More than 4</option>
//                             </Select>

//                         </Stack>
//                         <Stack direction="row">
//                             <Select variant='filled' placeholder='Rent Frequency' size='md'>
//                                 <option value='option1'>Monthly</option>
//                                 <option value='option2'>Yearly</option>
//                                 <option value='option3'>Daily</option>
//                             </Select>
//                             <Select variant='filled' placeholder='Kitchen' size='md'>
//                                 <option value='option1'>With Kitchen</option>
//                                 <option value='option2'>No kitchen</option>
//                             </Select>
//                         </Stack>
//                         <Textarea placeholder='Enter a brief description of your property' />
//                 </VStack>
//             </div>
//         </div>
//     )
// }

const DisplaySteps=()=>
{
return (
    <div className="border-bottom mb-4">
        <div className="row">
            <div className="col-md-4">
                <div className="single-intro style-two text-center">
                    <div className="thumb"><h1>1</h1></div> 
                    <div className="details"><h4 className="title">Choose Listing</h4></div>
                </div>
            </div>
            <div className="col-md-4">
                <div className="single-intro style-two text-center">
                    <div className="thumb"><h1>2</h1></div>
                    <div className="details"><h4 className="title">Add Information</h4></div> 
                </div>
            </div>
                <div className="col-md-4">
                    <div className="single-intro style-two text-center">
                        <div className="thumb"><h1>3</h1></div>
                        <div className="details"><h4 className="title">Publish</h4></div> 
                    </div>
                </div>
        </div>
    </div>
    
    );
}



const Amenities=()=>{
    return(
        <div className="row pd-top-80">
            {/* <div className="col-md-4">
                <div className="section-title"><h4><Image src="/assests/square-check.svg" alt="img"/>Amenities</h4></div>
            </div>
            <div className="col-md-8">
                <div className="section-title"><Heading size='sm'>Add The Available Amenities Here</Heading><p>Lorem ipsum dolor sit amet, consectetur adipiscing </p></div>
                <div className="row">
                    <div className="col-sm-4">
                        <ul className="rld-list-style mb-3 mb-sm-0">
                            <Checkbox size='lg' colorScheme='orange'>Checkbox</Checkbox>
                            <Checkbox size='lg' colorScheme='orange'>Checkbox</Checkbox>
                            <Checkbox size='lg' colorScheme='orange'>Parking</Checkbox>
                            <Checkbox size='lg' colorScheme='orange'>Sprinklers</Checkbox>
                        </ul>
                    </div>
                    <div className="col-sm-4">
                        <ul className="rld-list-style mb-3 mb-sm-0">
                            <Checkbox size='lg' colorScheme='orange'>Checkbox</Checkbox>
                            <Checkbox size='lg' colorScheme='orange'>Recreation</Checkbox>
                            <Checkbox size='lg' colorScheme='orange'>Front Yard</Checkbox>
                            <Checkbox size='lg' colorScheme='orange'>Fireplace</Checkbox>
                        </ul>
                    </div>
                    <div className="col-sm-4">
                        <ul className="rld-list-style mb-3 mb-sm-0">
                            <Checkbox size='lg' colorScheme='orange'>Checkbox</Checkbox>
                            <Checkbox size='lg' colorScheme='orange'>Indoor Game</Checkbox>
                            <Checkbox size='lg' colorScheme='orange'>24x7 Sec</Checkbox>
                            <Checkbox size='lg' colorScheme='orange'>Balcony</Checkbox>
                        </ul>
                    </div>
                    <div className="col-12 mt-5">
                        <Button colorScheme='yellow'>Publish</Button>
                    </div>
                </div>
            </div> */}
        </div>
    )
}

export {ChooseCategory,DisplaySteps,ListpropertyForsale,ListpropertyForRent};

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(ListProperties);



// function Submitcontacts() {
//     const [firstname, setfirstName] = useState("");
//     const [lastname,setlastName] = useState("");
//     const [email, setEmail] = useState("");
//     const [phoneNumber, setPhoneNumber] = useState(0);
  
//     const [owner, setOwner] = useState({});
  
//     const [message, setMessage] = useState("");
  
//     let handleSubmit = async (e) => {
//       e.preventDefault();
  
//       const owner = { firstname, lastname, email, phoneNumber}
//       console.log('Owner is ', owner)
      
//       try {
//       //   const res = await axios.post('http://127.0.0.1:8000/Create/', ({
//       //     firstname: firstname,
//       //     lastname,
//       //     email,
//       //     phoneNumber
//       //   }))
  
//       const res = await axios.post('http://127.0.0.1:8000/Create/', owner)
//       setOwner(res.data);
  
//       //   if (res.status === 201) {
//       //     setfirstName("");
//       //     setlastName("");
//       //     setEmail("");
//       //     setPhoneNumber(0);
//       //     setMessage("You have successfully");
//       //   } else {
//       //     setMessage("Some error occured");
//       //   }
//       } catch (err) {
//         console.log(err);
//       }
//     };
  
//     return (
//       <>
//       {/* <div className="row border-bottom mb-4">
//           <div className="col-md-4">
//                <div className="section-title"><h4><Image src="/assests/square-check.svg" alt="img"/>Contacts</h4></div>
//           </div>
//           <div className="col-md-8">
//               <div className="section-title"><Heading size='sm'>Enter Your Contacts</Heading></div>
//               <VStack justify-content="space-between">
//                   <Stack direction="row">
//                       <Stack spacing={3}>
//                           <form onSubmit={handleSubmit}>
//                               <Input 
//                                   variant='filled' 
//                                   placeholder='First Name'
//                                   value={firstname}
//                                   onChange={(e) => setfirstName(e.target.value)}
//                               />
//                               <Input 
//                                   variant='filled' 
//                                   placeholder='Last Name'
//                                   value={lastname}
//                                   onChange={(e) => setlastName(e.target.value)}
//                               />
//                               <Input 
//                                   variant='filled' 
//                                   placeholder='Email'
//                                   value={email}
//                                   onChange={(e) => setEmail(e.target.value)}
//                               />
//                               <InputGroup>
//                                   <InputLeftAddon children='+254' />
//                                   <Input 
//                                       type='tel' 
//                                       placeholder='phone number'
//                                       value={phoneNumber}
//                                       onChange={(e) => setPhoneNumber(e.target.value)}
//                                   />
//                               </InputGroup>
//                               <Button colorScheme='yellow' type='submit'>Next</Button>
//                               <div className="message">{message ? <p>{message}</p> : null}</div>
//                           </form>
//                       </Stack>
//                   </Stack>
//               </VStack>
//            </div>
//       </div> */}
  
//           <ChooseCategory/>
  
//       </>
  
//     );
//   }

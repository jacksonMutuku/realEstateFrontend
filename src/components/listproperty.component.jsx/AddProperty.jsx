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
import { useEffect } from 'react';
export const OwnerContext = React.createContext();


const AddProperty = ({ currentUser }) => {
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
                <OwnerContext.Provider value={currentUser}>
                    {selectedPurpose === 'rent' ? 
                        <ListpropertyForRent/>:
                        <ListpropertyForsale/>
                    }
                </OwnerContext.Provider>
                {/* <Amenities/> */}
            </div>
        );
}

//forsale section
function ListpropertyForsale() {
    const [price, setPrice] = useState(0);
    const [location,setlocation] = useState("");
    const [description, setdescription] = useState("");
    const [message, setMessage] = useState("");
    const [selectedbathroom, setSelectedbathroom] = useState(0);
    const [selectedrooms, setSelectedrooms] = useState(0);
    const [selectedfurnishingStatus, setSelectedfurnishingStatus] = useState(0);
    const [selectedHouseType, setSelectedHouseType] = useState('');
    const [coverPhoto, setCoverPhoto] = useState(null);
    const [otherPhotos, setOtherPhotos] = useState(null);
    // const [contactId, setContactId] = useState(0);

    const [finalAmenitiesList, setFinalAmenitiesList] = useState([])
    // console.log(finalAmenitiesList)

    const amenitiesList = "Parking" +
        "Indoor game, 24x7 Sec, Balcony";

    const currentUser = React.useContext(OwnerContext)
    console.log(currentUser);

    let handleSubmit = async (e) => {
        e.preventDefault();
        let form_data = new FormData();
        form_data.append('price',price)
        form_data.append('location',location)
        form_data.append('description', description)
        form_data.append('bathrooms', selectedbathroom)
        form_data.append('rooms', selectedrooms)
        form_data.append('furnishingStatus', selectedfurnishingStatus)
        form_data.append('purpose', 'For-Sale')
        form_data.append('houseType', selectedHouseType)
        form_data.append('amenities', finalAmenitiesList.join(","))
        form_data.append('ownerId', currentUser.id)
        form_data.append('coverPhoto', coverPhoto)
        form_data.append('otherPhotos', otherPhotos)
  
        if (!currentUser) {
          throw new Error("You must be logged in to post a Property!");
        }
  
      try {
        const res = await axios.post('http://127.0.0.1:8000/forsale/', form_data, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
  
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
                            <Stack direction="row" mt='5' mb='5'>
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
                            <Stack direction='row' mt='5' mb='5'>
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
                            <Stack direction='column'justifyContent='space-between' mt='5' mb='5'>
                            <input 
                                type='file'
                                onChange={(e) => setCoverPhoto(e.target.files[0])}
                                ></input>
                            <input 
                                type='file' 
                                onChange={(e) => setOtherPhotos(e.target.files[0])}
                                ></input>
                            </Stack>
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
                        <div className="col-12 mt-5">
                            <Button type="submit" colorScheme='yellow'>Publish</Button>
                        </div>
                    </div>
                </div>
            </div>
        </form>   
    );
}

//for rent section
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
    const [finalAmenitiesList, setFinalAmenitiesList] = useState([])
    const [coverPhoto, setCoverPhoto] = useState(null);
    const [otherPhotos, setOtherPhotos] = useState(null);

    // console.log(coverPhoto)
    // console.log(otherPhotos)

    // console.log(finalAmenitiesList)

    const amenitiesList = "Parking, " +
        "Indoor game, 24x7 Sec, Balcony";

    const currentUser = React.useContext(OwnerContext)
    // console.log(currentUser);
  
    let handleSubmit = async (e) => {
      e.preventDefault();
      let form_data = new FormData();

      form_data.append('rentamount', rentamount)
      form_data.append('location',location)
      form_data.append('description', description)
      form_data.append('bathrooms', selectedbathroom)
      form_data.append('rooms', selectedrooms)
      form_data.append('rentFrequency', selectedrentFrequency)
      form_data.append('furnishingStatus', selectedfurnishingStatus)
      form_data.append('purpose', 'For-Rent')
      form_data.append('houseType', selectedHouseType)
      form_data.append('amenities', finalAmenitiesList.join(","))
      form_data.append('ownerId', currentUser.id)
      form_data.append('coverPhoto', coverPhoto)
      form_data.append('otherPhotos', otherPhotos)

      if (!currentUser) {
        throw new Error("You must be logged in to post a Property!");
      }
      try {
        const res = await axios.post('http://127.0.0.1:8000/forrent/', form_data, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
  
        if (res.status === 200) {
          setrentamount("");
          setlocation("");
          setdescription("");
          selectedbathroom("");
          selectedrooms("");
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
                        <Stack direction="row" mt='5' mb='5'>
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
                            <Select mt='5' mb='5'
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
                            <Stack direction='row' mt='5' mb='5'>
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
                            <Stack direction="row">
                                <Select mt='5' mb='5'
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
                            </Stack>
                            <Textarea mt='5' mb='5'
                                placeholder='Enter a brief description of your property' 
                                value={description}
                                onChange={(e) => setdescription(e.target.value)}
                            />
                            <Stack direction='column'justifyContent='space-between' mt='5' mb='5'>
                                <input 
                                    type='file'
                                    onChange={(e) => setCoverPhoto(e.target.files[0])}
                                    ></input>
                                <input 
                                    type='file' 
                                    onChange={(e) => setOtherPhotos(e.target.files[0])}
                                    ></input>
                            </Stack>
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
                            </div>
                            <Button colorScheme='yellow' type='submit'>Publish</Button>
                            <div className="message">{message ? <p>{message}</p> : null}</div>
                    </form>
                </VStack>
            </div>
        </div>   
    );
}
export {ListpropertyForsale,ListpropertyForRent};

const mapStateToProps = ({ user }) => ({
    currentUser: user.currentUser
})
export default connect(mapStateToProps)(AddProperty);


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

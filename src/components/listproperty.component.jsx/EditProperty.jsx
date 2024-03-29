import { useEffect } from 'react';
import { useContext } from 'react';
import * as React from 'react';
import axios from 'axios';
import { connect } from "react-redux";
import { useState } from "react";
import './listProperty.styles.css';
import background from '../../assests/living-room1.jpg'
import { BsCheckCircle } from "react-icons/bs";
import { Image, Button, Select, Stack, HStack, VStack, Input, InputGroup, Textarea, InputLeftElement, InputRightElement, InputLeftAddon, Checkbox, StackDivider, Heading } from '@chakra-ui/react';
import { filterData } from '../../utils/filterData';
import { createPortal } from 'react-dom';
import { useHistory } from 'react-router-dom';

export const DataContext = React.createContext();

const EditProperty = ({ currentUser, match }) => {
    // let initialPurpose = ""
    const [property, setProperty] = useState({});

    const [selectedPurpose, setSelectedPurpose] = useState(property.purpose);

    const { purpose, id } = match.params;
    console.log(purpose, id);
    
    const fetchProperty = async () => {
        const response = await axios.get(`http://127.0.0.1:8000/${purpose}/${id}/`);
        console.log(response)
        // console.log(response.data)
        setProperty(response.data)
        setSelectedPurpose(response.data.purpose)
    }

    // const getPurpose = (property) => {
    //     if (property) {
    //         if (property.purpose === 'For-Sale') {
    //             return 'sale'
    //         } else if (property.purpose === 'For-Rent') {
    //             setSelectedPurpose('sale')
    //         }
    //         setSelectedPurpose('')
    //     }

    //     setSelectedPurpose('')
    // }

    useEffect(() => {
        fetchProperty();
        // setSelectedPurpose(property.purpose)
    }, [purpose, selectedPurpose])

    return (

        <div className='main'>
            <div className='main-container' style={{ backgroundImage: `url(${background})`, color: "#666" }}>
            </div>
            <div className="add-new-property-area pd-top-90 mg-bottom-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-9 col-lg-10">
                            <div className="section-title text-center"><Heading size='4xl'>Edit Property</Heading></div>
                            {/* <DisplaySteps/> */}
                            <div className='border-bottom mb-4'>
                                <VStack>
                                    <Heading as='h1'>Choose Property Categories</Heading>
                                    <Select variant='filled' placeholder='choose property category' size='md'
                                        value={selectedPurpose}
                                        onChange={(e) => setSelectedPurpose(e.target.value)}
                                    >
                                        <option value='For-Rent'>For Rent</option>
                                        <option value='For-Sale'>For Sale</option>
                                    </Select>
                                </VStack>
                                <DataContext.Provider value={{currentUser,property}}>
                                    {selectedPurpose === 'For-Rent' ?
                                        <ListpropertyForRent />:
                                        <ListpropertyForsale />
                                    }
                                </DataContext.Provider>
                                {/* <Amenities/> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


// FROM ADDPROPERTY
function ListpropertyForRent() {

    let history = useHistory();
    const {property, currentUser} = useContext(DataContext)

    console.log(property)

    const [rentamount, setrentamount] = useState(property.rentamount);
    const [location,setlocation] = useState(property.location);
    const [description, setdescription] = useState(property.description);
    const [message, setMessage] = useState("");
    const [selectedbathroom, setSelectedbathroom] = useState(property.bathrooms);
    const [selectedrooms, setSelectedrooms] = useState(property.rooms);
    const [selectedrentFrequency, setSelectedrentFrequency] = useState(property.rentFrequency);
    const [selectedfurnishingStatus, setSelectedfurnishingStatus] = useState(property.furnishingStatus);
    const [selectedHouseType, setSelectedHouseType] = useState(property.housetype);
    const [coverPhoto, setCoverPhoto] = useState(property.coverPhoto);
    const [otherPhotos, setOtherPhotos] = useState(property.otherPhotos);
    const [finalAmenitiesList, setFinalAmenitiesList] = useState(
             property.amenities.split(',').map(amenity => {
                     amenity.trim();
                     return amenity
                })
            )
    console.log(finalAmenitiesList)

    useEffect(() => {
        setrentamount(property.rentamount)
        setlocation(property.location)
        setdescription(property.description)
        setSelectedrooms(property.rooms)
        setSelectedbathroom(property.bathrooms)
        setSelectedrentFrequency(property.rentFrequency)
        setSelectedfurnishingStatus(property.furnishingStatus)
        setSelectedHouseType(property.housetype)
        setCoverPhoto(property.coverPhoto)
        setOtherPhotos(property.otherPhotos)
        setFinalAmenitiesList(
            property.amenities.split(',').map(amenity => {
                    amenity.trim();
                    return amenity
               })
           )
    }, [property])


    // console.log(coverPhoto)
    // console.log(otherPhotos)

    // console.log(finalAmenitiesList)

    const amenitiesList = "Parking, " +
        "Indoor game, 24x7 Sec, Balcony";
  
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
        const res = await axios.put(`http://127.0.0.1:8000/forrent/${property.id}/`, form_data, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        })
  
        if (res.status === 200) {
            history.push('/ViewYourProperty')

          setrentamount("");
          setlocation("");
          setdescription("");
          selectedbathroom("");
          selectedrooms("");
          selectedrentFrequency("");
          selectedfurnishingStatus("");
          selectedHouseType("");
          setMessage("Property created successfully");
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

function ListpropertyForsale() {
    let history = useHistory();
    const {property, currentUser} = useContext(DataContext)
    console.log(property)

    const [price, setPrice] = useState(property.price);
    const [location,setlocation] = useState(property.location);
    const [description, setdescription] = useState(property.description);
    const [message, setMessage] = useState();
    const [selectedbathroom, setSelectedbathroom] = useState(property.bathrooms);
    const [selectedrooms, setSelectedrooms] = useState(property.rooms);
    const [selectedfurnishingStatus, setSelectedfurnishingStatus] = useState(property.furnishingStatus);
    const [selectedHouseType, setSelectedHouseType] = useState(property.housetype);
    const [coverPhoto, setCoverPhoto] = useState(property.coverPhoto);
    const [otherPhotos, setOtherPhotos] = useState(property.otherPhotos);
    // const [contactId, setContactId] = useState(0);

    useEffect(() => {
        setPrice(property.price)
        setlocation(property.location)
        setdescription(property.description)
        setSelectedrooms(property.rooms)
        setSelectedbathroom(property.bathrooms)
        setSelectedfurnishingStatus(property.furnishingStatus)
        setSelectedHouseType(property.housetype)
        setCoverPhoto(property.coverPhoto)
        setOtherPhotos(property.otherPhotos)
    }, [property])

    const [finalAmenitiesList, setFinalAmenitiesList] = useState([])
    // console.log(finalAmenitiesList)

    const amenitiesList = "Parking" +
        "Indoor game, 24x7 Sec, Balcony";

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
        form_data.append('housetype', selectedHouseType)
        form_data.append('ownerId', currentUser.id)
        form_data.append('amenities', finalAmenitiesList.join(","))
        form_data.append('coverPhoto', coverPhoto)
        form_data.append('otherPhotos', otherPhotos)
  
        if (!currentUser) {
          throw new Error("You must be logged in to post a Property!");
        }
  
        try {
            const res = await axios.put(`http://127.0.0.1:8000/forsale/${property.id}/`, form_data, {
                headers: {
                    'content-type': 'multipart/form-data'
            }
        })
  
        if (res.status === 200) {
            history.push('/ViewYourProperty')
            
          setPrice(0);
          setlocation("");
          setdescription("");
          setSelectedbathroom(0);
          setSelectedrooms(0);
          setSelectedfurnishingStatus(""); 
          setSelectedHouseType("");
          setMessage("Property created successfully");
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
                                    placeholder='rooms' 
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

// export { ListpropertyForRent };

const mapStateToProps = ({ user }) => ({
    currentUser: user.currentUser
})
export default connect(mapStateToProps)(EditProperty);

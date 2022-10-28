import * as React from 'react';
import axios from 'axios';
import { useState } from "react";
import './listProperty.styles.css';
import background from '../../assests/living-room1.jpg'
import { BsCheckCircle } from "react-icons/bs";
import {Image,Button,Select,Stack,HStack,VStack,Input,InputGroup,Textarea,InputLeftElement,InputRightElement,InputLeftAddon,Checkbox,StackDivider,Heading} from '@chakra-ui/react';
import { filterData } from '../../utils/filterData';



function Submitcontacts() {
  const [firstname, setfirstName] = useState("");
  const [lastname,setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(0);
  const [message, setMessage] = useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    console.log(phoneNumber);
    console.log(email)
    console.log(firstname)
    console.log(lastname)
    
    try {
      const res = await axios.post('http://127.0.0.1:8000/Create/', ({
        firstname: firstname,
        lastname,
        email,
        phoneNumber
      }))

      if (res.status === 200) {
        setfirstName("");
        setlastName("");
        setEmail("");
        setPhoneNumber(0);
        setMessage("User created successfully");
      } else {
        setMessage("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
    <div className="row border-bottom mb-4">
        <div className="col-md-4">
             <div className="section-title"><h4><Image src="/assests/square-check.svg" alt="img"/>Contacts</h4></div>
        </div>
        <div className="col-md-8">
            <div className="section-title"><Heading size='sm'>Enter Your Contacts</Heading></div>
            <VStack justify-content="space-between">
                <Stack direction="row">
                    <Stack spacing={3}>
                        <form onSubmit={handleSubmit}>
                            <Input 
                                variant='filled' 
                                placeholder='First Name'
                                value={firstname}
                                onChange={(e) => setfirstName(e.target.value)}
                            />
                            <Input 
                                variant='filled' 
                                placeholder='Last Name'
                                value={lastname}
                                onChange={(e) => setlastName(e.target.value)}
                            />
                            <Input 
                                variant='filled' 
                                placeholder='Email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <InputGroup>
                                <InputLeftAddon children='+234' />
                                <Input 
                                    type='tel' 
                                    placeholder='phone number'
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                />
                            </InputGroup>
                            <Button colorScheme='yellow' type='submit'>Publish</Button>
                            <div className="message">{message ? <p>{message}</p> : null}</div>
                        </form>
                    </Stack>
                </Stack>
            </VStack>
         </div>
    </div>
    {ChooseCategory()}
    </>

  );
}

export default Submitcontacts;

function Listproperty() {
    const [Price, setPrice] = useState("");
    const [location,setlocation] = useState("");
    const [description, setdescription] = useState("");
    const [housetype, sethousetype] = useState(0);
    const [message, setMessage] = useState("");

    const [selectedHouseType, setSelectedHouseType] = useState('');
  
    let handleSubmit = async (e) => {
      e.preventDefault();
      
      try {
        const res = await axios.post('http://127.0.0.1:8000/forsale/', ({
          Price,
          location,
          description,
        }))
  
        if (res.status === 200) {
          setPrice("");
          setlocation("");
          setdescription("");
          sethousetype("");
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

    let bedroomOptions = filterData.find(obj => {
        return obj.queryName === 'bedroom';
    }).items;
  
    return (
        <div className="row pd-top-100 border-bottom mb-4">
            <div className="col-md-4">
                <div className="section-title"><h4><Image src="/assests/square-check.svg" alt="img"/>House Name</h4></div>
            </div>
            <div className="col-md-8">
                <div className="section-title"><Heading size='sm'>Jason Landville Apartments</Heading><p>Lorem ipsum dolor sit amet, consectetur adipiscing </p></div>
                <VStack justify-content="space-between">
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
                                    value={Price}
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
                                    onChange={(e) => location(e.target.value)}
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
                        {/* <Select variant='filled' placeholder='Bedrooms' size='md'>
                            <option value={1}>1 Bedrooms</option>
                            <option value={2}>2 Bedrooms</option>
                            <option value={3}>3 Bedrooms</option>
                            <option value={3}>4 Bedrooms</option>
                        </Select> */}
                        </Stack>
                        <Stack direction='row'>
                            <Select variant='filled' placeholder='FurningStatus' size='md'>
                                <option value='Furnished'>Furnished</option>
                                <option value='Unfurnished'>Unfurnished</option>
                            </Select>
                            {/* <Select variant='filled' placeholder='Bathrooms' size='md'>
                                <option value={1}>1 Bathrooms</option>
                                <option value={2}>2 Bathrooms</option>
                                <option value={3}>3 Bathrooms</option>
                                <option value={3}>4 Bathrooms</option>
                                <option value={3}>More than 4</option>
                            </Select> */}

                        </Stack>
                        <Stack direction="row">
                            <Select variant='filled' placeholder='Rent Frequency' size='md'>
                                <option value='Monthly'>Monthly</option>
                                <option value='Yearly'>Yearly</option>
                                <option value='Daily'>Daily</option>
                            </Select>
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
                </VStack>
            </div>
        </div>      
    );
}



const ChooseCategory=()=>
{
return (
    <div className='border-bottom mb-4'>
        <VStack>
            <Heading as='h1'>Choose Property Categories</Heading>
            <Select variant='filled' placeholder='choose property category' size='md'>
                <option value='option1'>For Rent</option>
                <option value='option2'>For Sale</option>
            </Select>
        </VStack>
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

export {ChooseCategory,DisplaySteps,Listproperty};


// const ChooseCategory=()=>
// {
// return (
//     <div className='border-bottom mb-4'>
//         <VStack>
//             <Heading as='h1'>Choose Property Categories</Heading>
//             <Button colorScheme='yellow' variant='solid'>Sell</Button>
//             <Button colorScheme='yellow'>Rent</Button>
//         </VStack>
//     </div>   
//     );
// }

// class MyComponent extends React.Component{
//     async postData(){
//         try{
//             let result =await fetch('http://127.0.0.1:8000/Create/',{
//                 method:'post',
//                 mode:'no-cors',
//                 headers:{
//                     'Accept':'application/json',
//                     'Content-type':'application/json',
//                 },
//                 body: JSON.stringify({
//                     firstName:'',
//                     phoneNumber:'',
//                     email:''
//                 })
//             });
//             console.log('hello')


//         }catch(e){
//             console.log(e)
//         }
//     }
//     render(){
//         return(
//             <div>
//               <h1>
//               	<button onClick={() =>this.postData()}>post</button>
//               </h1>
//             </div>
//         );
//     }
// };
// export default MyComponent;


// const Contacts=()=>{
//     return(
//         <div className="row border-bottom mb-4">
//             <div className="col-md-4">
//                 <div className="section-title"><h4><Image src="/assests/square-check.svg" alt="img"/>Contacts</h4></div>
//             </div>
//             <div className="col-md-8">
//                 <div className="section-title"><Heading size='sm'>Enter Your Contacts</Heading></div>
//                 <VStack justify-content="space-between">
//                     <Stack direction="row">
//                         <Stack spacing={3}>
//                             <Input variant='filled' placeholder='First Name'/>
//                             <Input variant='filled' placeholder='Last Name'/>
//                             <Input variant='filled' placeholder='Email'/>
//                             <InputGroup>
//                                 <InputLeftAddon children='+234' />
//                                 <Input type='tel' placeholder='phone number' />
//                             </InputGroup>
//                             <Button colorScheme='yellow'>Publish</Button>
//                         </Stack>
//                     </Stack>
//                 </VStack>
//             </div>
//         </div>
//     )
// }

// }
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
// const handleSubmit = (e) => {
//     e.preventDefault();
//     axios
//        .post('http://127.0.0.1:8000/contacts/', {
//           firstName:firstName,
//           lastName: lastName,
//           email:email,
//        })
//        .then((res) => {
//         //   setContact((contacts) => [res.data, ...contacts]);
//           setfirstName('');
//           setlastName('');
//           setemail('');
//        })
//        .catch((err) => {
//           console.log(err.message);
//        });
//  };
// const Contacts=()=>{
//     return(
//         <div className="row border-bottom mb-4">
//             <div className="col-md-4">
//                 <div className="section-title"><h4><Image src="/assests/square-check.svg" alt="img"/>Contacts</h4></div>
//             </div>
//             <div className="col-md-8">
//                 <div className="section-title"><Heading size='sm'>Enter Your Contacts</Heading></div>
//                 <VStack justify-content="space-between">
//                     <Stack direction="row">
//                         <Stack spacing={3}>
//                             <Input variant='filled' placeholder='First Name'/>
//                             <Input variant='filled' placeholder='Last Name'/>
//                             <Input variant='filled' placeholder='Email'/>
//                             <InputGroup>
//                                 <InputLeftAddon children='+234' />
//                                 <Input type='tel' placeholder='phone number' />
//                             </InputGroup>
//                         </Stack>
//                     </Stack>
//                 </VStack>
//             </div>
//         </div>
//     )
// }

// export {Contacts,ChooseCategory,DisplaySteps};
// const Amenities=()=>{
//     return(
//         <div className="row pd-top-80">
//             <div className="col-md-4">
//                 <div className="section-title"><h4><Image src="/assests/square-check.svg" alt="img"/>Amenities</h4></div>
//             </div>
//             <div className="col-md-8">
//                 <div className="section-title"><Heading size='sm'>Add The Available Amenities Here</Heading><p>Lorem ipsum dolor sit amet, consectetur adipiscing </p></div>
//                 <div className="row">
//                     <div className="col-sm-4">
//                         <ul className="rld-list-style mb-3 mb-sm-0">
//                             <Checkbox size='lg' colorScheme='orange'>Checkbox</Checkbox>
//                             <Checkbox size='lg' colorScheme='orange'>Checkbox</Checkbox>
//                             <Checkbox size='lg' colorScheme='orange'>Parking</Checkbox>
//                             <Checkbox size='lg' colorScheme='orange'>Sprinklers</Checkbox>
//                         </ul>
//                     </div>
//                     <div className="col-sm-4">
//                         <ul className="rld-list-style mb-3 mb-sm-0">
//                             <Checkbox size='lg' colorScheme='orange'>Checkbox</Checkbox>
//                             <Checkbox size='lg' colorScheme='orange'>Recreation</Checkbox>
//                             <Checkbox size='lg' colorScheme='orange'>Front Yard</Checkbox>
//                             <Checkbox size='lg' colorScheme='orange'>Fireplace</Checkbox>
//                         </ul>
//                     </div>
//                     <div className="col-sm-4">
//                         <ul className="rld-list-style mb-3 mb-sm-0">
//                             <Checkbox size='lg' colorScheme='orange'>Checkbox</Checkbox>
//                             <Checkbox size='lg' colorScheme='orange'>Indoor Game</Checkbox>
//                             <Checkbox size='lg' colorScheme='orange'>24x7 Sec</Checkbox>
//                             <Checkbox size='lg' colorScheme='orange'>Balcony</Checkbox>
//                         </ul>
//                     </div>
//                     <div className="col-12 mt-5">
//                         <Button colorScheme='yellow'>Publish</Button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }

// export {DisplaySteps,ChooseCategory,Contacts,Features,Amenities};


// const App = () => {
//   const handleClick = () => {
    
//   };

//   return (
//     <div>
//       <button type="button" onClick={handleClick}>
//         Click Me
//       </button>
//     </div>
//   );
// };

// export default App;





// import {useState} from 'react';

// export default function Forsale() {
//   const [isShown, setIsShown] = useState(false);

//   const handleClick = event => {
//     // 👇️ toggle shown state
//     setIsShown(current => !current);

//     // 👇️ or simply set it to true
//     // setIsShown(true);
//   };

//   return (
//     <div>
//       <button onClick={handleClick}>Click</button>

//       {/* 👇️ show elements on click */}
//       {isShown && (
//         <div>
//           <h2>Some content here</h2>
//         </div>
//       )}

//       👇️ show component on click
//       {isShown && <Box />}
//     </div>
//   );
// }


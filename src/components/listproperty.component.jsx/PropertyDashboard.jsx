import React from "react";
import './listProperty.styles.css';
import background from '../../assests/living-room1.jpg'
import { BsCheckCircle } from "react-icons/bs";
import {Link,Image,Button,Select,Stack,HStack,VStack,Input,InputGroup,Text,InputLeftElement,InputRightElement,InputLeftAddon,Checkbox,StackDivider,Heading} from '@chakra-ui/react';
import ListProperties from './AddProperty'
const PropertyDashboard =()=>{
    return(
        <div className='main'>
            <div className='main-container'style={{ backgroundImage: `url(${background})`,color:"#666"}}>
            </div>
            <div className="add-new-property-area pd-top-90 mg-bottom-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-9 col-lg-10">
                            <div className="section-title text-center"><Heading size='4xl'>Add Your Contacts</Heading></div>
                            {/* <Submitcontacts/> */}
                            <VStack p="10">
                                <Link 
                                    href="/viewYourProperty"
                                    color="green" 
                                    size="lg"
                                >
                                    <Button colorScheme='yellow'>View yourproperties</Button>
                                    
                                </Link>
                                <Link 
                                    href="/addProperty"
                                    color="green" 
                                    size="lg"
                                >
                                    <Button colorScheme='yellow'>Add new properties</Button>
                                </Link>
                            </VStack>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 
export default PropertyDashboard; 



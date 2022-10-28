import React from "react";
import './listProperty.styles.css';
import background from '../../assests/living-room1.jpg'
import { BsCheckCircle } from "react-icons/bs";
import {Image,Button,Select,Stack,HStack,VStack,Input,InputGroup,Textarea,InputLeftElement,InputRightElement,InputLeftAddon,Checkbox,StackDivider,Heading} from '@chakra-ui/react';
import {DisplaySteps,Listproperty} from './ForRent';
import Submitcontacts from './ForRent'
const List1 =()=>{
    return(
        <div className='main'>
            <div className='main-container'style={{ backgroundImage: `url(${background})`,color:"#666"}}>
            </div>
            <div className="add-new-property-area pd-top-90 mg-bottom-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-9 col-lg-10">
                            <div className="section-title text-center"><Heading size='4xl'>Add New Property</Heading></div>
                            <DisplaySteps/>
                            {/* <Contacts/> */}
                            <Submitcontacts/>
                            <Listproperty/>
                            {/* <Features/>
                            <Amenities/> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 
export default List1;                           
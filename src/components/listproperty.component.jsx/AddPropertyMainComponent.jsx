import React from "react";
import './listProperty.styles.css';
import background from '../../assests/living-room1.jpg'
import { BsCheckCircle } from "react-icons/bs";
import { Image, Button, Select, Stack, HStack, VStack, Input, InputGroup, Textarea, InputLeftElement, InputRightElement, InputLeftAddon, Checkbox, StackDivider, Heading } from '@chakra-ui/react';
import AddProperty from './AddProperty'

const AddPropertyMainComponent = () => {
    return (
        <div className='main'>
            <div className='main-container' style={{ backgroundImage: `url(${background})`, color: "#666" }}>
            </div>
            <div className="add-new-property-area pd-top-90 mg-bottom-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-9 col-lg-10">
                            <div className="section-title text-center"><Heading size='4xl'>Add New Property</Heading></div>
                            <DisplaySteps />
                            <AddProperty />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const DisplaySteps = () => {
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

export { DisplaySteps };

export default AddPropertyMainComponent;                           
import  React, {useState,useEffect}from "react";
import Property from "../homepage/PropertySearch";
import {Flex, Box, Button,Text,Link ,Image, Img, HStack} from '@chakra-ui/react';
import axios from 'axios';
import { connect } from "react-redux";

const ViewYourProperty =({ currentUser })=>{

    const [userProperties,setUserProperties] =useState([])
    console.log(currentUser);

    const deleteProperty = async (propertyId) => {
        await axios.delete(`http://127.0.0.1:8000/forrent/${propertyId}/`)
        getProperty()
    }

    // if (!currentUser) {
    //     throw new Error("You must be logged in to view your properties")
    // }
    const getProperty=async() =>{
        const response=await axios.get('http://127.0.0.1:8000/properties/')
        console.log(response.data)
        // const myArray = response.data;
        const userPropertyList = response.data.filter(property => {
            return property.ownerId === currentUser?.id
        });
        setUserProperties(userPropertyList)
    }
    useEffect(()=>{
        getProperty();
    },[currentUser])

    return(
        <Box>
            <Flex flexWrap='wrap'>
            {console.log(userProperties)}
                {
                    userProperties.map((property) =>((
                    <Property 
                        deleteProperty={deleteProperty}
                        viewProperty={true} 
                        property={property} 
                        key={property.id}
                    />)))
                }
            </Flex>
            
        </Box>
    )

}

const mapStateToProps = ({ user }) => ({
    currentUser: user.currentUser
})
export default connect(mapStateToProps)(ViewYourProperty);
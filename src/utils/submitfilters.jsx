import React from "react";
import {Box,Button, VStack } from "@chakra-ui/react";



const SubmitFilters =()=>(
   <VStack>
        <Button type="submit">Submit</Button>
   </VStack>
);

const handleClearClick = (getUpdatedProperties, propertiesforsale) => {
   getUpdatedProperties(propertiesforsale)
}

const ClearFilters =({ getUpdatedProperties, propertiesforsale })=> {
   return (
      <VStack>
            <Button onClick={() => {handleClearClick(getUpdatedProperties, propertiesforsale)}}>Clear</Button>
      </VStack>
)};
export {SubmitFilters,ClearFilters};
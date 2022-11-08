import React from 'react';
import{ForRent,ForSale}  from '../components/homepage/homepage.component';

//This function displays properties in the homepage
const HomePage =()=>(
    <div className ='sign-in'>
         <ForSale/>
         <ForRent/>  
    </div>
);

export default HomePage ;
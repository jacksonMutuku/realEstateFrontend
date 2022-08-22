import React from 'react';
import {Box,Center,HStack,VStack,Heading,Link,Text,Input,FormControl,FormLabel,Button} from '@chakra-ui/react'

export default function PasswordReset() {
    return(
        <Center h='100vh' bg='gray.200'>
            <Box 
                bg='whiteAlpha.900' 
                w={['full' ,'md']} 
                p={[8,10]} 
                mt={[20,'10vh']} 
                mx='auto' 
                border={['none']}
                borderColor={['','']}
                borderRadius={10}
            >
                <VStack>
                    <HStack w='full' justify='space-between'>
                        <Heading >Password Reset</Heading>
                        <Link color='purple' href='/signup'>Login</Link>
                    </HStack>
                    <Text>Enter your email, and we’ll send you instructions on how to reset your password.</Text>
                    <FormControl paddingBottom={'5'}>
                         <FormLabel>Email Address</FormLabel>
                        <Input rounded ='none' variant='filled'/>
                    </FormControl>
                    <Button rounded ='none' colorScheme='green' width={['full']}>Send me reset instructions</Button>
                </VStack>


            </Box>
        </Center>  
    )
}
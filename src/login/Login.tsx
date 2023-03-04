import React from "react";
import { Box, Button, ChakraProvider, Flex, Image, Link, Stack, Text, FormControl, FormLabel } from "@chakra-ui/react";

import { BsApple } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

import { PhoneInput, PhoneInputResponseType } from "react-simple-phone-input";
import "react-simple-phone-input/dist/style.css";

export default function Loginpage() {

    return (
    <>
        <ChakraProvider>
            <Box 
                h='100vh'
                w='100vw'
                bgColor='#000000'
                display='flex'
                justifyContent='center'
                alignItems='center'
            >
                <Flex
                h='90%'
                w='520px'
                direction='column'
                display='flex'
                alignItems='center'
                gap='50px'
                color='#ffffff'
                >
                    <Image              
                        src='img/logotoqueplay.jpg'
                    />

                    <Text fontSize='40px'>Iniciar sessão</Text>

                    <Text fontSize='20px' >Ainda não possui uma conta no ToquePlay? <Link href="#" color='#CC3032' fontSize='20px' >REGISTAR-SE</Link></Text>

                    <Stack direction='row' spacing={4} w='472px'>
                        <Button leftIcon={<FcGoogle />} color='#000' variant='none' bgColor='#FAFAFA' borderRadius='100px'>
                            GOOGLE
                        </Button>
                        <Button leftIcon={<BsApple />}  color='#000' variant='none' bgColor='#FAFAFA' borderRadius='100px'>
                            APPLE
                        </Button>
                    </Stack>

                    <FormControl w='472px' fontSize='20px' fontWeight='light'>
                        <FormLabel>Número de telefone</FormLabel>
                            <PhoneInput
                                country="AO"
                                placeholder="Add your phone"
                                onChange={(data: PhoneInputResponseType) => console.log(data)}
                            />
                    </FormControl>
                    
                    <Button
                        bgColor='#CC3032'
                        borderRadius='100px'
                        variant='none'
                        w='472px'
                        
                    >
                        INICIAR SESSÃO
                    </Button>
                        
                </Flex>
                
            </Box>
        </ChakraProvider>
    </>
    );
}
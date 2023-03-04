import React from "react";
import { Box, Button, ChakraProvider, Flex, Image, Link, Stack, Text, FormControl, FormLabel } from "@chakra-ui/react";

import { BsApple } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";

import { PhoneInput, PhoneInputResponseType } from "react-simple-phone-input";

import "../../src/button/style.css";
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
                w='472px'
                direction='column'
                display='flex'
                alignItems='center'
                gap='40px'
                color='#ffffff'
                >
                    <Image              
                        src='img/logotoqueplay.jpg'
                    />

                    <Text fontSize='30px'>Iniciar sessão</Text>

                    <Text fontSize='18px' >Ainda não possui uma conta no ToquePlay? <Link href="#" color='#CC3032' fontSize='18px' >REGISTAR-SE</Link></Text>

                    <Stack direction='row' spacing={4} w='372px' justifyContent='center'>
                        <Button leftIcon={<FcGoogle />} color='#000' variant='none' bgColor='#FAFAFA' w='194px' justifyContent='space-around' borderRadius='100px'>
                            GOOGLE
                        </Button>
                        <Button leftIcon={<BsApple />}  color='#000' variant='none' bgColor='#FAFAFA' w='194px' justifyContent='space-around' borderRadius='100px'>
                            APPLE
                        </Button>
                    </Stack>

                    <FormControl w='372px' fontSize='16px'>
                        <FormLabel fontSize='16px' fontWeight='normal' >Número de telefone</FormLabel>
                            <PhoneInput
                                country="AO"
                                placeholder="Digite o seu número de telefone"
                                onChange={(data: PhoneInputResponseType) => console.log(data)}
                            />
                        </FormControl>
                    
                    <Button
                        bgColor='#CC3032'
                        borderRadius='100px'
                        variant='none'
                        w='372px'
                        
                    >
                        INICIAR SESSÃO
                    </Button>
                    
                    <Text textAlign='center' fontSize='14px'>Este site está protegido por reCAPTCHA,{''} <Link href='#' color='#CC3032'>POLITICA DE PRIVACIDADE</Link> {''} e{''} <Link href='#' color='#CC3032'>TERMOS DE UTILIZAÇÃO</Link> {''}da Google aplicáveis.</Text>
                        
                </Flex>
                
            </Box>
        </ChakraProvider>
    </>
    );
}
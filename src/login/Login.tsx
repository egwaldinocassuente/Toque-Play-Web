import React from "react";
import { Box, Button, ChakraProvider, Flex, Link, Stack, Text, FormControl, FormLabel, Divider } from "@chakra-ui/react";

import { BsApple } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import { FaGooglePlay } from "react-icons/fa";

import { PhoneInput, PhoneInputResponseType } from "react-simple-phone-input";

import logotoqueplay from "../assets/img/logotoqueplay.png";
import ImageLogotoqueplaySide from "../components/ImageLogotoqueplaySide";

import "../../src/button/style.css";
export default function Loginpage() {

    return (
    <>
        <ChakraProvider>
            <Box 
                justifyContent='center'
                alignItems='center'                
                bgColor='#000000'
                flexWrap='wrap'
                display='flex'
                w='100vw'
                h='100vh'
            >
                <Flex
                alignItems='center'
                direction='column'
                color='#ffffff'
                display='flex'
                gap='40px'
                w='472px'
                >
                    <ImageLogotoqueplaySide
                        imageSrc={logotoqueplay}
                        alt={"Logotipo da Beatplace"}
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
                        borderRadius='100px'
                        bgColor='#CC3032'
                        variant='none'
                        w='372px'
                        
                    >
                        INICIAR SESSÃO
                    </Button>
                    
                    <Text mb='10px' textAlign='center' fontSize='14px'>Este site está protegido por reCAPTCHA,{''} <Link href='#' color='#CC3032'>POLITICA DE PRIVACIDADE</Link> {''} e{''} <Link href='#' color='#CC3032'>TERMOS DE UTILIZAÇÃO</Link> {''}da Google aplicáveis.</Text>
                
                    <Divider orientation='horizontal' w='100vw' />
                
                    <Stack direction='row' spacing={4} w='372px' justifyContent='center'>
                    <Flex               
                            display='flex' 
                            alignItems='center'
                            border='1px solid #A6A6A6'
                            w='172px'
                            p='10px'
                            borderRadius='10px'
                            >
                            <FaGooglePlay size='30px'/>
                            <Flex flexDirection='column' ml='10px' lineHeight='1'>
                                <Text fontSize='12px'>GET IT ON</Text>
                                <Text fontWeight='medium'>Google Play</Text>
                            </Flex>
                        </Flex>

                        <Flex               
                            display='flex' 
                            alignItems='center'
                            border='1px solid #A6A6A6'
                            w='158px'
                            p='10px'
                            borderRadius='10px'
                            >
                            <BsApple size='30px'/>
                            <Flex flexDirection='column' ml='10px' lineHeight='1'>
                                <Text fontSize='12px'>Download on the</Text>
                                <Text fontWeight='medium'>App Store</Text>
                            </Flex>
                        </Flex>
                    </Stack>

                </Flex>
            </Box>
        </ChakraProvider>
    </>
    );
}
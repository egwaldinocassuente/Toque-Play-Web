import { Box, Button, ChakraProvider, Flex, Image, Link, Stack, Text, FormControl, FormLabel } from "@chakra-ui/react";


// import { useState } from "react";

import { BsApple } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";


export default function Loginpage() {
    
    // const [value, setValue] = useState()

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
                        {/* <PhoneInput 
                        type='tel' 
                        placeholder='Digite o seu número de telefone'
                        _placeholder={{color: '#C0C0C0'}} 
                        bgColor='#ffffff' 
                        color='#000' autoComplete="tel" 
                        pattern="^$[0-9]" required international
                        countryCallingCodeEditable={false}
                        defaultCountry="AO"
                        value={value}
                        onChange={_event => console.log(setValue)}/> */}
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
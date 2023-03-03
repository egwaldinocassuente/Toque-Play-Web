import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import {BrowserRouter} from "react-router-dom";

import {RoutesConfig} from "./routes";
import Loginpage from './login/Login';


function App() {
	return (
		<BrowserRouter>
			<ChakraProvider>
				<RoutesConfig />
				<Loginpage />
			</ChakraProvider>
		</BrowserRouter>
	);
}

export default App;

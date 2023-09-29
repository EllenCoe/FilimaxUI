import {
	Box,
	Center,
	Image,
	Flex,
	Stack,
	AbsoluteCenter
} from '@chakra-ui/react';
import { LoginComponent } from '../components/Login';

import React, { useState } from 'react';

export const Login: React.FC = () => {

	const [authenticated, setauthenticated] = useState(localStorage.getItem("token")? true: false);
	return (
	
		<>
			<Flex
				minH={'100vh'}
				align={'center'}
				justify={'center'}
				bg='#E5E5E5'>

				<Stack spacing={8} mx={'auto'} maxW={'lg'} >
					<Box
						rounded={'lg'}
						bg='#FFFFFF'
						boxShadow={'lg'}
						borderRadius={0}
						p={8}>

						<Stack spacing={14} pt={10}>
							<Box position='relative'>
								<AbsoluteCenter w={200} paddingBottom={6} >

								</AbsoluteCenter>
							</Box>
							<LoginComponent />
						</Stack>
					</Box>
					<Center fontSize={14} h={3}>
						Todos os direitos reservados Filimax
					</Center>
				</Stack >
			</Flex >
		</>
	);
};
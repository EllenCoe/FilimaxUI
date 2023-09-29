import { Button, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../hooks/useAuth';


type FormData = {
	username: string;
	password: string;
}

export const LoginComponent: React.FC = () => {
	const { handleSubmit, register } = useForm<FormData>();
	const { userToken, login, authAttemptFailed } = useAuth();


	function handleLogin(formData: FormData) {
		login(formData).then(data => {
			console.log(userToken)
		});
	}

	return (
		<form onSubmit={handleSubmit(handleLogin)}>
			<FormControl isRequired id="user">
				<FormLabel>Usuário:</FormLabel>
				<Input type="text" borderRadius={0} {...register('username')} />
			</FormControl>
			<FormControl pt={'16px'} isRequired id="password">
				<FormLabel>Senha: </FormLabel>
				<Input type="password" borderRadius={0}{...register('password')} />
			</FormControl>

			<Stack pt={6} spacing={10}>
				<Button
					bg={
						'blue.400'
					}
					color={'white'}
					borderRadius={0}
					fontSize={'16px'}
					type='submit'
					_hover={{
						bg: 'blue.300'
					}}>
					ENTRAR
				</Button>
			</Stack>
		</form>
	);
};
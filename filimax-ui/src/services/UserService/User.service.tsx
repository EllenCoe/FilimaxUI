
import { UserSchema } from '../../@types/user';
import { useApi } from '../../hooks/useApi';
//import { useCoralSpinner } from '../../hooks/useCoralSpinner';
//import { useCoralToast } from '../../hooks/useCoralToast';

import * as axiosconfig from './User.axiosconfig';

export const UserService = () => {
	const { requestHandler, error } = useApi();
	//const { setShowSpinner } = useCoralSpinner();

	//const toast = useCoralToast();

	const getUsers = async (): Promise<UserSchema[]> => {
		//setShowSpinner(true);

		let response: UserSchema[] = [];

		try {
			response = await requestHandler<UserSchema[]>(axiosconfig.getUsers());
		} catch (e) {
			/*
			toast({
				title: 'Erro ao carregar as integrações',
				description: error?.message,
				status: 'error'
			});*/
		} finally {
			//setShowSpinner(false);
		}

		return response;
	};

	const getUserById = async (userId: number): Promise<UserSchema> => {
		let response: UserSchema = {} as UserSchema;

		try {
			response = await requestHandler<UserSchema>(axiosconfig.getUserById(userId));
		} catch (e) {
			/*
			toast({
				title: 'Erro ao carregar a integração',
				description: error?.message,
				status: 'error'
			});*/
		}

		return response;
	};

	const deleteUser = async (databaseId: number): Promise<void> => {
		//setShowSpinner(true);

		try {
			await requestHandler(axiosconfig.deleteUser(databaseId));
		} catch (e) {
			/*
			toast({
				title: 'Erro ao detetar a integração',
				description: error?.message,
				status: 'error'
			});*/
		} finally {
			//setShowSpinner(false);
		}
	};

	const postUser = async (data: UserSchema): Promise<UserSchema> => {
		let response: UserSchema = {} as UserSchema;

		try {
			response = await requestHandler<UserSchema>(axiosconfig.postUser(data));
		} catch (e) {
			/*
			toast({
				title: 'Erro ao criar a integração',
				description: error?.message,
				status: 'error'
			});*/
		}

		return response;
	};

	const updatetUser = async (data: UserSchema): Promise<UserSchema> => {
		let response: UserSchema = {} as UserSchema;

		try {
			response = await requestHandler<UserSchema>(axiosconfig.updateUser(data));
		} catch (e) {
			/*
			toast({
				title: 'Erro ao atualizar a integração',
				description: error?.message,
				status: 'error'
			});*/
		}

		return response;
	};
	return {
		getUsers, getUserById,
		deleteUser, postUser,
		updatetUser
	};
}


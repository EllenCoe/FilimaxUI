
import { UserSchema } from '../../@types/user';

export const getUsers = () => {
	return {
		method: 'GET', 
		url: '/accounts'
	};
};

export const getUserById = (userlId: number) => {
	return {
		method: 'GET', 
		url: `/accounts/${userlId}`
	};
};

export function deleteUser(userId: number) {
	return {
		method: 'DELETE',
		url: `/user/${userId}`

	};
}

export const postUser = (data: UserSchema) => 
{
	return {
		method: 'POST',
		url: '/user',
		data
	};
};

export const updateUser = (data: UserSchema) => 
{
	return {
		method: 'PUT',
		url: '/user',
		data
	};
};

export const getCheckUser = (userId: number) => {
	return {
		method: 'GET', 
		url: `/user/check/${userId}`
	};
};


export const stopUser = (userId: number) => {
	return {
		method: 'POST', 
		url: `/user/stop/${userId}`
	};
};

export const getAvailableClusters = () => {
	return {
		method: 'GET', 
		url: '/available-clusters'
	};
};

export const getReservoirModelFiles = () => {
	return {
		method: 'GET', 
		url: `/reservoir-files`

	};
};

export const getReservoirFilesTree = () => {
	return {
		method: 'GET', 
		url: `/reservoir-files-tree`

	};
};

export const getReservoirFilesNetworkAreas = () => {
	return {
		method: 'GET', 
		url: `/reservoir-files-network-areas`

	};
};
import { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';
import { UserCredentials } from '../@types/auth';
import http from '../shared/connection/http';
import * as token_util from '../shared/utils/tokenUtil';
import expirationSessionModalStore from '../shared/store/ExpirationSessionModal.store';
import { useNavigate } from 'react-router-dom';

export type UserTokenData = {
	refresh: string,
	access: string,
}
export type UserContextData = {
	username: string,
	name: string,
}

export interface IAuthContextValue {
	userToken: UserTokenData | undefined;
	authAttemptFailed: boolean | undefined;
	login: (credentials: UserCredentials) => Promise<void>;
	logout: () => Promise<void>;
}

export const AuthContext = createContext({} as IAuthContextValue);

export const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
	const [isRequiring, setRequesting] = useState<boolean>(false)

	const [userToken, setUserToken] = useState<UserTokenData | undefined>(() => {
		const token = token_util.getUserToken();

		if (token) {
			const decodedToken = token_util.decodeUserToken(token) as UserTokenData;

			return {
				access: decodedToken.access,
				refresh: decodedToken.refresh
			};
		}
	});
	const [authAttemptFailed, setAuthAttemptFailed] = useState<boolean>();

	const { opened, close } = expirationSessionModalStore();
	const navigate = useNavigate();

	async function login(credentials: UserCredentials): Promise<void> {
		await http.post('/accounts/login/', credentials).then((respnse) => {

			token_util.setUserToken(respnse.data.access);

			const decodedToken = token_util.decodeUserToken(respnse.data) as UserTokenData;


			setUserToken({
				access: decodedToken.access,
				refresh: decodedToken.refresh
			});
			// If login popup is opnened
			if (opened) {
				close();

			}
			navigate(0)

		}).catch((error) => {
			setAuthAttemptFailed(false);
		}).finally(() => {
			//setRequesting(false)
			//setShowSpinner(false);
			navigate(0)
		});


	}

	async function logout() {
		// TODO: Isso é apenas um mock, implementar lógica real de logout!
		setUserToken(undefined);

		token_util.removeUserToken();
	}

	return (
		<AuthContext.Provider value={{ userToken, login, logout, authAttemptFailed }}>
			{children}
		</AuthContext.Provider>
	);
};

export function useAuth() {
	return useContext(AuthContext);
}
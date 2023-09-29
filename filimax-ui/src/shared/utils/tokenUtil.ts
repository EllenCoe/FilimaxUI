import jwt_decode from 'jwt-decode';

const ACCESS_TOKEN = 'token';

export function getUserToken() {
	return sessionStorage.getItem(ACCESS_TOKEN);	
}

export function setUserToken(jwtToken: string) {
	sessionStorage.setItem(ACCESS_TOKEN, jwtToken);
}

export function removeUserToken() {
	sessionStorage.removeItem(ACCESS_TOKEN);
}

export function decodeUserToken(jwtToken: string) {
	return jwt_decode(jwtToken);
}
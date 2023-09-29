import axios from 'axios';
import qs from 'qs';
import { getUserToken } from '../utils/tokenUtil';

const axiosConfig = axios.create({
	baseURL: 'http://127.0.0.1:8000/api/',
	headers: {
		'Accept': 'application/json',
		'Content-Type': 'application/json',
	},
	paramsSerializer: (params: any) => {
		return qs.stringify(params);
	}
});

axiosConfig.interceptors.request.use((axios) => {
	const token = getUserToken();

	if (token)
		if (axios.headers)
			axios.headers.Authorization = `Bearer ${token}`;

	return axios;
});

export default axiosConfig;
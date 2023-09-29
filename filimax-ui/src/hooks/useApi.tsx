import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { useState } from 'react';

import http from '../shared/connection/http';
import expirationSessionModalStore from '../shared/store/ExpirationSessionModal.store';

interface UseApiProps<T> extends AxiosRequestConfig {
	transformResponse?(data: any): T;
}

export const useApi = () => {
	const { open } = expirationSessionModalStore();
	const [error, setError] = useState<any>();

	const requestHandler = async <T = any,>(props: UseApiProps<T>) => {
		try {
			const response = await http(props);
			const data = props.transformResponse ? props.transformResponse(response.data) : response.data;

			return data;
		} catch (e: any) {
			if (e.response.status === 401) {
				open();
			} else {
				setError(e);
			}

			throw e;
		}
	};

	const batchRequestHandler = async <T extends AxiosResponse<any>[]>(...requests: UseApiProps<T>[]): Promise<{ [K in keyof T]: T[K]['data'] }> => {
		try {
			const results = await Promise.all(requests.map((request) => http(request)));
			return results.map((res: any) => res.data) as any;
		} catch (e: any) {
			if (e.response.status === 401) {
				open();
			} else {
				setError(e);
			}

			throw e;
		}
	};

	return { error, requestHandler, batchRequestHandler };
};
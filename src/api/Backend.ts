import { useEffect, useState } from "react";
import { useUserState } from "../pages/UserContext";

export const BACKEND_URL = "http://localhost:5000";

export async function get(path: string, token: string) {
	const fullUrl = `${BACKEND_URL}${path}`;

	const response = await fetch(fullUrl, {
		method: 'GET',
		mode: 'cors',
		cache: 'no-cache',
		credentials: 'same-origin',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': token
		},
		redirect: 'follow',
		referrerPolicy: 'no-referrer'
	});

	return response;
};

export async function post(path: string, token: string, body: any) {
	const fullUrl = `${BACKEND_URL}${path}`;

	const response = await fetch(fullUrl, {
		method: body.id !== undefined && body.id !== null ? 'PATCH' : 'POST',
		mode: 'cors',
		cache: 'no-cache',
		credentials: 'same-origin',
		headers: {
			'Content-Type': 'application/json',
			'Authorization': token
		},
		redirect: 'follow',
		referrerPolicy: 'no-referrer',
        body: JSON.stringify(body)
	});

	return response;
};


export async function login(username: string, password: string) {
    const path = `http://localhost:5000/users?username=${username}&password=${password}`;

    const response = await fetch(path, {
        method: 'GET',
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer'
    });

    return response;
};


export async function createAccount(body: any) {
	const path = `http://localhost:5000/users`;
	
	const response = await fetch(path, {
		method: 'POST',
		mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(body)
	});
	return response;
};

export async function loadAllApartments(token: string) {
	return await get("/apartments", token);
}

export async function loadApartment(id: string, token: string) {
	return await get("/apartments/" + id, token)
}

export function useAsyncState<T>(path: string, defaultValue: T): [T, () => void] {
	const [state, setState] = useState<T>(defaultValue);
	const [timeStamp, setTimeStamp] = useState(new Date().getTime());
	const { user, setUser } = useUserState();

	useEffect(() => {
		async function load() {
			const res = await get(path, user.id);
			if (res.ok) {
				setState(await res.json());
			}
		};
		load()
	}, [user.id, timeStamp]);

	function reload() {
		setTimeStamp(new Date().getTime());
	}

	return [state, reload];
}
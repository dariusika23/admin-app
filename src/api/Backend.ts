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

export async function loadAllApartments(token: string) {
    return await get("/apartments", token);
}

export async function loadApartment(id: string, token: string) {
	return await get("/apartments/" + id, token)
}

export function useAsyncEffect<T>(path: string, defaultValue: T): [T] {
    const [state, setState] = useState<T>(defaultValue);
	const { user, setUser } = useUserState();

    useEffect(() => {
        async function load() {
            const res = await get(path, user.id);
            if (res.ok) {
                setState(await res.json());
            }
        };
        load()
    }, [user.id]);

	return [state];
}
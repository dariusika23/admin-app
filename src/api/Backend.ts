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
            "Authorization": token
		},
		redirect: 'follow',
		referrerPolicy: 'no-referrer'
	});

	return response;
};

export async function loadAllApartments(token: string) {
    return await get("/apartments", token);
}
import { useState } from "react";
import { Link } from "react-router-dom";

async function createAccount(username: string, password: string, email?: string, isAdminChecked?: boolean) {
	const path = `http://localhost:5000/users`;
	const body = {
		username,
		password,
		email,
		isAdminChecked,
		isUser: true
	}

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

}

export const RegisterView = () => {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isAdminChecked, setIsAdminChecked] = useState(false);
	const [message, setMessage] = useState("");

	const handleRegister = (e: any) => {
		e.preventDefault();
		const result = createAccount(username, password, email, isAdminChecked);
		result.then(response => {
			if (response.ok) {
				setMessage("Account created successfully");
			} else {
				setMessage("Failed to create account");
			}
		})
	}

	return (
		<div className="Auth-form-container">
			<form className="Auth-form">
				<div className="Auth-form-content">
					<h3 className="Auth-form-title">Register</h3>
					<div className="form-group mt-3">
						<label>Username</label>
						<input
							type="text"
							className="form-control mt-1"
							placeholder="Username"
							value={username}
							onChange={e => setUsername(e.target.value)}
						/>
					</div>
					<div className="form-group mt-3">
						<label>Email address</label>
						<input
							type="email"
							className="form-control mt-1"
							placeholder="Email Address"
							value={email}
							onChange={e => setEmail(e.target.value)}
						/>
					</div>
					<div className="form-group mt-3">
						<label>Password</label>
						<input
							type="password"
							className="form-control mt-1"
							placeholder="Password"
							value={password}
							onChange={e => setPassword(e.target.value)}
						/>
					</div>
					<div className="form-group mt-1">
						<input type="checkbox" className="mr-2" id="isAdminCheckbox" defaultChecked={isAdminChecked} onChange={() => setIsAdminChecked(!isAdminChecked)}/>
						<label htmlFor="isAdminCheckbox">Administrator?</label>
					</div>
					<div className="d-grid gap-2 mt-3">
						<button className="btn btn-primary" onClick={handleRegister}>
							Submit
						</button>
					</div>
					<p>{message}</p>
					<p className="text-center mt-2">
						Already registered? <Link to="/">Log-in!</Link>
					</p>
				</div>
			</form>
		</div>
	)
}
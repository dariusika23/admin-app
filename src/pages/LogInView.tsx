import { useState } from "react";
import { Link } from "react-router-dom";
import { useTokenState } from "./TokenContext";

async function login(username: string, password: string) {
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
}

export const LogInView = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    
    const { token, setToken } = useTokenState();

    const handleSubmit = async () => {
        const result = await login(username, password);
        if (!result.ok) {
            setMessage("Invalid username or password");
        }

        const body = await result.json();
        if (body.length > 0) {
            setMessage("User logged in");
            setToken(body[0].id);
        } else {
            setMessage("Invalid username or password");
        }
    }

    return (
        <>
            <div className="Auth-form-container">
                <form className="Auth-form">
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Sign In</h3>
                        <div className="form-group mt-3">
                            <label>Username</label>
                            <input
                                type="text"
                                className="form-control mt-1"
                                placeholder="Enter username"
                                value={username}
                                onChange={e => setUsername(e.target.value)}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control mt-1"
                                placeholder="Enter password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button className="btn btn-primary" onClick={handleSubmit}>
                                Submit
                            </button>
                        </div>
                        <p className="forgot-password text-right mt-2">
                            Not <Link to="/register">registered?</Link>
                        </p>
                        <p>{message}</p>
                    </div>
                </form>
            </div>
        </>
    )
}
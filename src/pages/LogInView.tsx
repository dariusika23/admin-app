import { useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../api/Backend";
import { useUserState } from "./UserContext";


export const LogInView = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    
    const { user, setUser } = useUserState();
    
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const result = await login(username, password);
        if (!result.ok) {
            setMessage("Invalid username or password");
        }

        const body = await result.json();
        if (body.length > 0) {
            setMessage("User logged in");
            setUser(body[0]);
            console.log(user);
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
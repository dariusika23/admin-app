import { useUserState } from "./UserContext";

export const LogOutButton = () => {
    const { setUser } = useUserState();
    const handleLogout = async () => {
        setUser({ id: "", username: "", email: "", password: "", isAdminChecked: false, isUser: false });
    }

    return <>
        <div className="row">
            <div className="container">
                <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
            </div>
        </div>
    </>
}
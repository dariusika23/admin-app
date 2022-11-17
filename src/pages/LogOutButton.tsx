import { useUserState } from "./UserContext";

export const LogOutButton = () => {
    const { setUser } = useUserState();
    const handleLogout = () => {
        setUser({ id: "", username: "", email: "", password: "", isAdminChecked: false, isActive: false });
    }

    return <>
        <a className="nav-link px-3" href="#" onClick={handleLogout}>Logout</a>
    </>
}
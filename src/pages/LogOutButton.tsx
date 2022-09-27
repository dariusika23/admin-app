import { useUserState } from "./UserContext";

export const LogOutButton = () => {
    const { setUser: setToken } = useUserState();
    const handleLogout = async () => {
        setToken("");
    }

    return <>
        <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
    </>
}
import { useTokenState } from "./TokenContext";

export const LogOutButton = () => {
    const { setToken } = useTokenState();
    const handleLogout = async () => {
        setToken("");
    }

    return <>
        <button onClick={handleLogout}>Logout</button>
    </>
}
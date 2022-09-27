import { useEffect } from "react";
import { Link } from "react-router-dom";
import { AdminView } from "./AdminView";
import { LogOutButton } from "./LogOutButton"
import { ProtectedView } from "./ProtectedView"
import { useUserState } from "./UserContext"
import { UserView } from "./UserView";

export const HomeView = () => {

    const { user } = useUserState();
    
    // useEffect(() => {
    //     async function load() {
    //         const response = await 
    //     }
    // })
    return (
        <>
            <ProtectedView adminOnly={false} userOnly={false}>
                <h1>Welcome</h1>
                <h3>My App</h3>
                {/* <Link to="/users/:userId">User</Link>
                <Link to="/admins/:adminId">Admin</Link> */}
                <LogOutButton />
            </ProtectedView>
            <ProtectedView adminOnly={true}>
                <AdminView />
            </ProtectedView>
            <ProtectedView userOnly={true}>
                <UserView />
            </ProtectedView>
        </>
    )
}
import { Dashboad } from "./Dashboard"
import { LogOutButton } from "./LogOutButton"
import { ProtectedView } from "./ProtectedView"
import { useUserState } from "./UserContext"


export const UserView = () => {
    const {user, setUser} = useUserState();

    return (
        <ProtectedView>
                <Dashboad userId={user.id} isAdmin={user.isAdminChecked} />
        </ProtectedView>
    )
}
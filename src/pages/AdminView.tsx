import { Dashboad } from "./Dashboard"
import { LogOutButton } from "./LogOutButton"
import { ProtectedAdminView } from "./ProtectedAdminView"
import { ProtectedView } from "./ProtectedView"
import { useUserState } from "./UserContext"

export const AdminView = () => {
    const {user, setUser} = useUserState();

    return (
        <ProtectedAdminView>
            <Dashboad userId={user.id} isAdmin={user.isAdminChecked} blockId={1} />
            <LogOutButton />
        </ProtectedAdminView>
    )
}
import { Dashboad } from "./Dashboard"
import { LogOutButton } from "./LogOutButton"
import { ProtectedAdminView } from "./ProtectedAdminView"
import { ProtectedView } from "./ProtectedView"
import { useUserState } from "./UserContext"

export const AdminView = () => {


    return (
        <ProtectedAdminView>
                <div className="row">
                    <div className="container">
                        <h1>Admin View</h1>
                    </div>
                    <Dashboad />
                </div>
                <LogOutButton />
        </ProtectedAdminView>
    )
}
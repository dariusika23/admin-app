import { Dashboad } from "./Dashboard"
import { LogOutButton } from "./LogOutButton"
import { ProtectedView } from "./ProtectedView"
import { useUserState } from "./UserContext"

export const AdminView = () => {
    // const { user } = useUserState();
    // const content = <ProtectedView>
    //     <div className="row">
    //         <div className="container">
    //             <h1>Admin View</h1>
    //         </div>
    //     </div>
    //     <div className="row">
    //         <div className="container">
    //             <LogOutButton />
    //         </div>
    //     </div>
    // </ProtectedView>;

    // const message = "You are not a valid admin."
    // const view = user.isAdminChecked ? content : message;

    return (
        <ProtectedView>
            {/* {view} */}
            <div className="row">
                <div className="container">
                    <h1>Admin View</h1>
                </div>
                <Dashboad />
            </div>
            <LogOutButton />
        </ProtectedView>
    )
}
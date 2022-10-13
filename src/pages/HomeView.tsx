import { ProtectedView } from "./ProtectedView"
import { useUserState } from "./UserContext"
import { UserView } from "./UserView";

export const HomeView = () => {

    const { user } = useUserState();
    const isAdmin = user.isAdminChecked;
    
    return (
        <>
        {/* {islogged ? isadmid ? <AdminView /> : <UserView /> : <LogInView />} */}
            <ProtectedView>
                <UserView />
            </ProtectedView>
            
        </>
    )
}
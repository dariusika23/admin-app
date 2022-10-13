import { ProtectedView } from "./ProtectedView"
import { useUserState } from "./UserContext"
import { UserView } from "./UserView";

export const HomeView = () => {

    
    return (
        <>
        {/* {islogged ? isadmid ? <AdminView /> : <UserView /> : <LogInView />} */}
            <ProtectedView>
                <UserView />
            </ProtectedView>
            
        </>
    )
}
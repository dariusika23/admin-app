import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { AdminView } from "./AdminView";
import { ProtectedView } from "./ProtectedView"
import { useUserState } from "./UserContext"
import { UserView } from "./UserView";

export const HomeView = () => {
    const { user, setUser } = useUserState();
    const defaultHomeView = user.isAdminChecked ? <AdminView /> : <UserView />;

    return (
        <>

                {defaultHomeView}

        </>
    )
}
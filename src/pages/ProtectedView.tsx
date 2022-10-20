import { DashboardView } from "../components/DashboardView";
import { LogInView } from "./LogInView";
import { useUserState } from "./UserContext";

export const ProtectedView = (props: any) => {
    const { user } = useUserState();
    const view = user.id === "" ? <LogInView /> : <DashboardView>{props.children}</DashboardView>;

    return <>
        {view}
    </>
}
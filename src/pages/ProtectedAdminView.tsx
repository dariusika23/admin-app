import { LogInView } from "./LogInView";
import { useUserState } from "./UserContext";

export const ProtectedAdminView = (props: any) => {
    const { user } = useUserState();
    const message = <><h2>You are not authorized to access this page. Please log into an admin account.</h2><LogInView /></>;
    
    const view = user.isAdminChecked === true ? props.children : message;

    return <>
        {view}
    </>
}
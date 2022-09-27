import { LogInView } from "./LogInView";
import { useUserState } from "./UserContext";
import { UserView } from "./UserView";

export const ProtectedView = (props: {adminOnly?: boolean, userOnly?: boolean, children: any}) => {
    const isAdmin = props.adminOnly;
    const isUser = props.userOnly;
    const { user } = useUserState();
    const view = user === "" ? <LogInView /> : props.children;
    return <>
        {view}
    </>
}
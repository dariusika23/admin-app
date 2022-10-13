import { LogInView } from "./LogInView";
import { useUserState } from "./UserContext";

export const ProtectedView = (props: any) => {
    const { user } = useUserState();
    
    const view = user.id === "" ? <LogInView /> : props.children;

    return <>
        {view}
    </>
}
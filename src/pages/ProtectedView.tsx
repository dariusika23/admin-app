import { LogInView } from "./LogInView";
import { useTokenState } from "./TokenContext";

export const ProtectedView = (props: any) => {
    const { token } = useTokenState();
    const view = token === "" ? <LogInView /> : props.children;
    return <>
        {view}
    </>
}
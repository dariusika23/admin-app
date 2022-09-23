import { LogOutButton } from "./LogOutButton"
import { ProtectedView } from "./ProtectedView"
import { useTokenState } from "./TokenContext"

export const HomeView = () => {

    const { token } = useTokenState();
    
    return (
        <>
            <ProtectedView>
                <h1>Welcome</h1>
                <h3>My App</h3>
                <LogOutButton />
            </ProtectedView>
        </>
    )
}
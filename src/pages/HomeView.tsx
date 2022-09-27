import { useEffect } from "react";
import { LogOutButton } from "./LogOutButton"
import { ProtectedView } from "./ProtectedView"
import { useTokenState } from "./TokenContext"

export const HomeView = () => {

    const { token } = useTokenState();
    
    // useEffect(() => {
    //     async function load() {
    //         const response = await 
    //     }
    // })
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
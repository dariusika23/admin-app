import { createContext, useContext, useState } from "react"
import { User, UserState } from "../api/Models";



export const UserContext = createContext<UserState>({} as any);
export const useUserState = () => useContext(UserContext);

export const UserProvider = (props: any) => {
    const defaultUser = {id:"", username: "", email: "", password: "", isAdminChecked: false, isActive: false};
    const [user, setUser] = useState(defaultUser);

    const userState = {
        user,
        setUser
    }

    return <UserContext.Provider value={userState}>
        {props.children}
    </UserContext.Provider>
}
import { createContext, useContext, useState } from "react"

interface UserObject {
    id: string,
    username: string,
    email: string,
    password: string,
    isAdminChecked: boolean,
    isUser: boolean
}

export interface UserState {
    user: UserObject;
    setUser: (user: UserObject) => void
}

export const UserContext = createContext<UserState>({} as any);
export const useUserState = () => useContext(UserContext);

export const UserProvider = (props: any) => {
    const defaultUser = {id:"", username: "", email: "", password: "", isAdminChecked: false, isUser: true};
    const [user, setUser] = useState(defaultUser);

    const userState = {
        user,
        setUser
    }

    return <UserContext.Provider value={userState}>
        {props.children}
    </UserContext.Provider>
}
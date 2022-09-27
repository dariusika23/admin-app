import { createContext, useContext, useState } from "react"

export interface UserState {
    user: string;
    setUser: (user: string) => void
}

export const UserContext = createContext<UserState>({} as any);
export const useUserState = () => useContext(UserContext);

export const UserProvider = (props: any) => {
    const [user, setUser] = useState("");

    const userState = {
        user,
        setUser
    }

    return <UserContext.Provider value={userState}>
        {props.children}
    </UserContext.Provider>
}
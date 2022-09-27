import { LogOutButton } from "./LogOutButton"

export const AdminView = () => {
    return (
        <>
            <div className="row">
                <div className="container">
                    <h1>Admin View</h1>
                </div>
            </div>
            <div className="row">
                <div className="container">
                    <LogOutButton />
                </div>
            </div>
        </>
    )
}
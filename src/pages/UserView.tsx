import { LogOutButton } from "./LogOutButton"

export const UserView = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h3>User</h3>
                    </div>
                    <div className="col">
                        <p>19.02.2099</p>
                    </div>
                </div>
                <div className="row">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Handle</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                            </tr>
                        </tbody>
                    </table>
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
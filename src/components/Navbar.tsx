import { Link } from "react-router-dom"
import { useUserState } from "../pages/UserContext";

export const Navbar = () => {    
    const { user } = useUserState();    
    const adminDashboardLink = user.isAdminChecked ? <><li className="nav-item"><Link to={"/admins/" + user.id} className="nav-link">Admin Dashboard</Link></li></> : null;

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/" className="navbar-brand">ADMINO</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        {adminDashboardLink}
                        {/* <li className="nav-item">
                            <Link to={"/users/" + token } className="nav-link">User View</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={"/admins/" + token } className="nav-link">Admin View</Link>
                        </li> */}
                        {/* <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown link
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li> */}
                    </ul>
                </div>
            </nav>
        </>
    )
}
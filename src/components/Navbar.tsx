import { Link } from "react-router-dom"
import { useAsyncState } from "../api/Backend";
import { Tennant } from "../api/Models";
import { useUserState } from "../pages/UserContext";

export const Navbar = () => {    
    const { user } = useUserState();
    const adminDashboardLink = user.isAdminChecked ? <><li className="nav-item"><Link to={"/admins/" + user.id} className="nav-link">Admin Dashboard</Link></li></> : null;

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link to="/" className="navbar-brand">ADMINO</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fa-regular fa-bars"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item active">
                            <Link to="/" className="nav-link">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        {adminDashboardLink}
                    </ul>
                </div>
            </nav>
        </>
    )
}
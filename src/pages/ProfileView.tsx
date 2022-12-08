import { patchOrPost, useAsyncState } from "../api/Backend"
import { Apartment, Tennant, User } from "../api/Models"
import { ApartmentCardView } from "../components/ApartmentCardView"
import { ProtectedView } from "./ProtectedView"
import { useUserState } from "./UserContext"
import { UserDetailsSection } from "../components/UserDetailsSection"
import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { ProfileForm } from "../components/ProfileForm"

export const ProfileView = () => {
    const [apartments, reloadApartments] = useAsyncState<Apartment[]>("/apartment", []);
    const { user, setUser } = useUserState();
    const [selectedUser, setSelectedUser] = useState(user);
    const [selectedId, setSelectedApId] = useState<number>(0);
    const path = useLocation().pathname.substring(9);
    const [newUser] = useAsyncState<User>(`/users/${path}`, { id: "", username: "", email: "", password: "", isActive: false, isAdminChecked: false });
    const [userNice, reloadUserNice] = useAsyncState<Tennant>(`/tenant/${newUser?.tennantId}`, { id: 0, username: "", firstName: "", lastName: "", photoUrl: "" });
    const tennantsApartments: Apartment[] = apartments.filter(ap => ap.ownerId === user.tennantId);
    const cards = tennantsApartments.map(el => <ApartmentCardView key={el.id} apartment={el} />);

    useEffect(() => {
        reloadUserNice();
    }, [newUser])

    const handleDeactivate = (e: any) => {
        e.preventDefault();
        patchOrPost(`/users/${user.id}`, user.id, { id: user.id, isActive: false });
        setUser({ ...user, id: "" });
    }

    return (
        <ProtectedView>
            <div className="container py-5">
                <div className="row">
                    <div className="col">
                        <nav aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-4">
                            <ol className="breadcrumb mb-0">
                                <li className="breadcrumb-item"><Link to='/'>Home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">User Profile</li>
                            </ol>
                        </nav>
                    </div>
                </div>

                <div className="row">
                    <div className="col-lg-4">
                        <div className="card mb-4">
                            <div className="card-body text-center">
                                <img src={userNice?.photoUrl} alt="avatar"
                                    className="rounded-circle img-fluid" style={{ width: "150px" }} />
                                <h5 className="my-3">{userNice?.firstName} {userNice?.lastName}</h5>
                                <p className="text-muted mb-1">{user.email}</p>
                                <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
                                <div className="d-flex justify-content-center mb-2">
                                    <button type="button" className="btn btn-primary mr-2" data-toggle="modal" data-target="#exampleModal">Edit Profile</button>
                                    <button type="button" className="btn btn-outline-danger ms-1" onClick={handleDeactivate}>Deactivate Account</button>
                                </div>
                                <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div className="modal-dialog" role="document">
                                        <div className="modal-content">
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel">Edit Profile</h5>
                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true">&times;</span>
                                                </button>
                                            </div>
                                            <div className="modal-body">
                                                <ProfileForm onNewEvent={reloadUserNice} user={userNice} />
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="card mb-4">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0">First Name</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">{userNice.firstName}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0">Last Name</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">{userNice.lastName}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="row">
                                    <div className="col-sm-3">
                                        <p className="mb-0">Email</p>
                                    </div>
                                    <div className="col-sm-9">
                                        <p className="text-muted mb-0">{user.email}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <div className="row">
                            <div className="col-md-6">
                                <div className="card mb-4 mb-md-0">
                                    <div className="card-body">
                                        <p className="mb-4"><span className="text-primary font-italic me-1">assigment</span> Project Status
                                        </p>
                                        <p className="mb-1 user-profile">Web Design</p>
                                        <div className="progress rounded" style={{height: "5px"}}>
                                            <div className="progress-bar" role="progressbar" style={{width: "80%"}} aria-valuenow={80}
                                                aria-valuemin={0} aria-valuemax={100}></div>
                                        </div>
                                        <p className="mt-4 mb-1 user-profile">Website Markup</p>
                                        <div className="progress rounded" style={{height: "5px"}}>
                                            <div className="progress-bar" role="progressbar" style={{width: "72%"}} aria-valuenow={72}
                                                aria-valuemin={0} aria-valuemax={100}></div>
                                        </div>
                                        <p className="mt-4 mb-1 user-profile">One Page</p>
                                        <div className="progress rounded" style={{height: "5px"}}>
                                            <div className="progress-bar" role="progressbar" style={{width: "89%"}} aria-valuenow={89}
                                                aria-valuemin={0} aria-valuemax={100}></div>
                                        </div>
                                        <p className="mt-4 mb-1 user-profile">Mobile Template</p>
                                        <div className="progress rounded" style={{height: "5px"}}>
                                            <div className="progress-bar" role="progressbar" style={{width: "55%"}} aria-valuenow={55}
                                                aria-valuemin={0} aria-valuemax={100}></div>
                                        </div>
                                        <p className="mt-4 mb-1 user-profile">Backend API</p>
                                        <div className="progress rounded mb-2" style={{height: "5px"}}>
                                            <div className="progress-bar" role="progressbar" style={{width: "66%"}} aria-valuenow={66}
                                                aria-valuemin={0} aria-valuemax={100}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="card mb-4 mb-md-0">
                                    <div className="card-body">
                                        <p className="mb-4"><span className="text-primary font-italic me-1">assigment</span> Project Status
                                        </p>
                                        <p className="mb-1 user-profile">Web Design</p>
                                        <div className="progress rounded" style={{height: "5px"}}>
                                            <div className="progress-bar" role="progressbar" style={{width: "80%"}} aria-valuenow={80}
                                                aria-valuemin={0} aria-valuemax={100}></div>
                                        </div>
                                        <p className="mt-4 mb-1 user-profile">Website Markup</p>
                                        <div className="progress rounded" style={{height: "5px"}}>
                                            <div className="progress-bar" role="progressbar" style={{width: "72%"}} aria-valuenow={72}
                                                aria-valuemin={0} aria-valuemax={100}></div>
                                        </div>
                                        <p className="mt-4 mb-1 user-profile">One Page</p>
                                        <div className="progress rounded" style={{height: "5px"}}>
                                            <div className="progress-bar" role="progressbar" style={{width: "89%"}} aria-valuenow={89}
                                                aria-valuemin={0} aria-valuemax={100}></div>
                                        </div>
                                        <p className="mt-4 mb-1 user-profile">Mobile Template</p>
                                        <div className="progress rounded" style={{height: "5px"}}>
                                            <div className="progress-bar" role="progressbar" style={{width: "55%"}} aria-valuenow={55}
                                                aria-valuemin={0} aria-valuemax={100}></div>
                                        </div>
                                        <p className="mt-4 mb-1 user-profile">Backend API</p>
                                        <div className="progress rounded mb-2" style={{height: "5px"}}>
                                            <div className="progress-bar" role="progressbar" style={{width: "66%"}} aria-valuenow={66}
                                                aria-valuemin={0} aria-valuemax={100}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </ProtectedView>

    )
}
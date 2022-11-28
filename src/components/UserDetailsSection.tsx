import { Link } from "react-router-dom";
import { post } from "../api/Backend";
import { Apartment, Tennant, TennantAssociation, User } from "../api/Models";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

export const UserDetailsSection = (props: { user: User, updateUser: (u: User) => void, userNice?: Tennant, tennantsApartments?: Apartment[], block?: TennantAssociation }) => {
    
    const userNice = props.userNice;
    const apartments = props.tennantsApartments;
    const block = props.block;
    const user = props.user;

    const handleDeactivate = (e:any) => {
        e.preventDefault();
        user.isActive = false;
        props.updateUser(user);
        console.log(user.isActive);
        post(`/users/${user.id}`, user.id, user);
        console.log(user);
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const
            },
            title: {
                display: true,
                text: 'Sumar cheltuieli apartamente'
            }
        }
    };

    const labels = apartments?.slice(0, apartments.length).map(ap => ap.name);
    const data = {
        labels,
        datasets: [
            {
                label: 'Cold Water',
                data: apartments?.map(ap => ap.coldwater1),
                backgroundColor: 'rgba(255, 99, 132, 0.5)'
            },
            {
                label: 'Hot Water',
                data: apartments?.map(ap => ap.hotwater1),
                backgroundColor: 'rgba(53, 162, 235, 0.5)'
            }
        ]
    }


    return (
        <>
            {/* <div classNameName="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h2 classNameName="h2">{userNice?.firstName} {userNice?.lastName}</h2>
                <p>User Summary Dashboard</p>
                <div classNameName="btn-toolbar mb-2 mb-md-0">
                    <div classNameName="btn-group me-2">
                        <button type="button" classNameName="btn btn-sm btn-outline-secondary">Share</button>
                        <button type="button" classNameName="btn btn-sm btn-outline-secondary">Export</button>
                    </div>
                    <button type="button" classNameName="btn btn-sm btn-outline-secondary dropdown-toggle">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" classNameName="feather feather-calendar align-text-bottom" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                        This week
                    </button>
                </div>
            </div> */}
            <div className="row d-flex justify-content-left align-items-top py-5">
                <div className="col col-md-9 col-lg-7 col-xl-5" id="userCard">
                    <div className="card">
                        <div className="card-body p-4">
                            <div className="d-flex text-black">
                                <div className="flex-shrink-0 mr-3">
                                    <img src={userNice?.photoUrl} alt="avatar" className="rounded-circle img-fluid" style={{ width: "150px" }} />
                                </div>
                                <div className="flex-grow-1 ms-3">
                                    <h5 className="mb-1">{userNice?.firstName} {userNice?.lastName}</h5>
                                    <p className="mb-2 pb-1" style={{ color: "#2b2a2a" }}>{userNice?.username}</p>
                                    <div className="d-flex justify-content-start rounded-3 p-2 mb-2"
                                        style={{ backgroundColor: "#efefef" }}>
                                        <div>
                                            <p className="small text-muted mb-1">Address</p>
                                            <p className="mb-0">{block?.address}</p>
                                        </div>
                                        <div className="px-3 ml-3">
                                            <p className="small text-muted mb-1">Apartments</p>
                                            <p className="mb-0">{apartments?.at(0)?.id}</p>
                                        </div>
                                        {/* <div>
                                                    <p className="small text-muted mb-1">Rating</p>
                                                    <p className="mb-0">8.5</p>
                                                </div> */}
                                    </div>
                                    <div className="d-flex pt-1">
                                        <Link type="button" className="btn btn-primary me-1 flex-grow-1 mr-2" to="/profile">View Profile</Link>
                                        <button type="button" className="btn btn-outline-danger flex-grow-1" onClick={handleDeactivate}>Deactivate</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col" id="apartmentCard">
                    <div className="card">
                        <div className="card-body p-4">
                            <Bar options={options} data={data} />
                        </div>
                    </div>
                </div>
            </div>
            {/* <section className="vh-100" style={{backgroundColor: "#9de2ff"}}>
            </section> */}
        </>
    )
}
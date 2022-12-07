import { useRef, useState } from "react"
import { Link } from "react-router-dom"
import { get, useAsyncState } from "../api/Backend";
import { Apartment, Tennant, TennantAssociation } from "../api/Models";
import { useUserState } from "../pages/UserContext";
import { ApartmentCardMap } from "./ApartmentCardMap";


export const ApartmentCardView = (props: {apartment: Apartment}) => {
    const { user } = useUserState();
    const [isClosed, setIsClosed] = useState("closed");
    const apartment = props.apartment;
    const apartmentPath = `/apartment/${apartment.id}`
    const [owner] = useAsyncState<Tennant>(`/tenant/${user.tennantId}`, {id: 0, username: "", firstName: "", lastName: "", photoUrl: ""});
    const [tennantAsocs] = useAsyncState<TennantAssociation[]>("/tenantAssociation", []);
    const block = tennantAsocs.find(bl => bl.id === apartment.tenantAssociationId);
    const handleClick = () => {
        isClosed != "closed" ? setIsClosed("closed") : setIsClosed("");
    }

    return (
        <>
            
                <section className="col my-5" style={{ maxWidth: "23rem" }}>
                    <div className="card map-card">
                        <div id="map-container-google-1" className="z-depth-1-half map-container" style={{ height: "500px" }}>
                            <ApartmentCardMap lat={46.171376} lng={21.351382} zoom={16}/>
                        </div>
                        <div className={isClosed + " card-body px-0"}>
                            {/* <div className="card-body px-0 closed" ref={currEl}> */}
                            <div className="button px-2 mt-3">
                                <a className="btn btn-floating btn-lg living-coral text-white float-end" style={{ marginRight: ".75rem", position: "absolute", right: "0" }} onClick={handleClick}><i className="fas fa-building-user"></i></a>
                            </div>
                            <div className="bg-white px-4 pb-4 pt-3-5">
                                <h5 className="card-title h5 living-coral-text">{apartment.name}</h5>
                                <div className="d-flex justify-content-between living-coral-text">
                                    <h6 className="card-subtitle font-weight-light">{block?.name}</h6>
                                    <h6 className="font-small font-weight-light mt-n1">{owner?.firstName} {owner?.lastName}</h6>
                                </div>
                                <hr />
                                <div className="d-flex justify-content-between pt-2 mt-1 text-center text-uppercase living-coral-text">
                                    <div>

                                        <a href="" className="mb-0 living-coral-text">
                                            <i className="fas fa-file-invoice fa-lg mb-3"></i><br />
                                            Vezi Factura
                                        </a>
                                    </div>
                                    {/* <div>
                                        <i className="fas fa-cat fa-lg mb-3"></i>
                                        <p className="mb-0">Love</p>
                                    </div> */}
                                    <div>
                                        <Link to={apartmentPath} className="mb-0 living-coral-text">
                                            <i className="fas fa-pen-to-square fa-lg mb-3"></i><br />
                                            View Apartment
                                        </Link>
                                    </div>
                                </div>
                                <hr />
                                <table className="table table-borderless">
                                    <tbody>
                                        <tr>
                                            <th scope="row" className="px-0 pb-3 pt-2">
                                                <i className="fas fa-map-marker-alt living-coral-text"></i>
                                            </th>
                                            <td className="pb-3 pt-2">{block?.address}</td>
                                        </tr>
                                        <tr className="mt-2">
                                            <th scope="row" className="px-0 pb-3 pt-2">
                                                <i className="fas fa-file-invoice living-coral-text"></i>
                                            </th>
                                            <td className="pb-3 pt-2">{apartment.total}</td>
                                        </tr>
                                        <tr className="mt-2">
                                            <th scope="row" className="px-0 pb-3 pt-2">
                                                <i className="fas fa-pen-to-square living-coral-text"></i>
                                            </th>
                                            <td className="pb-3 pt-2">{apartment.note}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>
        </>
    )
}
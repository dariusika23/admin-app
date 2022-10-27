import { useRef, useState } from "react"
import { Link } from "react-router-dom"
import { get, useAsyncState } from "../api/Backend";
import { Apartment, Tennant, TennantAssociation } from "../api/Models";
import { useUserState } from "../pages/UserContext";
import { ApartmentCardView } from "./ApartmentCardView";


export const ApartmentView = () => {
    const {user} = useUserState();
    const [isClosed, setIsClosed] = useState("");
    const [apartment] = useAsyncState<Apartment>("/apartment/1", {id: 0, tenantAssociationId: 0, name: "", ownerId: 0, personNumber: 0});
    const [owners] = useAsyncState<Tennant[]>("/tenant", []);
    const [tennantAsocs] = useAsyncState<TennantAssociation[]>("/tenantAssociation", []);
    const owner = owners.find(ow => ow.id === apartment.ownerId);
    const block = tennantAsocs.find(bl => bl.id === apartment.tenantAssociationId);
    // const currEl = useRef(null);
    const handleClick = () => {
        // currEl != null ? currEl.current.classList.toggle('closed') : null;
        isClosed != "closed" ? setIsClosed("closed") : setIsClosed("");
    }
    return (
        <>
            <div className="row">
                <section className="col my-5" style={{maxWidth: "23rem"}}>
                    <div className="card map-card">
                        <div id="map-container-google-1" className="z-depth-1-half map-container" style={{height: "500px"}}>
                            
                            <ApartmentCardView />
                        </div>
                        <div className={isClosed + " card-body px-0"}>
                        {/* <div className="card-body px-0 closed" ref={currEl}> */}
                            <div className="button px-2 mt-3">
                                <a className="btn btn-floating btn-lg living-coral text-white float-end" style={{marginRight: ".75rem", position: "absolute", right: "0"}} onClick={handleClick}><i className="fas fa-building-user"></i></a>
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
                                            <i className="fas fa-phone fa-lg mb-3"></i>
                                            <p className="mb-0">Call</p>
                                        </div>
                                        <div>
                                            <i className="fas fa-cat fa-lg mb-3"></i>
                                            <p className="mb-0">Love</p>
                                        </div>
                                        <div>
                                            <i className="far fa-grin-beam-sweat fa-lg mb-3"></i>
                                            <p className="mb-0">Smile</p>
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
                                                    <td className="pb-3 pt-2"><span className="deep-purple-text me-2"> Closed</span> Opens 10 AM</td>
                                                </tr>
                                                <tr className="mt-2">
                                                    <th scope="row" className="px-0 pb-3 pt-2">
                                                        <i className="fas fa-cloud-moon living-coral-text"></i>
                                                    </th>
                                                    <td className="pb-3 pt-2">Sunny weather tomorrow</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                            </div>
                        </div>
                </section>
            </div>
        </>
    )
}
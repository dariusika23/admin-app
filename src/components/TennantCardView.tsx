import { Link } from "react-router-dom"
import { useAsyncState } from "../api/Backend";
import { Apartment, Tennant, User } from "../api/Models";

export const TennantCardView = (props: {tenant: Tennant, users: User[], apartments: Apartment[]}) => {
    // const imgUrl = "https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg"; 
    const user = props.users.find(u => u.tennantId === props.tenant.id);
    const allApartments = props.apartments.filter(ap => ap.ownerId === props.tenant.id);
    const apartments = allApartments.map(ap => <li className="list-group-item"><Link to={'/apartment/' + ap?.id} className="card-link">{ap?.name}</Link></li>)
    const imgUrl = props.tenant.photoUrl;

    return (
        <>
                <div className="tennant-card card">
                    <img src={imgUrl} alt="Card image cap" className="card-img-top" />
                    {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1381.5485483767966!2d21.35078225828469!3d46.16872285230885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474599761dc594fd%3A0xb204ef3489c80fe5!2sMic%C4%83laca%2C%20Arad%20317405!5e0!3m2!1sro!2sro!4v1666867505978!5m2!1sro!2sro" width="100%" height="250" style={{border: 0}} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> */}
                    <div className="card-body">
                        <h5 className="card-title">{props.tenant.firstName} {props.tenant.lastName}</h5>
                        <p className="card-text">{user?.email}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        {apartments}
                    </ul>
                    <div className="d-flex">
                        <Link to={"/users/" + user?.id} className="btn btn-primary flex-grow-1">View</Link>

                    </div>
                        {/* <Link to="" className="btn btn-danger">Deactivate</Link> */}
                </div>
        </>
    )
}
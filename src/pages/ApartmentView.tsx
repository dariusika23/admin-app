import { useAsyncState } from "../api/Backend"
import { Apartment, Tennant, Units } from "../api/Models"
import { UserForm } from "../components/UserForm"
import { ProtectedView } from "./ProtectedView"
import { useUserState } from "./UserContext"
import { useLocation } from "react-router-dom"

export const ApartmentView = () => {
    const { user } = useUserState();
    const [unit] = useAsyncState<Units>("/units", { mWh: 0, mc: 0 });
    const [tenants] = useAsyncState<Tennant[]>("/tenant", []);
    const path = useLocation().pathname;
    const [apartment, reloadApartment] = useAsyncState<Apartment>(path, { id: 0 });
    const userNice = tenants.find(tn => user.tennantId === tn.id);
    console.log(apartment);

    return (
        <ProtectedView>
            <div className="d-flex flex-column justify-content-between flex-wrap flex-md-nowrap align-items-left pt-3 pb-2 mb-3 border-bottom">
                <h2 className="h2">{apartment.name}</h2>
                <p>Total to pay: {apartment.total}</p>
            </div>
            <UserForm onNewEvent={() => reloadApartment()} apartment={apartment} />
            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th>no</th>
                            <th>ColdW1</th>
                            <th>ColdW2</th>
                            <th>HotW1</th>
                            <th>HotW2</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{apartment.id}</td>
                            <td>{apartment.coldwater1}</td>
                            <td>{apartment.coldwater2}</td>
                            <td>{apartment.hotwater1}</td>
                            <td>{apartment.hotwater2}</td>
                            <td>{apartment.date}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </ProtectedView>

    )
}
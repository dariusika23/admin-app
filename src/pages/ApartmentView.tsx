import { useAsyncState } from "../api/Backend"
import { Apartment, Tennant, Units } from "../api/Models"
import { UserForm } from "../components/UserForm"
import { ProtectedView } from "./ProtectedView"
import { useUserState } from "./UserContext"
import { useLocation } from "react-router-dom"
import { Card } from "../components/Card"

export const ApartmentView = () => {
    const { user } = useUserState();
    const [unit] = useAsyncState<Units>("/units", { mWh: 0, mc: 0 });
    const [userNice] = useAsyncState<Tennant>(`/tenant/${user.tennantId}`, {id: 0, username: "", firstName: "", lastName: "", photoUrl: ""});
    const path = useLocation().pathname;
    const [apartment, reloadApartment] = useAsyncState<Apartment>(path, { id: 0, tenantAssociationId: 0 });
    console.log(apartment);

    return (
        <ProtectedView>
            {/* <div className="d-flex flex-column justify-content-between flex-wrap flex-md-nowrap align-items-left pt-3 pb-2 mb-3 border-bottom">
                <h2 className="h2">{apartment.name}</h2>
                <p>Total to pay: {apartment.total}</p>
            </div> */}

            <div className="row my-3">
                <Card className="col-xs-12 col-4">
                    <div className="d-flex align-items-center mb-2">
                        <i className="fas fa-file-invoice living-coral round"></i>
                        <h5>{apartment.name}</h5>
                    </div>
                    <h3 className="text-center font-weight-bold">Total to pay: {apartment.total}</h3>
                </Card>
            </div>
            <div className="row my-3">
                <Card className="col-xs-12 col-6">
                    <UserForm onNewEvent={() => reloadApartment()} apartment={apartment} />
                </Card>
                <Card className="col-xs-12 col-6">
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
                </Card>
            </div>

        </ProtectedView>

    )
}
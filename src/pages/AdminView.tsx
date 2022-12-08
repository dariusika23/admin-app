import { useAsyncState } from "../api/Backend"
import { Apartment, Tennant, TennantAssociation, User } from "../api/Models"
import { ApartmentForm } from "../components/ApartmentForm"
import { Association } from "../components/Association"
import { Card } from "../components/Card"
import { TennantAsocForm } from "../components/TennantAssocForm"
import { TennantCardView } from "../components/TennantCardView"
import { ProtectedView } from "./ProtectedView"

export const AdminView = () => {

    const [associations, reloadAssociations] = useAsyncState<TennantAssociation[]>("/tenantAssociation", []);
    const [apartments, reloadApartments] = useAsyncState<Apartment[]>("/apartment", []);
    const [tenants, reloadTenants] = useAsyncState<Tennant[]>("/tenant", []);
    const [users, reloadUsers] = useAsyncState<User[]>("/users", []);
    const tenCards = tenants.map(t => <TennantCardView tenant={t} users={users} apartments={apartments} />);



    return (
        <ProtectedView>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap pt-3 pb-2 mb-3 border-bottom">
                <Card className="col-xs-12 col-md-3 mb-3">
                    <h2 className="h2">Admin Dashboard</h2>
                </Card>
            </div>
            <div className="row">
                <div className="col-xs-12 col-md-6 mb-3" id="accordion">
                    <div className="card">
                        <div className="card-header" id="headingOne">
                            <h5 className="mb-0">
                                <button className="btn btn-link font-weight-bold" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Add New Tennant Association
                                </button>
                            </h5>
                        </div>

                        <div id="collapseOne" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                            <div className="card-body">
                                <TennantAsocForm onNewEvent={() => reloadAssociations()} />
                                <Association associations={associations} apartments={apartments} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 col-md-6 mb-3" id="accordion">
                    <div className="card">
                        <div className="card-header" id="headingOne">
                            <h5 className="mb-0">
                                <button className="btn btn-link font-weight-bold" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                    Add New Apartment
                                </button>
                            </h5>
                        </div>

                        <div id="collapseTwo" className="collapse" aria-labelledby="headingOne" data-parent="#accordion">
                            <div className="card-body">
                                <ApartmentForm onNewEvent={() => reloadApartments()} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <Modal onNewEvent={() => reloadApartments()} /> */}



            {/* <ApartmentsView apartments={apartments} /> */}

            {/* <UserForm onNewEvent={() => reloadApartments()} /> */}

            <div className="card-deck mb-3 ml-1">
                {tenCards}
            </div>


            {/* <ApartmentView /> */}
            {/* new comment */}

        </ProtectedView>
    )
}
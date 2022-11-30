import { useAsyncState } from "../api/Backend"
import { Apartment, TennantAssociation } from "../api/Models"
import { Association } from "../components/Association"
import { TennantAsocForm } from "../components/TennantAssocForm"
import { TennantCardView } from "../components/TennantCardView"
import { ProtectedView } from "./ProtectedView"

export const AdminView = () => {

    const [associations, reloadAssociations] = useAsyncState<TennantAssociation[]>("/tenantAssociation", []);
    const [apartments, reloadApartments] = useAsyncState<Apartment[]>("/apartment", []);

    

    return (
        <ProtectedView>
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h2 className="h2">Admin Dashboard</h2>
            </div>

            {/* <Modal onNewEvent={() => reloadApartments()} /> */}

            <TennantAsocForm onNewEvent={() => reloadAssociations()} />

            <Association associations={associations} />

            {/* <ApartmentsView apartments={apartments} /> */}

            {/* <UserForm onNewEvent={() => reloadApartments()} /> */}

            <TennantCardView />


            {/* <ApartmentView /> */}
            {/* new comment */}

        </ProtectedView>
    )
}
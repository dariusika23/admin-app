import { useAsyncState } from "../api/Backend"
import { Apartment, Tennant, TennantAssociation, User } from "../api/Models"
import { ApartmentCardView } from "../components/ApartmentCardView"
import { ProtectedView } from "./ProtectedView"
import { useUserState } from "./UserContext"
import { UserDetailsSection } from "../components/UserDetailsSection"
import { useEffect, useState } from "react"

export const UserView = () => {
    const [apartments, reloadApartments] = useAsyncState<Apartment[]>("/apartment", []);
    const { user, setUser } = useUserState();
    const [selectedId, setSelectedApId] = useState<number>(0);
    const [tenants] = useAsyncState<Tennant[]>("/tenant", []);
    const [tennantAsocs] = useAsyncState<TennantAssociation[]>("/tenantAssociation", []);
    const userNice = tenants.find(tn => user.tennantId === tn.id);
    const tennantsApartments: Apartment[] = apartments.filter(ap => ap.ownerId === user.tennantId);
    const block = tennantAsocs.find(bl => bl.id === tennantsApartments[0].tenantAssociationId);
    const cards = tennantsApartments.map(el => <ApartmentCardView key={el.id} apartment={el}/>);


    return (
        <ProtectedView>
            <UserDetailsSection user={user} updateUser={setUser} userNice={userNice} tennantsApartments={tennantsApartments} block={block}/>
            <div className="row">
                {cards}
            </div>
            {/* <h2>Your expenses</h2>
            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th scope="col">Block No</th>
                            <th scope="col">User No</th>
                            <th scope="col">UserName</th>
                            <th scope="col">Person No</th>
                            <th scope="col">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <ApartmentCardView apartmentId={1}/>
                    </tbody>
                </table>
            </div> */}
        </ProtectedView>

    )
}
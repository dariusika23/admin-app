import { useAsyncState } from "../api/Backend"
import { Apartment, Tennant, TennantAssociation, User } from "../api/Models"
import { ApartmentCardView } from "../components/ApartmentCardView"
import { ProtectedView } from "./ProtectedView"
import { useUserState } from "./UserContext"
import { UserDetailsSection } from "../components/UserDetailsSection"
import { useEffect, useState } from "react"

export const UserView = () => {
    const { user, setUser } = useUserState();
    const [tennantAsocs] = useAsyncState<TennantAssociation[]>("/tenantAssociation", []);
    const [userNice] = useAsyncState<Tennant>(`/tenant/${user.tennantId}`, { id: 0, username: "", firstName: "", lastName: "", photoUrl: "" });
    const [tennantsApartments] = useAsyncState<Apartment[]>(`/apartment?ownerId=${user.tennantId}`, []);
    const block = tennantAsocs.find(b => b.id === tennantsApartments[0]?.tenantAssociationId);
    const cards = tennantsApartments.map(el => <ApartmentCardView key={el.id} apartment={el} />);


    return (
        <ProtectedView>
            <div className="row d-flex align-items-center py-3 card-row">                
                    <i className="fas fa-building-user turquoise round py-3"></i>                
                    <h5 className="font-weight-bold">{block?.name}</h5>                
            </div>
            <UserDetailsSection user={user} updateUser={setUser} userNice={userNice} tennantsApartments={tennantsApartments} block={block} />
            <div className="row">
                {cards}
            </div>
        </ProtectedView>

    )
}
import { useEffect, useState } from "react"
import { patchOrPost, useAsyncState } from "../api/Backend";
import { Tennant, TennantAssociation } from "../api/Models";
import { useUserState } from "../pages/UserContext";

export const ApartmentForm = (props: { onNewEvent: () => void }) => {
    const { user } = useUserState();
    const [owners, reloadOwners] = useAsyncState<Tennant[]>("/tenant", []);
    const [apName, setApName] = useState("");
    const [ownerId, setOwnerId] = useState<number>(-1);
    const [tennantAssocId, setTennantAssocId] = useState(-1);
    const [allAssociations, reloadAllAssociations] = useAsyncState<TennantAssociation[]>("/tenantAssociation", []);

    useEffect(() => {
        if(owners.length > 0) {
            setOwnerId(owners[0].id);
            console.log(ownerId);
        }
    }, [owners]);

    const handleAdd = (e: any) => {
        e.preventDefault();
        patchOrPost('/apartment', user.id, { name: apName, ownerId: ownerId, tenantAssociationId: tennantAssocId });
        setApName("");
        setTennantAssocId(-1);
        props.onNewEvent();
    }

    const ownersList = owners.map(it => <option key={it.id} value={it.id}>{it.firstName} {it.lastName}</option>);
    const associations = allAssociations.map(it => <option key={it.id} value={it.id}>{it.name} - {it.address}</option>)

    return (
        <>
            <div className="row g-5 mb-5">
                <div className="col">
                    <h4 className="mb-3">Add new apartment</h4>
                    <form action="">
                        <div className="row">
                            <div className="col-xs-12 col-sm-4">
                                <label htmlFor="firstName" className="form-label">Name</label>
                                <input type="text" name="firstName" id="firstName" className="form-control" value={apName} onChange={e => setApName(e.target.value)} />
                            </div>
                            <div className="col-xs-12 col-sm-4">
                                <label htmlFor="" className="form-label">Select owner</label>
                                <select id="ownerSelect" className="form-select" aria-label="Default select example" value={ownerId} onChange={e => setOwnerId(parseInt(e.target.value))}>                                    
                                    {ownersList}
                                </select>
                            </div>
                            <div className="col-xs-12 col-sm-4">
                                <label htmlFor="" className="form-label">Select Tenant Association</label>
                                <select id="ownerSelect" className="form-select" aria-label="Default select example" value={tennantAssocId} onChange={e => setTennantAssocId(parseInt(e.target.value))}>                                    
                                    {associations}
                                </select>
                            </div>
                            <div className="col-xs-12 col mt-4">
                                <button className="btn btn-primary" onClick={handleAdd}>Add Apartment</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
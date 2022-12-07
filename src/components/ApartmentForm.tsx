import { useEffect, useState } from "react"
import { patchOrPost, useAsyncState } from "../api/Backend";
import { Tennant } from "../api/Models";
import { useUserState } from "../pages/UserContext";

export const ApartmentForm = (props: { onNewEvent: () => void }) => {
    const { user } = useUserState();
    const [owners, reloadOwners] = useAsyncState<Tennant[]>("/tenant", []);
    const [apName, setApName] = useState("");
    const [ownerId, setOwnerId] = useState<number>(-1);
    const [tennantAssocId, setTennantAssocId] = useState("");

    useEffect(() => {
        if(owners.length > 0) {
            setOwnerId(owners[0].id);
            console.log(ownerId);
        }
    }, [owners]);

    const handleAdd = (e: any) => {
        e.preventDefault();
        patchOrPost('/apartment', user.id, { name: apName, ownerId: ownerId });
        setApName("");
        setTennantAssocId("");
        props.onNewEvent();
    }

    const ownersList = owners.map(it => <option key={it.id} value={it.id}>{it.firstName} {it.lastName}</option>)

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
                            {/* <div className="col-xs-12 col-sm-4">
                                <label htmlFor="" className="form-label">Select tennant association</label>
                                <select id="assocSelect" className="form-select" aria-label="Default select example">
                                    <option selected>Select tennant association</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div> */}
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
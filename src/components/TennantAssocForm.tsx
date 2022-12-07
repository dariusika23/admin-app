import { useState } from "react"
import { patchOrPost } from "../api/Backend";
import { useUserState } from "../pages/UserContext";

export const TennantAsocForm = (props: {onNewEvent: () => void}) => {
    const {user} = useUserState();
    const [asocName, setAsocName] = useState("");
    const [asocAddress, setAsocAddress] = useState("");

    const handleAdd = async (e:any) => {
        e.preventDefault();
        patchOrPost('/tenantAssociation', user.id, {name: asocName, address: asocAddress});
        props.onNewEvent();
    } 

    return (
        <>
            <div className="row g-5 mb-5">
                <div className="col">
                    <h4 className="mb-3">Add new tennant association</h4>
                    <form action="">
                        <div className="row d-flex align-items-end justify-content-between">
                            <div className="col-xs-12 col-sm-2">
                                <label htmlFor="firstName" className="form-label">Name</label>
                                <input type="text" name="firstName" id="firstName" className="form-control" value={asocName} onChange={e => setAsocName(e.target.value)} />
                            </div>
                            <div className="col-xs-12 col-sm-3">
                                <label htmlFor="lastName" className="form-label">Address</label>
                                <input type="text" name="lastName" id="lastName" className="form-control" value={asocAddress} onChange={e => setAsocAddress(e.target.value)}/>
                            </div>
                            <div className="col-xs-12 col-sm">
                                <button className="btn btn-primary" onClick={handleAdd}>Add Association</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
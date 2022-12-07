import { useState } from "react"
import { patchOrPost } from "../api/Backend";
import { useUserState } from "../pages/UserContext";

export const TennantForm = (props: {onNewEvent: () => void}) => {
    const {user} = useUserState();
    const [tenFirstName, setTenFirstName] = useState("");
    const [tenLastName, setTenLastName] = useState("");
    const [personNo, setPersonNo] = useState("");

    const handleAdd = async (e:any) => {
        e.preventDefault();
        patchOrPost('/tenant', user.id, {firstName: tenFirstName, lastName: tenLastName, personNumber: personNo});
        setTenFirstName("");
        setTenLastName("");
        setPersonNo("");
        props.onNewEvent();
    } 

    return (
        <>
            <div className="row g-5 mb-5">
                <div className="col">
                    <h4 className="mb-3">Add new tennant</h4>
                    <form action="">
                        <div className="row">
                            <div className="col-xs-12 col-sm-4">
                                <label htmlFor="firstName" className="form-label">First Name</label>
                                <input type="text" name="firstName" id="firstName" className="form-control" value={tenFirstName} onChange={e => setTenFirstName(e.target.value)} />
                            </div>
                            <div className="col-xs-12 col-sm-4">
                                <label htmlFor="lastName" className="form-label">Last Name</label>
                                <input type="text" name="lastName" id="lastName" className="form-control" value={tenLastName} onChange={e => setTenLastName(e.target.value)}/>
                            </div>
                            <div className="col-xs-12 col-sm-4">
                                <label htmlFor="firstName" className="form-label">Person No</label>
                                <input type="text" name="personNo" id="personNo" className="form-control" value={personNo} onChange={e => setPersonNo(e.target.value)} />
                            </div>
                            <div className="col-xs-12 col mt-4">
                                <button className="btn btn-primary" onClick={handleAdd}>Add Tennant</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
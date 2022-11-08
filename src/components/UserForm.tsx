import { useEffect, useState } from "react"
import { post, useAsyncState } from "../api/Backend";
import { Apartment, Units } from "../api/Models";
import { useUserState } from "../pages/UserContext";

export const UserForm = (props: { onNewEvent: () => void, apartment: Apartment }) => {
    const { user } = useUserState();
    const [unit] = useAsyncState<Units>("/units", { mWh: 0, mc: 0 });
    const [coldW1, setColdW1] = useState(0);
    const [coldW2, setColdW2] = useState(0);
    const [hotW1, setHotW1] = useState(0);
    const [hotW2, setHotW2] = useState(0);
    const path = `/apartment/${props.apartment.id}`;

    useEffect(() => {
        setColdW1(props.apartment.coldwater1 ?? 0);
        setColdW2(props.apartment.coldwater2 ?? 0);
        setHotW1(props.apartment.hotwater1 ?? 0);
        setHotW2(props.apartment.hotwater2 ?? 0);
    }, [props.apartment]);


    const handleAdd = async (e: any) => {
        e.preventDefault();
        const tempAp: Apartment = { id: 0 };
        tempAp.coldwater1 = coldW1;
        tempAp.coldwater2 = coldW2;
        tempAp.hotwater1 = hotW1;
        tempAp.hotwater2 = hotW2;
        tempAp.date = new Date(Date.now()).toDateString();
        post(path, user.id, tempAp);
        props.onNewEvent();
    }

    return (
        <>
            <div className="row g-5 mb-5">
                <div className="col">
                    <h4 className="mb-4">Add new indexes</h4>
                    <h6 className="mb-3">Metrics</h6>
                    <p className="mb-4">mWh: {unit.mWh} lei, mc: {unit.mc} lei</p>
                    <form action="">
                        <div className="row mb-3">
                            <div className="col-xs-12 col-sm-2">
                                <label htmlFor="firstName" className="form-label">Cold Water 1</label>
                                <input type="text" name="firstName" id="firstName" className="form-control" value={coldW1} onChange={e => setColdW1(parseInt(e.target.value))} />
                            </div>
                            <div className="col-xs-12 col-sm-2">
                                <label htmlFor="lastName" className="form-label">Cold Water 2</label>
                                <input type="text" name="lastName" id="lastName" className="form-control" value={coldW2} onChange={e => setColdW2(parseInt(e.target.value))} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-sm-2">
                                <label htmlFor="firstName" className="form-label">Hot Water 1</label>
                                <input type="text" name="firstName" id="firstName" className="form-control" value={hotW1} onChange={e => setHotW1(parseInt(e.target.value))} />
                            </div>
                            <div className="col-xs-12 col-sm-2">
                                <label htmlFor="lastName" className="form-label">Hot Water 2</label>
                                <input type="text" name="lastName" id="lastName" className="form-control" value={hotW2} onChange={e => setHotW2(parseInt(e.target.value))} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-sm-4 mt-4">
                                <button className="btn btn-primary" onClick={handleAdd}>Add Index</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
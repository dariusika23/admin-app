import { useState } from "react";
import { useAsyncState } from "../api/Backend";
import { Apartment, Tennant } from "../api/Models";
import { ApartmentForm } from "./ApartmentForm";
import { TennantForm } from "./TennantForm";

export const Modal = (props: { onNewEvent: () => void }) => {
    const [owners, reloadOwners] = useAsyncState<Tennant[]>("/tenant", []);
    const [apartments, reloadApartments] = useAsyncState<Apartment[]>("/apartment", []);


    const handleAdd = async (e: any) => {
        e.preventDefault();
        // post()
    }

    return (
        <>
            <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Add new apartment</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <ApartmentForm onNewEvent={props.onNewEvent} />
                            <TennantForm onNewEvent={() => reloadOwners()} />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
                            {/* <button type="button" className="btn btn-primary">Save changes</button> */}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
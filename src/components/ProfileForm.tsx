import { useEffect, useState } from "react"
import { patchOrPost, post, useAsyncState } from "../api/Backend";
import { Apartment, Tennant, Units, User } from "../api/Models";
import { useUserState } from "../pages/UserContext";

export const ProfileForm = (props: { onNewEvent: () => void, user: Tennant }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [photoUrl, setPhotoUrl] = useState("");
    const path = `/tenant/${props.user.id}`;

    useEffect(() => {
        setFirstName(props.user.firstName ?? "");
        setLastName(props.user.lastName ?? "");
        setPhotoUrl(props.user.photoUrl ?? "");
    }, [props.user]);


    const handleAdd = async (e: any) => {
        e.preventDefault();
        const tempUser: Tennant = { id: props.user.id ?? 0, username: props.user.username ?? "", firstName: props.user.firstName ?? "", lastName: props.user.lastName ?? "", photoUrl: props.user.photoUrl ?? ""};
        tempUser.firstName = firstName;
        tempUser.lastName = lastName;
        tempUser.photoUrl = photoUrl;
        patchOrPost(path, tempUser.id.toString(), tempUser);
        props.onNewEvent();
    }

    return (
        <>
            <div className="row pb-3">
                <div className="col">
                    <form action="">
                        <div className="row mb-3">
                            <div className="col-xs-12 col-sm-4">
                                <label htmlFor="firstName" className="form-label">First Name</label>
                                <input type="text" name="firstName" id="firstName" className="form-control" value={firstName} onChange={e => setFirstName(e.target.value)} />
                            </div>
                            <div className="col-xs-12 col-sm-4">
                                <label htmlFor="lastName" className="form-label">Last Name</label>
                                <input type="text" name="lastName" id="lastName" className="form-control" value={lastName} onChange={e => setLastName(e.target.value)} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-sm-12">
                                <label htmlFor="firstName" className="form-label">Photo Url</label>
                                <input type="text" name="firstName" id="firstName" className="form-control" value={photoUrl} onChange={e => setPhotoUrl(e.target.value)} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-sm-4 mt-4">
                                <button className="btn btn-primary" onClick={handleAdd}>Save Updates</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
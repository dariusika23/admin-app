import { useAsyncState } from "../api/Backend";
import { Apartment, Tennant } from "../api/Models";


export const ApartmentsView = (props: { apartments: Apartment[] }) => {
    const [owners] = useAsyncState<Tennant[]>("/tenant", []);
    const apartments = props.apartments;    
    const apartmentsView = apartments.map(ap => {
        const ownerName = owners.find(el => el.id === ap.ownerId);
        return <tr key={ap.id}><td>{ap.id}</td><td>{ap.name}</td><td>{ownerName?.firstName} {ownerName?.lastName}</td></tr>
    });

    return (
        <>
            <h2>Apartments</h2>
            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col">name</th>
                            <th scope="col">Owner</th>
                        </tr>
                    </thead>
                    <tbody>
                        {apartmentsView}
                    </tbody>
                </table>
            </div>
        </>
    )
}

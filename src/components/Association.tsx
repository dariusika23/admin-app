import { Apartment, TennantAssociation } from "../api/Models";



export const Association = (props: { associations: TennantAssociation[], apartments: Apartment[] }) => {
    const associations = props.associations;
    const allApartments = props.apartments;
    const assocView = props.associations.map(as => {
        const apartmentsNo = allApartments.filter(a => a.tenantAssociationId === as.id).length;
        return <tr key={as.id}><td>{as.id}</td><td>{as.name}</td><td>{apartmentsNo}</td><td>{as.address}</td></tr>
    });

    return (
        <>
            <h2>Tennants Associations</h2>
            <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th scope="col">id</th>
                            <th scope="col-2">Name</th>
                            <th scope="col-2">Apartments</th>
                            <th scope="col-7">Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {assocView}
                    </tbody>
                </table>
            </div>
        </>
    )
}
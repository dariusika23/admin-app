import { useAsyncState } from "../api/Backend";

export interface Association {
    id: number,
    name: string,
    address: string
}

export const Association = (props: { associations: Association[] }) => {

    const assocView = props.associations.map(as => {
        return <tr key={as.id}><td>{as.id}</td><td>{as.name}</td><td>{as.address}</td></tr>
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
                            <th scope="col-9">Address</th>
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
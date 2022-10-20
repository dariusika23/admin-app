import { useAsyncEffect } from "../api/Backend";

export interface Association {
    id: number,
    name: string,
    address: string
}

export const Association = (props: {associations: Association[]}) => {

    const assocView = props.associations.map(as => {
        return <tr key={as.id}><td>{as.id}</td><td>{as.name}</td><td>{as.address}</td></tr>
    });
    
    return (
        <>
            {assocView}
        </>
    )
}
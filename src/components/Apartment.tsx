import { useAsyncEffect } from "../api/Backend";

interface Apartment {
    id: number,
    blockid: number,
    userid: number,
    name: string,
    personumber: number,
    total: number
}

export const Apartment = () => {
    const [apartments] = useAsyncEffect<Apartment[]>("/apartments", []);

    const apartmentsView = apartments.map(ap => {
        return <tr key={ap.id}><td>{ap.blockid}</td><td>{ap.userid}</td><td>{ap.name}</td><td>{ap.personumber}</td><td>{ap.total}</td></tr>
    });
    
    return (
        <>
            {apartmentsView}
        </>
    )
}

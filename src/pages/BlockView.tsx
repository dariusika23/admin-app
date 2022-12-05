import { useAsyncState } from "../api/Backend"
import { Apartment, Tennant, TennantAssociation, Units } from "../api/Models"
import { UserForm } from "../components/UserForm"
import { ProtectedView } from "./ProtectedView"
import { useUserState } from "./UserContext"
import { useLocation } from "react-router-dom"
import { useEffect } from "react"
import { CustomTable } from "../components/CustomTable"
import { ExpanderComponentProps } from "react-data-table-component"

type DataRow = {
    id: number;
    name: string;
    coldwater1: string;
    hotwater1: string;
    hotwater2: string;
};


const ExpandedComponent: React.FC<ExpanderComponentProps<DataRow>> = ({ data }) => {
    // return <pre>{JSON.stringify(data, null, 2)}</pre>;
    return (
        <>
        <p>{data.id}</p>
        <p>{data.name}</p>
        <p>coldWater1: {data.coldwater1}</p>
        <p>hotWater1: {data.hotwater1}</p>
        <p>hotWater2: {data.hotwater2}</p>
        </>
    )
}

// https://react-data-table-component.netlify.app/?path=/story/expandable-basic--basic

export const BlockView = () => {
    const { user } = useUserState();
    const [unit] = useAsyncState<Units>("/units", { mWh: 0, mc: 0 });
    const [allApartments, reloadAllApartments] = useAsyncState<Apartment[]>("/apartment", []);
    const [tenants] = useAsyncState<Tennant[]>("/tenant", []);
    const path = useLocation().pathname;
    const [block, reloadBlock] = useAsyncState<TennantAssociation>(path, { id: 0, name: "", address: "" });
    const userNice = tenants.find(tn => user.tennantId === tn.id);
    const apartments = allApartments.filter(ap => ap.tenantAssociationId === block.id);
    const displayAp = apartments.map(ap => <tr key={ap.id}><td>{ap.id}</td><td>{ap.name}</td><td>{ap.coldwater1}</td><td>{ap.coldwater2}</td><td>{ap.hotwater1}</td><td>{ap.hotwater2}</td><td>{ap.date}</td></tr>)
    console.log(apartments);
    const columns = [
        {
            name: "Id",
            selector: (row: any) => row.id,
            sortable: true
        },
        {
            name: "Name",
            selector: (row: any) => row.name,
            sortable: true
        },
        {
            name: "Cold Water 1",
            selector: (row: any) => row.coldwater1
        },
        {
            name: "Cold Water 2",
            selector: (row: any) => row.coldwater2
        },
        // {
        //     name: "Hot Water 1",
        //     selector: (row: any) => row.hotwater1
        // },
        // {
        //     name: "Hot Water 2",
        //     selector: (row: any) => row.hotwater2
        // }        
    ];

    const data = apartments;

    useEffect(() => {
        reloadBlock();
        console.log(block);
    }, [allApartments])

    return (
        <ProtectedView>
            <div className="d-flex flex-column justify-content-between flex-wrap flex-md-nowrap align-items-left pt-3 pb-2 mb-3">
                <h2 className="h2">{block.name}</h2>
                {/* <p>Total to pay: {apartment.total}</p> */}
            </div>
            {/* <UserForm onNewEvent={() => reloadApartment()} apartment={apartment} /> */}
            {/* <div className="table-responsive">
                <table className="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th>no</th>
                            <th>name</th>
                            <th>ColdW1</th>
                            <th>ColdW2</th>
                            <th>HotW1</th>
                            <th>HotW2</th>
                            <th>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {displayAp}
                    </tbody>
                </table>
            </div> */}

            <CustomTable columns={columns} data={data} selectableRows expandableRows expandableRowsComponent={ExpandedComponent}/>


        </ProtectedView>
    )
}
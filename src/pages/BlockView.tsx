import { useAsyncState } from "../api/Backend"
import { Apartment, Tennant, TennantAssociation, Units } from "../api/Models"
import { UserForm } from "../components/UserForm"
import { ProtectedView } from "./ProtectedView"
import { useUserState } from "./UserContext"
import { useLocation } from "react-router-dom"
import { useEffect, useState } from "react"
import DataTable from '../components/DataTableBase'
import { ExpanderComponentProps } from "react-data-table-component"
import { Card } from "../components/Card"




// https://react-data-table-component.netlify.app/?path=/story/expandable-basic--basic

export const BlockView = () => {
    const { user } = useUserState();
    const [unit] = useAsyncState<Units>("/units", { mWh: 0, mc: 0 });
    const [allApartments, reloadAllApartments] = useAsyncState<Apartment[]>("/apartment", []);
    const [userNice] = useAsyncState<Tennant>(`/tenant/${user.tennantId}`, {id: 0, username: "", firstName: "", lastName: "", photoUrl: ""});
    const path = useLocation().pathname;
    const [block, reloadBlock] = useAsyncState<TennantAssociation>(path, { id: 0, name: "", address: "" });
    const apartments = allApartments.filter(ap => ap.tenantAssociationId === block.id);
    

    const data = apartments;

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
        {
            name: "Hot Water 1",
            selector: (row: any) => row.hotwater1
        },
        {
            name: "Hot Water 2",
            selector: (row: any) => row.hotwater2
        }
    ];

    const ExpandedComponent: React.FC<ExpanderComponentProps<Apartment>> = ({ data }) => {
        // return <pre>{JSON.stringify(data, null, 2)}</pre>;
        return (
            <>
                <div className="container py-3">
                    <div className="row">
                        <div className="col-12">
                            {/* <p>{data.id}</p> */}
                            <p>{data.name}</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-6">
                            <p>coldWater1: {data.coldwater1}</p>
                        </div>
                        <div className="col-6">
                            <p>coldWater2: {data.coldwater2}</p>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-6">
                            <p>hotWater1: {data.hotwater1}</p>
                        </div>
                        <div className="col-6">
                            <p>hotWater2: {data.hotwater2}</p>
                        </div>
                    </div>

                    {/* <div className="row justify-content-end">
                        <button className="btn btn-primary mr-3">Modify</button>
                        <button className="btn btn-danger">Delete</button>
                    </div> */}

                </div>
            </>
        )
    };


    useEffect(() => {
        reloadBlock();
        console.log(block);
    }, [allApartments])

    return (
        <ProtectedView>

            <div className="row my-3">
                <Card className="col-xs-12 col-md-6 mb-3">
                    <h2 className="h2">{block.name}</h2>
                </Card>

                <Card className="col-xs-12 col-md-12">
                    <DataTable columns={columns} data={data} selectableRows expandableRows expandableRowsComponent={ExpandedComponent} />
                </Card>
            </div>



        </ProtectedView>
    )
}
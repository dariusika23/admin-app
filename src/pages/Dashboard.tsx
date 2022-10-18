import { useEffect, useState } from "react";
import { json } from "stream/consumers";
import { loadAllApartments, useAsyncEffect } from "../api/Backend";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { useUserState } from "./UserContext";

interface Apartment {
    id: number,
    blockid: number,
    userid: number,
    name: string,
    personumber: number,
    total: number
}

export const Dashboad = (props: { userId: string, isAdmin: boolean, blockId?: number, children?: any }) => {
    const [apartments] = useAsyncEffect<Apartment[]>("/apartments", []);

    const apartmentsView = apartments.map(ap => {
        return <tr key={ap.id}><td>{ap.blockid}</td><td>{ap.userid}</td><td>{ap.name}</td><td>{ap.personumber}</td><td>{ap.total}</td></tr>
    });

    const defaultAdminHome = <><h2>Apartments</h2>
        <div className="table-responsive">
            <table className="table table-striped table-sm">
                <thead>
                    <tr>
                        <th scope="col">Block No</th>
                        <th scope="col">User No</th>
                        <th scope="col">UserName</th>
                        <th scope="col">Person No</th>
                        <th scope="col">Total</th>
                    </tr>
                </thead>
                <tbody>
                    {apartmentsView}
                </tbody>
            </table>
        </div></>;

    const defaultUserHome = <><h2>Your expenses</h2><div className="table-responsive">
        <table className="table table-striped table-sm">
            <thead>
                <tr>
                    <th scope="col">Block No</th>
                    <th scope="col">User No</th>
                    <th scope="col">UserName</th>
                    <th scope="col">Person No</th>
                    <th scope="col">Total</th>
                </tr>
            </thead>
            <tbody>
                {apartmentsView}
            </tbody>
        </table>
    </div></>

    const view = props.isAdmin ? defaultAdminHome : defaultUserHome;

    return (
        <>
            <Header />

            <div className="container-fluid">
                <div className="row">
                    <Sidebar />

                    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4"><div className="chartjs-size-monitor"><div className="chartjs-size-monitor-expand"><div className=""></div></div><div className="chartjs-size-monitor-shrink"><div className=""></div></div></div>
                        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                            <h1 className="h2"> Dashboard</h1>
                            <div className="btn-toolbar mb-2 mb-md-0">
                                <div className="btn-group me-2">
                                    <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
                                    <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
                                </div>
                                <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-calendar align-text-bottom" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                                    This week
                                </button>
                            </div>
                        </div>

                        {view}

                    </main>
                </div>
            </div>

        </>
    );
}
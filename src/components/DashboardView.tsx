import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

export const DashboardView = (props: any) => {
    return <>
        <Header />
        <div className="container-fluid">
            <div className="row">
                <Sidebar />
                <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
                    {props.children}
                </main>
            </div>
        </div>
    </>
}
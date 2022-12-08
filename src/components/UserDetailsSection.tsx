import { Link } from "react-router-dom";
import { patchOrPost } from "../api/Backend";
import { Apartment, Tennant, TennantAssociation, User } from "../api/Models";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Card } from "./Card";
import { useEffect, useState } from "react";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

export const UserDetailsSection = (props: { user: User, updateUser: (u: User) => void, userNice?: Tennant, tennantsApartments?: Apartment[], block?: TennantAssociation }) => {

    const userNice = props.userNice;
    const apartments = props.tennantsApartments;
    const block = props.block;
    const user = props.user;
    const [coldWaterTotal, setColdWaterTotal] = useState(0);
    const [hotWaterTotal, setHotWaterTotal] = useState(0);

    const coldWaterTotal1 = apartments?.reduce((total, item) => {
        if (item.coldwater1 !== undefined) {
            return total + item.coldwater1;
        } else {
            return total + 0;
        }
    }, 0);
    const coldWaterTotal2 = apartments?.reduce((total, item) => {
        if (item.coldwater2 !== undefined) {
            return total + item.coldwater2;
        } else {
            return total + 0;
        }
    }, 0);
    const hotWaterTotal1 = apartments?.reduce((total, item) => {
        if (item.hotwater1 !== undefined) {
            return total + item.hotwater1;
        } else {
            return total + 0;
        }
    }, 0);
    const hotWaterTotal2 = apartments?.reduce((total, item) => {
        if (item.hotwater2 !== undefined) {
            return total + item.hotwater2;
        } else {
            return total + 0;
        }
    }, 0);
    const total = apartments?.reduce((total, item) => {
        if (item.total !== undefined) {
            return total + item.total;
        } else {
            return total + 0;
        }
    }, 0);


    useEffect(() => {
        if (coldWaterTotal1 !== undefined && coldWaterTotal2 !== undefined) {
            const sumWater = (coldWaterTotal1 + coldWaterTotal2) * 10;
            setColdWaterTotal(sumWater);
        }
    }, [coldWaterTotal1, coldWaterTotal2]);
    useEffect(() => {
        if (hotWaterTotal1 !== undefined && hotWaterTotal2 !== undefined) {
            const sumWater = (hotWaterTotal1 + hotWaterTotal2) * 10;
            setHotWaterTotal(sumWater);
        }
    }, [hotWaterTotal1, hotWaterTotal2]);


    const handleDeactivate = (e: any) => {
        e.preventDefault();
        user.isActive = false;
        props.updateUser(user);
        console.log(user.isActive);
        patchOrPost(`/users/${user.id}`, user.id, user);
        console.log(user);
    };
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const
            },
            title: {
                display: true,
                text: 'Sumar cheltuieli apartamente'
            }
        }
    };
    const labels = apartments?.slice(0, apartments.length).map(ap => ap.name);
    const data = {
        labels,
        datasets: [
            {
                label: 'Cold Water',
                data: apartments?.map(ap => ap.coldwater1),
                backgroundColor: 'rgb(70, 194, 203, 0.5)'
            },
            {
                label: 'Hot Water',
                data: apartments?.map(ap => ap.hotwater1),
                backgroundColor: 'rgba(250, 114, 104, 0.5)'
            }
        ]
    }


    return (
        <>

            <div className="row d-flex justify-content-left align-items-top pt-3">
                <Card className={"xs-12 col-md-6 mb-3"} id={"apartmentCard"}>
                    <Bar options={options} data={data} />
                </Card>
                <div className="col-xs-12 col-md-6 d-flex flex-column">
                    <div className="row mb-3">
                        <Card className={"col-6"}>
                            <div className="d-flex align-items-center mb-2">
                                <i className="fas fa-file-invoice turquoise round"></i>
                                <h5>Cold Water</h5>
                            </div>
                            <h3 className="text-center font-weight-bold">{coldWaterTotal}</h3>
                        </Card>
                        <Card className={"col-6"}>
                            <div className="d-flex align-items-center mb-2">
                                <i className="fas fa-file-invoice living-coral round"></i>
                                <h5>Hot Water</h5>
                            </div>
                            <h3 className="text-center font-weight-bold">{hotWaterTotal}</h3>
                        </Card>
                    </div>
                    <div className="row mb-3">
                        <Card className={"col-6"}>
                            <div className="d-flex align-items-center mb-2">
                                <i className="fas fa-file-invoice turquoise round"></i>
                                <h5>Trash</h5>
                            </div>
                            <h3 className="text-center font-weight-bold">{apartments?.at(0)?.trash} lei</h3>
                        </Card>
                        <Card className={"col-6"}>
                            <div className="d-flex align-items-center mb-2">
                                <i className="fas fa-file-invoice yellow round"></i>
                                <h5>Repairs</h5>
                            </div>
                            <h3 className="text-center font-weight-bold">{apartments?.at(0)?.repairs} lei</h3>
                        </Card>
                    </div>
                    <div className="row mb-3">
                        <Card className={"col-6"}>
                            <div className="d-flex align-items-center mb-2">
                                <i className="fas fa-file-invoice living-coral round"></i>
                                <h5>Penalties</h5>
                            </div>
                            <h3 className="text-center font-weight-bold">{apartments?.at(0)?.penalties} lei</h3>
                        </Card>
                        <Card className={"col-6"}>
                            <div className="d-flex align-items-center mb-2">
                                <i className="fas fa-file-invoice light-violet round"></i>
                                <h5>Remaining</h5>
                            </div>
                            <h3 className="text-center font-weight-bold">{apartments?.at(0)?.remaining} lei</h3>
                        </Card>
                    </div>
                    <div className="row">
                        <Card className="col-12">
                            <div className="d-flex align-items-center mb-2">
                                <i className="fas fa-file-invoice turquoise round"></i>
                                <h5>Total</h5>
                            </div>
                            <h3 className="text-center font-weight-bold">{ total } lei</h3>
                        </Card>
                    </div>
                </div>
            </div>
            {/* <section className="vh-100" style={{backgroundColor: "#9de2ff"}}>
            </section> */}
        </>
    )
}
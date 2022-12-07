import { useState } from "react";
import { Apartment } from "../api/Models";

export const CalcAp = (props: {apartments: Apartment[]}) => {
    const apartments = props.apartments;
    const [resultApartment, setResultAp] = useState<Apartment>({id:0, tenantAssociationId: 0});
    const [coldWaterTotal, setColdWaterTotal] = useState(0);
    const [hotWaterTotal, setHotWaterTotal] = useState(0);

    const coldWaterTotal1 = apartments?.reduce((total, item) => {
        if (item.coldwater1 !== undefined) {
            return total + item.coldwater1;
        } else {
            return 0;
        }
    }, 0);
    const coldWaterTotal2 = apartments?.reduce((total, item) => {
        if (item.coldwater2 !== undefined) {
            return total + item.coldwater2;
        } else {
            return 0;
        }
    }, 0);
    const hotWaterTotal1 = apartments?.reduce((total, item) => {
        if (item.hotwater1 !== undefined) {
            return total + item.hotwater1;
        } else {
            return 0;
        }
    }, 0);
    const hotWaterTotal2 = apartments?.reduce((total, item) => {
        if (item.hotwater2 !== undefined) {
            return total + item.hotwater2;
        } else {
            return 0;
        }
    }, 0);
    const total = apartments?.reduce((total, item) => {
        if (item.total !== undefined) {
            return total + item.total;
        } else {
            return 0
        }
    }, 0);

    return (
        {resultApartment}
    );
}
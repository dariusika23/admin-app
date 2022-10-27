import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { useEffect, useState } from "react";
import { loadMapApi } from "../utils/GoogleMapsUtils"
import { MapView } from "./Map";



export const ApartmentCardView = () => {
    const options: google.maps.MapOptions = {
        zoom: 15,
        center: {
            lat: 46.18333,
            lng: 21.31667
        }
    }
    return (
        <>
            <MapView options={options}/>
        </>
    );
}
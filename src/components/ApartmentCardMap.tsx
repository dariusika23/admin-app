import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { useEffect, useState } from "react";
import { MapView } from "./Map";



export const ApartmentCardMap = (props: {lat: number, lng: number, zoom?: number}) => {
    const options: google.maps.MapOptions = {
        zoom: props.zoom ?? 15 ,
        center: {
            lat: props.lat,
            lng: props.lng
        }
    }
    return (
        <>
            <MapView options={options}/>
        </>
    );
}
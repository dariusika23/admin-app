import { Wrapper } from "@googlemaps/react-wrapper";
import React from "react";
import { useRef, useState, useLayoutEffect, useEffect } from "react";
export const MarkerView: React.FC<google.maps.MarkerOptions> = (options) => {
    const [marker, setMarker] = useState<google.maps.Marker>();
    useEffect(() => {
        if (!marker) {
            setMarker(new google.maps.Marker());
        }
        // remove marker from map on unmount
        return () => {
            if (marker) {
                marker.setMap(null);
            }
        };
    }, [marker]);
    useEffect(() => {
        if (marker) {
            marker.setOptions(options);
        }
    }, [marker, options]);
    return null;
};
const MapImpl = (props: { options: google.maps.MapOptions, children?: any }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [map, setMap] = useState<google.maps.Map>();
    useLayoutEffect(() => {
        if (ref.current && !map) {
            setMap(new window.google.maps.Map(ref.current, {
                zoom: 15,
                center: {
                    lat: 46.18333,
                    lng: 21.31667
                }
            }));
        }
    }, [ref, map]);
    useEffect(() => {
        if (map) {
            map.setOptions(props.options);
        }
    }, [map, props.options]);
    return <div ref={ref} style={{ width: "400px", height: "400px" }}>
        {React.Children.map(props.children, (child) => {
            if (React.isValidElement(child)) {
                // set the map prop on the child component
                // @ts-ignore
                return React.cloneElement(child, { map });
            }
        })}
    </div>
}
export const MapView = (props: { options: google.maps.MapOptions, children?: any }) => {
    return<MapImpl options={props.options}>
            <MarkerView position={props.options.center}/>
        </MapImpl>
}

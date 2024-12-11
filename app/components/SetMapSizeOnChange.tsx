'use client'
import {useMap} from "react-leaflet";
import React from "react";

const SetMapSizeOnChange = ({ top, height }: any) => {
    const map = useMap();
    React.useEffect(() => {
        if (map != null) {
            map.invalidateSize();
        }
    }, [map, top, height]);
    const mapContainer = map.getContainer();
    mapContainer.style.cssText = `top: ${top};height: ${height};width: 99vw;position: relative;`;

    return <div/>;
}

export default SetMapSizeOnChange;
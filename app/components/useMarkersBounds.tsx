'use client'
import React from "react";
import {latLngBounds} from 'leaflet'

const useMarkersBounds = (mapHits: Array<any>) => {

    const [currentBounds, setCurrentBounds] = React.useState<any>();

    React.useEffect(() => {
        const bounds = latLngBounds([])

        mapHits && mapHits.length && [...mapHits].forEach((item: any) => {
            const {coords} = item;
            if (!coords) {
                return;
            }
            bounds.extend(coords)
        });

        setCurrentBounds(bounds);
    }, [mapHits, mapHits.length]);

    return currentBounds;
};

export default useMarkersBounds;
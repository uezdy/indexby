'use client'
import L from 'leaflet';
const {
    DivIcon
} = L;
import {Marker, Popup} from "react-leaflet";
import React from "react";
import {plural} from "./utils";

const PlaceMarker = ({hit}: any) => {

    return <Marker title={`${hit.title}`}
                   eventHandlers={{
                       popupclose: () => {},
                   }}
                   icon={new DivIcon({
                       html: `<b>${hit.title}</b>`,
                       className: 'marker-div-icon'
                   })}
                   position={hit.coords}>
        <Popup>
            <b>Упоминается в церквях:</b>
            <ol className="place-marker-popup">
                {
                    hit.info.map(({title, count}: any) => <li>{title} ({count} {plural(count, ['раз', 'раза', 'раз'])})</li>)
                }
            </ol>
        </Popup>
    </Marker>
};

export default PlaceMarker;
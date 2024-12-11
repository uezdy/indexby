'use client'
import L from 'leaflet';
const {
    DivIcon
} = L;
import {Marker, Popup, Tooltip} from "react-leaflet";
import React from "react";
import {catholicCrossIcon, ortodoxCrossIcon} from "./icons";

const PrikhodEmptyMarker = ({hit}: any) => {
    const isCatholic = !!~hit.title.indexOf('костел');
    return <Marker
                   icon={new DivIcon({
                       html: isCatholic ? catholicCrossIcon : ortodoxCrossIcon,
                       className: `marker-church-div-icon no-metrics ${isCatholic ? 'сatholic' : 'orthodox'}`
                   })}
                   position={hit.coords}>
            <Tooltip>
                <header className="church-marker-popup-header">
                    <div style={{textTransform: 'capitalize', whiteSpace: 'nowrap'}}>{hit.short}</div>
                </header>
                <div>
                    <b style={{textTransform: 'capitalize', whiteSpace: 'nowrap'}}>{hit.title}</b>
                </div>
                <footer>
                    <div>
                        МК не сохранилось
                    </div>
                </footer>
            </Tooltip>
        </Marker>
};

export default PrikhodEmptyMarker;
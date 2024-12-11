'use client'
import L from 'leaflet';
const {
    DivIcon
} = L;
import {Marker, Popup} from "react-leaflet";
import React from "react";
import Button from '@mui/joy/Button';
import {catholicCrossIcon, ortodoxCrossIcon} from "./icons";
import {plural} from "./utils";

const PrikhodPlaceMarker = ({hit, onSelect}: any) => {
    const isCatholic = !!~hit.title.indexOf('костел');
    return <Marker title={`${hit.short} ${hit.title}`}
                   icon={new DivIcon({
                       html: isCatholic ? catholicCrossIcon : ortodoxCrossIcon,
                       className: `marker-church-div-icon ${isCatholic ? 'сatholic' : 'orthodox'}`
                   })}
                   position={hit.coords}>
            <Popup>
                <header className="church-marker-popup-header">
                    <b style={{textTransform: 'capitalize', whiteSpace: 'nowrap'}}>{hit.short}</b>
                    <span>{hit.count} {plural(hit.count, ['запись', 'записи', 'записей'])}</span>
                </header>
                <div>
                    <b style={{textTransform: 'capitalize', whiteSpace: 'nowrap'}}>{hit.title}</b>
                </div>
                <div>
                    <i style={{textTransform: 'capitalize', whiteSpace: 'nowrap'}}>{hit.atd.join(', ')}</i>
                </div>
                <footer>
                    <Button variant="plain"
                            size="sm"
                            onClick={() => onSelect(hit)}
                    >
                        Посмотреть
                    </Button>
                </footer>
            </Popup>
        </Marker>
};

export default PrikhodPlaceMarker;
'use client'
import React from 'react';
import {getDatabase, ref, child, get} from "firebase/database";

import {
    MapContainer,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import MarkerClusterGroup from 'react-leaflet-cluster';

import SetMapSizeOnChange from "./SetMapSizeOnChange";
import LayersControlComponent from "./LayersControlComponent";
import {useWindowSize} from "./useWindowSize";
import {initializeApp} from "firebase/app";
import PrikhodPlaceMarker from "./PrikhodPlaceMarker";
import useMarkersBounds from "./useMarkersBounds";
import BoundsToMapItems from "./BoundsToMapItems";
import FilterBar from "./FilterBar";
import {styled, css} from '@mui/system';
import {Modal} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import DocsTabs from "./DocsTabs";
import PlaceMarker from "./PlaceMarker";
import PrikhodEmptyMarker from "./PrikhodEmptyMarker";

const notSavedPrikhods = [
    {short: 'местечко Круча', title: 'церковь Святой Троицы', coords: [54.2463565,29.5416254]},
    {short: 'село Павловичи', title: 'церковь Святых Апостолов Петра и Павла', coords: [54.2186037,29.65021133]},
    {short: 'местечко Шепелевичи', title: 'церковь Святой Троицы', coords: [54.1263366,29.560604]},
    {short: 'местечко Тетерин', title: 'церковь Святой Параскевы Пятницы', coords: [54.1612781,29.76247787]},
    {short: 'местечко Круглое', title: 'церковь Рождества Пресвятой Богородицы', coords: [54.2435129,29.7964668]},
    {short: 'местечко Друцк', title: 'церковь святителя Николая', coords: [54.33916667,29.76388889]},
    {short: 'слобода Полесье', title: 'церковь Вознесенская, приписная', coords: [54.213015,29.512291]},
    {short: 'местечко Круглое', title: 'церковь Рождества Пресвятой Богородицы', coords: [54.2435129,29.7964668]},
    {short: 'село Шупени', title: 'церковь Успения Пресвятой Богородицы', coords: [54.19694444,29.82861111]},
    {short: 'село Ильковичи', title: 'церковь Святых Апостолов Петра и Павла', coords: [54.092271,29.80504]},
    {short: 'деревня Малый Кудин', title: 'церковь вмч. Георгия Победоносца', coords: [54.0288888,29.8155555]},
    {short: 'местечко Головчин', title: 'церковь Святой Троицы', coords: [54.0583333,29.9152777]},
    {short: 'местечко Толочин', title: 'церковь Покрова Пресвятой Богородицы', coords: [54.40424469,29.68488693]},
];

const firebaseConfig = {
    "apiKey": "AIzaSyCHXKjo_pKln0fawgf3z3JKGOaLdqN8nZw",
    "authDomain": "metric-auth.firebaseapp.com",
    "databaseURL": "https://metric-auth-default-rtdb.europe-west1.firebasedatabase.app",
    "projectId": "metric-auth",
    "storageBucket": "metric-auth.firebasestorage.app",
    "messagingSenderId": "837219519747",
    "appId": "1:837219519747:web:2ab78fdd885db7a2d9ad36",
    "measurementId": "G-CXNG4016TL",
    "applicationID": "1SQITOMPJN",
    "searchOnlyAPIKey": "2f1a6c924bc9f33235bb98e570053a79",
    "index_name": "born",
    "telegramBotToken": "1292036998:AAFkWJVt6GuU3-pyreWE-Xa8LMp4y9d0WgE",
    "telegramChatId": "162676802'"
};

const app = initializeApp(firebaseConfig);
const dbRef = ref(getDatabase(app));

const getValues = async (path: string, callback: Function) => {
    const snapshotPrikh = await get(child(dbRef, path));
    if (snapshotPrikh.exists()) {
        callback(snapshotPrikh.val());
    } else {
        console.log("No data available");
    }
};

export const LeafletInfoMap: React.FC<any> = () => {
    const [open, setOpen] = React.useState<boolean | any>(false);
    const [currentType, setCurrentType] = React.useState<string>('ch');
    const [noMK, setNoMK] = React.useState<boolean>();
    const [currentChurch, setCurrentChurch] = React.useState<string>('');
    const handleOpen = (val: any) => setOpen(val);
    const handleClose = () => setOpen(false);

    React.useEffect(() => {
        getValues('prikhods/', (val: any) => {
            setHitsPrikh(val);
            // setZoomToBounds(true);
            getValues('nps/', (val: any) => {
                setHitsNP(val);
                setZoomToBounds(true);
            });
        });
    }, []);

    const [zoomToBounds, setZoomToBounds] = React.useState<boolean>(false);
    const [hitsPrikh, setHitsPrikh] = React.useState<Array<any>>([]);
    const [hitsNP, setHitsNP] = React.useState<Array<any>>([]);
    const markersBounds = useMarkersBounds(hitsPrikh);
    const [rootWith, setRootWith] = React.useState(0);
    const [filterBarHeight, setFilterBarHeight] = React.useState<number>(0);

    const size = useWindowSize();

    React.useEffect(() => {
        const resultList = document.querySelector('#info-panel > .info-panel');
        const filterBar = document.getElementById('filter-bar');
        const root = document.getElementById('root');
        if (filterBar) {
            setFilterBarHeight(filterBar.clientHeight);
        }
        if (resultList) {
            // setFooterHeight(resultList.clientHeight);
        }
        if (root) {
            setRootWith(root.clientWidth);
        }
    }, [size]);

    return <>
        <FilterBar
            key={0}
            noMK={setNoMK}
            type={[currentType, setCurrentType]}
            church={[currentChurch, setCurrentChurch, hitsPrikh.filter((hit: any) => hit.count)]}
            callBack={() => {
                setZoomToBounds(true)
            }}/>
        <MapContainer
            key={1}
            attributionControl={false}
            id="map"
            center={[53.902287, 27.561824]}
            zoom={7}

            trackResize={true}
            scrollWheelZoom={true}
            zoomControl={false}
            style={{position: 'relative'}}
        >

            <BoundsToMapItems
                bounds={zoomToBounds ? markersBounds : null}
                callback={() => {
                    setZoomToBounds(false);
                }}
            />

            <SetMapSizeOnChange top={`${0}px`} height={`calc(99vh - ${filterBarHeight}px)`}/>
            <LayersControlComponent rootWith={rootWith}/>
            {
                currentType === 'ch' ? hitsPrikh.map((hit: any) => {
                    return <PrikhodPlaceMarker key={hit.objectID} hit={hit} onSelect={handleOpen}/>
                }) : <></>
            }
            {
                currentType === 'ch' && noMK ? notSavedPrikhods.map((hit: any, index: number) => {
                    return <PrikhodEmptyMarker key={index} hit={hit}/>
                }) : <></>
            }
            <MarkerClusterGroup chunkedLoading>
                {
                    currentType === 'np' ?
                        hitsNP
                            .filter((hit: any) => {
                                return hit.coords?.length && (
                                    currentChurch
                                        ? hit.info.some(({title}: any) => title === currentChurch)
                                        : true
                                )
                            })
                            .map((hit: any, index: number) => {
                                return <PlaceMarker key={index} hit={hit}/>
                            })
                        : <></>
                }
            </MarkerClusterGroup>

        </MapContainer>

        <Modal
            key={2}
            aria-labelledby="unstyled-modal-title"
            aria-describedby="unstyled-modal-description"
            open={!!open}
            onClose={handleClose}
        >
            <ModalContent>
                <h2 className="modal-title">
                            <span className="close-button" onClick={handleClose}>
                                <CloseIcon/>
                            </span>
                    <span>
                                {open.short}, {open.title}
                            </span>
                </h2>
                <DocsTabs hit={open}/>
            </ModalContent>
        </Modal>
    </>;
};

const ModalContent = styled('div')(
    ({theme}) => css`
      font-family: 'IBM Plex Sans', sans-serif;
      font-weight: 500;
      text-align: start;
      position: relative;
      display: flex;
      flex-direction: column;
      gap: 8px;
      overflow: auto;
      height: 90vh;
      background-color: #fff;
      border-radius: 8px;
      border: 1px solid #DAE2ED;
      box-shadow: 0 4px 12px rgb(0 0 0 / 0.2);
      padding: 24px;
      color: #1C2025;

      & .modal-title {
        margin: 0;
        line-height: 1.5rem;
        margin-bottom: 8px;
        display: flex;
        .close-button {
          cursor: pointer;
        }
      }

    `,
);

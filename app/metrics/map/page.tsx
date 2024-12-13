'use client'
import dynamic from 'next/dynamic';
// const LeafletInfoMap = dynamic(() => import("@/components/LeafletInfoMap"), { ssr: false });
import React from "react";

export default function MapMetrics() {
    const LeafletInfoMap = React.useMemo(() => dynamic(
        () => import("@/components/LeafletInfoMap"),
        {
            loading: () => <p>A map is loading</p>,
            ssr: false
        }
    ), [])
    return <LeafletInfoMap />
}
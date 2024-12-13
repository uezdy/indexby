'use client'
import dynamic from 'next/dynamic';
const LeafletInfoMap = dynamic(() => import("@/components/LeafletInfoMap"), { ssr: false })

export default function MapMetrics() {
    return <>
        <LeafletInfoMap />
    </>
}
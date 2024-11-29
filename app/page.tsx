'use client'

import { usePathname } from 'next/navigation';

export default function Page() {
    const pathname = usePathname();
    return (
        <div>
            <h1>My Family Tree</h1>
            <a href={`${pathname}me`}>I&apos;m</a>
        </div>
    )
}
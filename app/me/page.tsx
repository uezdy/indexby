'use client'

import React from "react";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Page() {
    const pathname = usePathname();
    return <>
        <h1>I&apos;m</h1>
        <ul>
            <li>
                <Link href={`${pathname}/father`}>father</Link>
            </li>
            <li>
                <Link href={`${pathname}/mother`}>mother</Link>
            </li>
        </ul>
    </>
}
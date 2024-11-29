'use client'

import React from 'react';
import type { Metadata } from 'next'
import { usePathname } from 'next/navigation';
import {Button} from "@/components/button";
import '@/styles/styles.css'

export const metadata: Metadata = {
    title: 'My family tree',
    description: 'My family tree'
}

export default function Page() {
    const pathname = usePathname();
    return (
        <div>
            <h1>My Family Tree</h1>
            <a href={`${pathname}/me`}>I&apos;m</a>
        </div>
    )
}
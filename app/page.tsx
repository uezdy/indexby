import React from 'react';
import type { Metadata } from 'next'
import {Button} from "@/components/button";
import '@/styles/styles.css'

export const metadata: Metadata = {
    title: 'My family tree',
    description: 'My family tree'
}

export default function Page() {
    return (
        <div>
            <h1>Hello World</h1>
            <a href="/im">I&apos;m</a>
        </div>
    )
}
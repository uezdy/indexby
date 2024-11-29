// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
import React from "react";

export default function Page() {
    return <>
        <h1>I&apos;m</h1>
        <ul>
            <li>
                <a href="/im/father">father</a>
            </li>
            <li>
                <a href="/im/mother">mother</a>
            </li>
        </ul>
    </>
}
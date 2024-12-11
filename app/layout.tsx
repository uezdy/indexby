import React from 'react';
import {NavLinks} from "./ui/nav-links";

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="en">
        <body style={{margin: '0'}}>
            {/*<NavLinks />*/}
            {children}
        </body>
        </html>
    )
}
import React from 'react';
import {NavLinks} from "./ui/nav-links";

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <head>
            <meta charSet="UTF-8"></meta>
            <meta name="robots" content="index, follow"></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        </head>
        <body style={{margin: '0'}}>
        {/*<NavLinks />*/}
        {children}
        </body>
        </html>
    )
}
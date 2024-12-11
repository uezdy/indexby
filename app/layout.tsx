import React from 'react';
import {NavLinks} from "./ui/nav-links";

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="en">
        <body>
            {/*<NavLinks />*/}
            {children}
        </body>
        </html>
    )
}
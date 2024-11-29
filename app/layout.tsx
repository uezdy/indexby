import React from 'react';

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="en">
        <head>
            <title>12343221</title>
        </head>
        <body>{children}</body>
        </html>
    )
}
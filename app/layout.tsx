import React from 'react';

export const metadata =  {
    title: 'Проект индексации',
    description: `Проект индексации архивных документов Беларуси: Метрических книг, Ревизских сказок, Исповедных ведомостей, переписей населения и других списков`,
    other: {
        robots: "index, follow",
        viewport: "width=device-width, initial-scale=1"
    },
}


export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="ru">
        <head>
            <meta charSet="UTF-8"></meta>
        </head>
        <body>
            {children}
        </body>
        </html>
    )
}
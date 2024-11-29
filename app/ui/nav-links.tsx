'use client'

import { usePathname } from 'next/navigation';
import Link from 'next/link'
import '@/styles/styles.css'

export function NavLinks() {
    const pathname = usePathname();

    return (
        <nav>

            {
                pathname
                    .split('/')
                    .map((el: string, index: number, array: Array<string>) =>
                        <Link
                            key={index}
                            className={`link ${pathname === array.slice(0, index +1).join('/') ? 'active' : ''}`}
                            href={array.slice(0, index +1).join('/')}>{el}</Link>)
            }
        </nav>
    )
}
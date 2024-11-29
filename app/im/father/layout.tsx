export default function DashboardLayout({children}: {children: React.ReactNode}) {
    return (
        <section>
            <nav>Father&apos;s tree</nav>
            {children}
        </section>
    )
}
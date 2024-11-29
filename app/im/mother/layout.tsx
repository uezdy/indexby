export default function DashboardLayout({children}: {children: React.ReactNode}) {
    return (
        <section>
            <nav>Mother&apos;s tree</nav>
            {children}
        </section>
    )
}
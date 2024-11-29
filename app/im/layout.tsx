export default function DashboardLayout({children}: {children: React.ReactNode}) {
    // const pathname = location?.pathname.split('/');
    return (
        <section>
            <nav>My family tree</nav>
            {children}
        </section>
    )
}
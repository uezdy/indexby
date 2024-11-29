export default function Template({ children }: { children: React.ReactNode }) {
    return <>
        <h3>Template</h3>
        <div>{children}</div>
    </>
}
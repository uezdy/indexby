import HelloPage from "@/components/HelloPage";
import localFont from 'next/font/local';

// Font files can be colocated inside of `pages`
const monomakh = localFont({ src: './MonomakhUnicode.otf',
    variable: '--monomakh-unicode'
})


export const metadata =  {
    title: 'Метрическаѧ кни́га',
    description: 'sss'

}
export default function Metrics() {
    return <div className={monomakh.variable}>
        <HelloPage />
    </div>
}
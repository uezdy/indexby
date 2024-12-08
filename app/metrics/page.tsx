import HelloPage from "@/components/HelloPage";
import localFont from 'next/font/local';

// Font files can be colocated inside of `pages`
const myFont = localFont({ src: './MonomakhUnicode.otf' })


export const metadata =  {
    title: 'Метрическаѧ кни́га',
    description: 'sss'

}
export default function Metrics() {
    return <>
        <HelloPage className={myFont.className} />
    </>
}
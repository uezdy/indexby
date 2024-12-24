import HelloPage from "@/components/HelloPage";
import localFont from 'next/font/local';

// Font files can be colocated inside of `pages`
const monomakh = localFont({
    fallback: ['Monomakh Unicode'],
    src: './MonomakhUnicode.otf',
    variable: '--monomakh-unicode'
})


export const metadata =  {
    title: 'Метрическаѧ кни́га',
    description: `Проект индексации метрических книг. Отсутствие фамилий в метриках, плохая их сохранность, отсутствие МК на familysearch.org  и сложность доступа к МК в НИАБ - заставило нас объединиться для создании базы по всем сохранившимся МК в наших волостях. Основная идея индексации: Индексируя свою церковь - вы помогаете соседям! Часто крестьяне светились в соседних церквях попечителями или крестными в МК. При отсутствии фамилий, только полная выборка всех крестьян по деревне поможет понять кто ваш предок. Индексация - это огромный труд. Мы уже несколько лет индексируем сохранившиеся МК, потому доступ к базе только за вклад в базу, т.е. за индексацию.`,
    icons: {
        icon: '/favicon.svg'
    }
}
export default function Metrics() {
    return <div className={monomakh.variable}>
        <HelloPage />
    </div>
}
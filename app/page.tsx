import Link from 'next/link';

import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import Home from '@mui/icons-material/Home';

import '@/styles/styles.css';

export default function Page() {
    return <>
        <List
            role="menubar"
            orientation="horizontal"
            size="lg"
            variant="outlined"
            sx={{
                '--List-radius': '8px',
                '--List-padding': '4px',
                '--List-gap': '8px',
                '--ListItem-gap': '0px',
            }}
        >
            <ListItem><ListItemButton><Link href="/"><Home /></Link></ListItemButton></ListItem>
            <ListItem><ListItemButton><Link href="/names">Имена</Link></ListItemButton></ListItem>
            <ListItem><ListItemButton><Link href="/metrics">Метрические книги</Link></ListItemButton></ListItem>
        </List>
    </>
}
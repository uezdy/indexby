import Link from 'next/link';

import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import Home from '@mui/icons-material/Home';

export default function Page() {
    return <>
        <List
            size="lg"
            variant="outlined"
            sx={{ maxWidth: 300, borderRadius: 'sm' }}
        >
            <ListItem><ListItemButton><Link href="/"><Home /></Link></ListItemButton></ListItem>
            <ListItem><ListItemButton><Link href="/names">Имена</Link></ListItemButton></ListItem>
            <ListItem><ListItemButton><Link href="/metrics">Метрические книги</Link></ListItemButton></ListItem>
        </List>
    </>
}
'use client'
import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';

export default function DocsTabs({hit}: any) {
    const {indexed, sdi} = hit;
    const reduce = (ind = '') => {
        const [, ...other] = ind.split(' ');
        return other.join(' ');
    }
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Сохранилось</TableCell>
                        <TableCell align="right">Оцифровано</TableCell>
                        <TableCell align="right">Проиндексировано</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        sdi.map((row: any, index: number) => (
                            <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row[0]}
                                </TableCell>
                                <TableCell align="right">
                                    {row[1] === row[0] ? <CheckCircleOutlinedIcon /> : <></>}
                                </TableCell>
                                <TableCell align="right">
                                    {
                                        row[0] &&
                                        reduce(indexed?.find((ind: string) => {
                                            const [fod] = ind.split(' ');
                                            return !!~row[0].indexOf(fod);
                                        }))
                                    }
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
}

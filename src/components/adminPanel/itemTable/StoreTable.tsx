import React from 'react';
import { useNavigate } from "react-router-dom";

import { Table, TableContainer, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { Button, Paper, Container } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DoNotDisturbOnIcon from '@mui/icons-material/DoNotDisturbOn';

import { useLang } from 'hooks/useLang';

import { IStoreItem } from 'types/storeTypes';

interface IStoreTable {
    itemList: IStoreItem[]
}

const StoreTable: React.FC<IStoreTable> = ({ itemList }) => {

    const navigate = useNavigate();
    const lang = useLang();

    const handleClick = (itemId: string) => {
        if (itemId) {
            navigate(`/admin/store/${itemId}`);
        }
    };

    const rows = itemList.map(item => {
        return {
            name: item.title[lang] + ' ' + item.itemName[lang],
            price: item.price,
            position: item.position,
            hidden: item.hidden ? <DoNotDisturbOnIcon color='error'/> : <CheckCircleIcon color='primary'/>,
            edit: <Button onClick={() => handleClick(item._id)}>Edit</Button>
        };
    });

    return (
        <Container maxWidth='lg'>
            <TableContainer component={Paper} sx={{ mb: 3 }}>
                <Table aria-label="store items table">
                    <TableHead sx={{ backgroundColor: '#ddd' }}>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="center">Price</TableCell>
                            <TableCell align="center">Position</TableCell>
                            <TableCell align="center">Visible</TableCell>
                            <TableCell align="center">Edit</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="center">{row.price}</TableCell>
                                <TableCell align="center">{row.position}</TableCell>
                                <TableCell align="center">{row.hidden}</TableCell>
                                <TableCell align="center">{row.edit}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default StoreTable;
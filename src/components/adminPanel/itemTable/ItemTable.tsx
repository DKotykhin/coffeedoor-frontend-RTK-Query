import React from 'react';
import { useNavigate } from "react-router-dom";

import { Table, TableContainer, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { Button, Paper } from '@mui/material';

import { IStoreItem } from 'types/storeTypes';

const ItemTable: React.FC<{ itemList: IStoreItem[] }> = ({ itemList }) => {

    const navigate = useNavigate();

    const handleClick = (itemId: string) => {
        if (itemId) {
            navigate(`/admin/${itemId}`);
        }
    };

    const rows = itemList.map(item => {
        return {
            name: item.title.ua + ' ' + item.itemName.ua,
            price: item.price,
            edit: <Button onClick={() => handleClick(item._id)}>Edit</Button>
        }
    });

    return (
        <TableContainer component={Paper} sx={{ m: 2, width: 700 }}>
            <Table aria-label="store items table">
                <TableHead sx={{ backgroundColor: '#ddd' }}>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Price</TableCell>
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
                            <TableCell align="right">{row.price}</TableCell>
                            <TableCell align="center">{row.edit}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default ItemTable;
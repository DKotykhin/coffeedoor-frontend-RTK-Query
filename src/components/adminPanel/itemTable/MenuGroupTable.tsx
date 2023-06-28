import React from 'react';

import { useNavigate } from "react-router-dom";

import { Table, TableContainer, TableBody, TableCell, TableHead, TableRow, Container } from '@mui/material';
import { Button, Paper } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DoNotDisturbOnIcon from '@mui/icons-material/DoNotDisturbOn';

import { useLang } from 'hooks/useLang';

import { IMenuGroup } from 'types/menuTypes';

interface IMenuGroupTable {
    itemList: IMenuGroup[],
}

const MenuGroupTable: React.FC<IMenuGroupTable> = ({ itemList }) => {
    const navigate = useNavigate();
    const lang = useLang();

    const handleClickEdit = (groupId: string) => {
        if (groupId) {
            navigate(`/admin/menuGroup/${groupId}`);
        }
    };

    const rows = itemList.map(item => {
        return {
            title: item.title[lang],
            subtitle: item.subtitle ? item.subtitle[lang] : "",
            position: item.position,
            hidden: item.hidden ? <DoNotDisturbOnIcon color='error' /> : <CheckCircleIcon color='primary' />,
            edit: <Button onClick={() => handleClickEdit(item._id)}>Edit</Button>,
        };
    });

    return (
        <Container maxWidth='lg'>
            <TableContainer component={Paper} sx={{ mb: 3 }}>
                <Table aria-label="store items table">
                    <TableHead sx={{ backgroundColor: '#ddd' }}>
                        <TableRow>
                            <TableCell>Title</TableCell>
                            <TableCell>Subtitle</TableCell>
                            <TableCell align="center">Position</TableCell>
                            <TableCell align="center">Visible</TableCell>
                            <TableCell align="center">Edit</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.title}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.title}
                                </TableCell>
                                <TableCell>{row.subtitle}</TableCell>
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

export default MenuGroupTable;
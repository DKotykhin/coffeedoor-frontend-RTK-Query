import React from 'react';
import { format } from "date-fns";
import { useTranslation } from 'react-i18next';

import { Table, TableContainer, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { Paper } from '@mui/material';

import { IBasket } from 'types/basketTypes';
import { IUserOrder } from 'types/orderTypes';

const OrderTable: React.FC<{ orders: IUserOrder }> = ({ orders }) => {

    const { basketData, orderSum, createdAt, orderQuantity } = orders;

    const { t } = useTranslation("personal");

    const rows = basketData?.map((item: IBasket) => {
        return {
            name: item.title + ' ' + item.itemName + ', ' + item.weight + 'г',
            price: item.price,
            quantity: item.quantity,
            sum: item.price * item.quantity,
        }
    });

    return (
        <TableContainer component={Paper} sx={{ my: 3 }}>
            <Table aria-label="store items table">
                <TableHead sx={{ backgroundColor: '#97c9cf' }}>
                    <TableRow>
                        <TableCell>{t("tableName")}</TableCell>
                        <TableCell align="center">{t("tablePrice")}</TableCell>
                        <TableCell align="center">{t("tableQuantity")}</TableCell>
                        <TableCell align="center">{t("tableSum")}</TableCell>
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
                            <TableCell align="center">{row.quantity}</TableCell>
                            <TableCell align="center">{row.sum}</TableCell>
                        </TableRow>
                    ))}
                    <TableRow sx={{ backgroundColor: '#ddd' }}>
                        <TableCell>{t("tableDate")} {format(new Date(createdAt), "dd'.'LL'.'yyyy")}</TableCell>
                        <TableCell sx={{ fontWeight: 700 }}>{t("tableTotal")}</TableCell>
                        <TableCell align="center" sx={{ fontWeight: 700 }}>{orderQuantity}</TableCell>
                        <TableCell align="center" sx={{ fontWeight: 700 }}>{orderSum}</TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default OrderTable;
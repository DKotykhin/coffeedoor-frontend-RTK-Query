import React from 'react';
import { useTranslation } from 'react-i18next';

import { Typography } from '@mui/material';

import { useGetUserOrdersQuery } from 'services/orderService';

import OrderTable from './OrderTable';

const OrderTab: React.FC = () => {

    const { data, isSuccess } = useGetUserOrdersQuery();
    const { t } = useTranslation("personal");

    const totalSum = data ? data.orders.reduce((accumulator, currentValue) => accumulator + currentValue.orderSum, 0) : 0;

    return isSuccess ? (
        <>
            <Typography>{t("orderTitle")}</Typography>
            {data?.orders.length
                ?
                <>
                    {data.orders.map(order => (
                        <OrderTable key={order._id} orders={order} />
                    ))}
                    <Typography>{t("orderQuantity")} {data.orders.length}</Typography>
                    <Typography>{t("orderSum")} {totalSum} {t("orderCurrency")}</Typography>
                </>
                :
                <Typography>{t("orderEmpty")}</Typography>
            }
        </>
    ) : null
}

export default OrderTab;
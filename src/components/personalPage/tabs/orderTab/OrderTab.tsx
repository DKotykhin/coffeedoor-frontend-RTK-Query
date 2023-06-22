import React from 'react';
import { useTranslation } from 'react-i18next';

import { Typography } from '@mui/material';

import { useGetUserOrdersQuery } from 'services/orderService';

import OrderTable from './OrderTable';

const OrderTab: React.FC = () => {

    const { data, isSuccess } = useGetUserOrdersQuery();
    const { t } = useTranslation("personal");

    return isSuccess ? (
        <>
            <Typography>{t("orderTitle")}</Typography>
            {data?.orders.length
                ?
                <>
                    {data.orders.map(order => (
                        <OrderTable key={order._id} orders={order} />
                    ))}
                    <Typography>{t("orderQuantity")} {data.statistic.totalCount}</Typography>
                    <Typography>{t("orderSum")} {data.statistic.totalSum} {t("orderCurrency")}</Typography>
                    <Typography>{t("orderAvg")} {data.statistic.averageSum} {t("orderCurrency")}</Typography>
                </>
                :
                <Typography>{t("orderEmpty")}</Typography>
            }
        </>
    ) : null
}

export default OrderTab;
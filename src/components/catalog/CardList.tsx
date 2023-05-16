import React from 'react';
import { useTranslation } from 'react-i18next';

import { Box, Container, Typography } from "@mui/material";

import ItemCard from 'components/card/Card';

import { IStoreItem } from 'types/storeTypes';

import styles from './cardlist.module.scss';

interface ICardList {
    group: string,
    title: string,
    subtitle: string,
    data: IStoreItem[],
}

const CardList: React.FC<ICardList> = ({ group, title, subtitle, data }) => {

    const { t } = useTranslation('catalog');

    return (
        <Container id={group} maxWidth="xl" className={styles.cardList}>
            <Typography className={styles.cardList__title}>{t(title)}</Typography>
            <Typography className={styles.cardList__subtitle}>
                {t(subtitle)}
            </Typography>
            <Box className={styles.cardList__grid}>
                {data.filter(item => item.group === group).map((item, i) => (
                    <ItemCard key={i} {...item} />
                ))}
            </Box>
        </Container>
    )
}

export default CardList;
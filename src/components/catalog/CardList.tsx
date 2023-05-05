import React from 'react';
import { useTranslation } from 'react-i18next';

import { Container, Typography, Box } from "@mui/material";

import styles from './cardlist.module.scss';

import { IStoreItem } from 'types/storeTypes';
import { Languages } from 'types/menuTypes';

interface ICardList {
    group: string,
    title: string,
    subtitle: string,
    data: IStoreItem[],
}

const CardList: React.FC<ICardList> = ({ group, title, subtitle, data }) => {

    const { t, i18n } = useTranslation('catalog');
    let lang: Languages;
    switch (i18n.language) {
        case 'ua': lang = 'ua';
            break;
        case 'ru': lang = 'ru';
            break;
        case 'en': lang = 'en';
            break;
        default: lang = 'ua';
    }

    return (
        <Container id={group} maxWidth="xl" className={styles.cardList}>
            <Typography className={styles.cardList__title}>{t(title)}</Typography>
            <Typography className={styles.cardList__subtitle}>
                {t(subtitle)}
            </Typography>
            {data.filter(item => item.group === group).map((item, i) => (
                <Box key={i}>{item.title[lang]} - {item.itemName[lang]}</Box>
            ))}
        </Container>
    )
}

export default CardList;
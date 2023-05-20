import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Box, Container, Typography } from "@mui/material";

import ItemCard from 'components/card/Card';
import FilterItem from 'components/filter/FilterItem';

import { IStoreItem } from 'types/storeTypes';
import { Languages } from 'types/menuTypes';

import styles from './cardlist.module.scss';

interface ICardList {
    item: {
        group: string,
        title: string,
        subtitle: string,
    }
    data: IStoreItem[],
}

const CardList: React.FC<ICardList> = ({ item, data }) => {

    const { group, title, subtitle } = item;

    const [filterKey, setFilterKey] = useState<string | undefined>();
    const [filterValue, setFilterValue] = useState<(string | undefined)[]>();
    const [arrayLength, setArrayLength] = useState<number>();
    const [itemArray, setItemArray] = useState<IStoreItem[]>(data);

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
    };

    useEffect(() => {
        const filterKeyArray = data.map(item => item.sort?.key[lang])
        if (filterKeyArray.length) {
            const filterKey = [...new Set(filterKeyArray)];
            setFilterKey(filterKey[0]);
        }
        const filterValueArray = data.map(item => item.sort?.value[lang])
        if (filterValueArray.length) {
            let filterValue = [...new Set(filterValueArray)];
            const all = t("all_button");
            filterValue = [all, ...filterValue];
            setFilterValue(filterValue);
        }
    }, [data, lang, t]);

    const onSelected = (filterLabel: string | undefined | null) => {
        const filteredArray = data.filter(item => {
            if (filterLabel !== t("all_button"))
                return item.sort?.value[lang] === filterLabel
            else return true
        })
        setItemArray(filteredArray);
        setArrayLength(filteredArray.length)
    };

    return (
        <Container id={group} maxWidth="xl" className={styles.cardList}>
            <Typography className={styles.cardList__title}>{t(title)}</Typography>
            <Typography className={styles.cardList__subtitle}>
                {t(subtitle)}
            </Typography>
            {filterKey && <FilterItem
                filterKey={filterKey}
                filterValue={filterValue}
                arrayLength={arrayLength}
                onSelected={onSelected}
            />}
            <Box className={styles.cardList__grid}>
                {itemArray.map(item => (
                    <ItemCard key={item._id} item={item} lang={lang} />
                ))}
            </Box>
        </Container>
    )
}

export default CardList;
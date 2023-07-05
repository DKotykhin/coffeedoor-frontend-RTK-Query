import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from 'framer-motion';

import { Box, Container, Typography } from "@mui/material";
import useMediaQuery from '@mui/material/useMediaQuery';

import ItemCard from 'components/card/Card';
import FilterItem from 'components/filter/FilterItem';

import { useLang } from 'hooks/useLang';

import { IStoreItem } from 'types/storeTypes';

import styles from './cardlist.module.scss';
import "swiper/css";

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
    const lang = useLang();

    const [filterKey, setFilterKey] = useState<string | undefined>();
    const [filterValue, setFilterValue] = useState<(string | undefined)[]>();
    const [arrayLength, setArrayLength] = useState<number>();
    const [itemArray, setItemArray] = useState<IStoreItem[]>(data);

    const matches = useMediaQuery('(min-width:1250px)');

    const { t } = useTranslation('catalog');

    useEffect(() => {
        const filterKeyArray = data.map(item => item.sort?.key[lang]);
        if (filterKeyArray.length) {
            const filterKey = [...new Set(filterKeyArray)];
            setFilterKey(filterKey[0]);
        }
        const filterValueArray = data.map(item => item.sort?.value[lang]);
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
                return item.sort?.value[lang] === filterLabel;
            else return true;
        });
        setItemArray(filteredArray);
        setArrayLength(filteredArray.length);
    };

    return (
        <Container id={group} maxWidth="xl" className={styles.cardList} >
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
            {matches ?
                <Box className={styles.cardList__grid}>
                    {itemArray.map(item => (
                        <ItemCard key={item._id} item={item} lang={lang} />
                    ))}
                </Box>
                :
                <Swiper
                    slidesPerView={1.1}
                    spaceBetween={15}
                    breakpoints={{
                        600: {
                            slidesPerView: 1.5,
                            threshold: 20
                        },
                        850: {
                            slidesPerView: 2.2,
                            threshold: 20
                        },
                    }}
                    navigation={true}
                    grabCursor={true}
                >
                    {itemArray.map((item) => (
                        <SwiperSlide key={item._id}>
                            <motion.section
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.6 }}
                            >
                            <ItemCard item={item} lang={lang} />
                        </motion.section>
                        </SwiperSlide>
                    ))}
        </Swiper>
            }
        </Container >
    );
};

export default CardList;
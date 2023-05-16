import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Button, Typography, Box } from '@mui/material';
import { Card, CardContent, CardMedia, CardActionArea, CardActions } from '@mui/material';

import DetailedCard from 'components/detailedCard/DetailedCard';

import { useAppDispatch } from "store/reduxHooks";
import { basketAddItems } from "store/basketSlice";

import waitImage from 'images/webp/wait_1.webp';

import { IStoreItem } from 'types/storeTypes';
import { Languages } from 'types/menuTypes';

import styles from './card.module.scss';

const Base_URL = process.env.REACT_APP_BACKEND_URL;

const ItemCard: React.FC<IStoreItem> = (item) => {

    const [openModal, setOpenModal] = useState(false);
    const dispatch = useAppDispatch();

    const image = item.images?.length ? Base_URL + item.images[0] : waitImage;

    const { t, i18n } = useTranslation("card");
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

    const detailClick = () => setOpenModal(true);
    const closeModal = () => setOpenModal(false);

    return (
        <Card raised className={styles.card}>
            <CardActionArea onClick={detailClick}>
                <CardMedia
                    component="img"
                    height="350"
                    image={image}
                    alt={item.itemName[lang]}
                />
                <CardContent className={styles.card__content}>
                    <Typography gutterBottom variant="h5" component="div">
                        {item.title[lang]} {item.itemName[lang]}
                    </Typography>
                    <Typography className={styles.card__price}>
                        {item.price} {t("currency")}
                    </Typography>
                    <Typography className={styles.card__description}>
                        {item.description[lang]}
                    </Typography>
                    <Box className={styles.card__boxItems}>
                        {item.order &&
                            <Typography color="error">
                                {t("order")}
                            </Typography>
                        }
                        {item.weight &&
                            <Typography color='secondary.light'>
                                {t("weight")}{item.weight}{t("unit")}
                            </Typography>
                        }
                        {item.sort?.key &&
                            <Typography color='secondary.light'>
                                {item.sort.key[lang]}{": "} {item.sort.value[lang]}
                            </Typography>
                        }
                    </Box>
                </CardContent>
            </CardActionArea>
            <CardActions className={styles.card__buttons}>
                <Button color="primary" onClick={detailClick}>
                    {t("button_1")}
                </Button>
                <Button color="primary"
                    onClick={() =>
                        dispatch(
                            basketAddItems({
                                title: item.title[lang],
                                itemName: item.itemName[lang],
                                price: item.price,
                                weight: item.weight,
                                quantity: 1,
                                id: item._id,
                            })
                        )
                    }>
                    {t("button_2")}
                </Button>
            </CardActions>
            <DetailedCard item={item} lang={lang} image={image} openModal={openModal} closeModal={closeModal} />
        </Card>
    )
}

export default ItemCard;
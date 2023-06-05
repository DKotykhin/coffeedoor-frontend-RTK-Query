import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Button, Typography, Box } from '@mui/material';
import { Card, CardContent, CardMedia, CardActionArea, CardActions } from '@mui/material';

import DetailedCard from 'components/detailedCard/DetailedCard';

import { useAppDispatch } from "store/reduxHooks";
import { basketAddItems } from "store/basketSlice";

import waitImage from 'images/webp/wait_1.webp';

import { IStoreItem } from 'types/storeTypes';
import { Languages } from "hooks/useLang";

import styles from './card.module.scss';

const Base_URL = process.env.REACT_APP_BACKEND_URL;

interface IItemCard {
    item: IStoreItem,
    lang: Languages,
}

const ItemCard: React.FC<IItemCard> = ({ item, lang }) => {

    const { _id, itemName, title, images, price, description, order, weight, sort } = item;

    const [openModal, setOpenModal] = useState(false);
    const dispatch = useAppDispatch();

    const image = images?.length ? Base_URL + images[0] : waitImage;

    const { t } = useTranslation("card");

    const detailClick = () => setOpenModal(true);
    const closeModal = () => setOpenModal(false);

    return (
        <Card raised className={styles.card}>
            <CardActionArea onClick={detailClick}>
                <CardMedia
                    component="img"
                    height="100%"
                    image={image}
                    alt={itemName[lang]}
                />
                <CardContent className={styles.card__content}>
                    <Typography gutterBottom variant="h5" component="div">
                        {title[lang]} {itemName[lang]}
                    </Typography>
                    <Typography className={styles.card__price}>
                        {price} {t("currency")}
                    </Typography>
                    <Typography className={styles.card__description}>
                        {description[lang]}
                    </Typography>
                    <Box className={styles.card__boxItems}>
                        {order &&
                            <Typography color="error">
                                {t("order")}
                            </Typography>
                        }
                        {weight &&
                            <Typography color='secondary.light'>
                                {t("weight")}{weight}{t("unit")}
                            </Typography>
                        }
                        {sort?.key &&
                            <Typography color='secondary.light'>
                                {sort.key[lang]}{": "} {sort.value[lang]}
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
                                title: title[lang],
                                itemName: itemName[lang],
                                price,
                                weight,
                                quantity: 1,
                                id: _id,
                            })
                        )
                    }>
                    {t("button_2")}
                </Button>
            </CardActions>
            <DetailedCard item={item} lang={lang} openModal={openModal} closeModal={closeModal} />
        </Card>
    )
}

export default ItemCard;
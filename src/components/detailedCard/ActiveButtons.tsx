import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Button, Typography } from "@mui/material";

import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

import { useAppDispatch } from "store/reduxHooks";
import { basketAddItems } from "store/basketSlice";

import waitImage from 'images/webp/wait_1.webp';

import { IStoreItem } from 'types/storeTypes';
import { Languages } from "hooks/useLang";

import styles from './activeButtons.module.scss';

const Base_URL = process.env.REACT_APP_BACKEND_URL;

interface IActiveButtons {
    item: IStoreItem,
    lang: Languages,
    closeModal: () => void,
}

const ActiveButtons: React.FC<IActiveButtons> = ({ item, lang, closeModal }) => {

    const { _id, itemName, title, price, weight, images } = item;

    const image = images?.length ? Base_URL + images[0] : waitImage;

    const [quantity, setQuantity] = useState<number>(1);
    const dispatch = useAppDispatch();
    const { t } = useTranslation("card");

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };
    const handleIncrement = () => {
        setQuantity(quantity + 1);
    };

    const handleBasket = () => {
        closeModal();
        dispatch(basketAddItems({
            title: title[lang],
            itemName: itemName[lang],
            price,
            weight,
            image,
            quantity,
            id: _id,
        }));
    };

    return (
        <Typography className={styles.buttons}>
            <RemoveCircleOutlineIcon
                className={styles.buttons__remove}
                onClick={handleDecrement}
            />
            {quantity}
            <AddCircleOutlineIcon
                className={styles.buttons__add}
                onClick={handleIncrement}
            />
            <Button className={styles.buttons__submit} onClick={handleBasket}>
                {t("button_2")}
            </Button>
        </Typography>
    );
};

export default ActiveButtons;
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Button, Typography } from "@mui/material";

import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

import { useAppDispatch } from "store/reduxHooks";
import { basketAddItems } from "store/basketSlice";

import { IStoreItem } from 'types/storeTypes';
import { Languages } from 'types/menuTypes';

import styles from './activeButtons.module.scss';

interface IActiveButtons {
    item: IStoreItem,
    lang: Languages,
    closeModal: () => void,
}

const ActiveButtons: React.FC<IActiveButtons> = ({ item, lang, closeModal }) => {

    const { _id, itemName, title, price, weight } = item;

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
    )
}

export default ActiveButtons;
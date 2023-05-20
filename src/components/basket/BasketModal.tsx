import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import { Box, Modal, Typography, Backdrop, Fade, Divider } from '@mui/material';
import CloseIcon from "@mui/icons-material/Close";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

import BasketIcon from 'components/basket/BasketIcon';
import BasketForm from './BasketForm';
import { useSendBasketDataMutation } from 'services/storeService';

import {
    basketRemoveItems,
    basketAddQuantity,
    basketRemoveQuantity,
    basketSetEmpty
} from "store/basketSlice";
import { useAppDispatch, useAppSelector } from "store/reduxHooks";
import { selectBasket } from "store/selectors";

import { IBasket, IFormData, IFullData } from 'types/basketType';

import styles from './basketModal.module.scss';

const BasketModal: React.FC = () => {

    const [openModal, setOpenModal] = useState(false);
    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);

    const { t } = useTranslation("basket");

    const navigate = useNavigate();

    const { basketData } = useAppSelector(selectBasket);
    const dispatch = useAppDispatch();

    const [sendData] = useSendBasketDataMutation();

    const handleRemove = (basketItem: string): void => {
        dispatch(basketRemoveItems(basketItem));
    };
    const handleDecrement = (basketItem: string): void => {
        dispatch(basketRemoveQuantity(basketItem));
    };
    const handleIncrement = (basketItem: string): void => {
        dispatch(basketAddQuantity(basketItem));
    };

    const onSubmitForm = async (userData: IFormData): Promise<void> => {
        const fullData: IFullData = {
            userData,
            basketData
        }
        console.log(fullData);
        setOpenModal(false);
        await sendData(fullData)
            .unwrap()
            .then(response => {
                console.log(response.message);
                dispatch(basketSetEmpty());
                navigate("/thanks");
            })
    };

    return (
        <>
            <BasketIcon handleOpen={handleOpen} />
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={openModal}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={openModal}>
                    <Box className={styles.basketModal}>
                        <CloseIcon
                            className={styles.basketModal__closeBasket}
                            onClick={handleClose}
                        />
                        <Typography
                            className={styles.basketModal__title}
                            component="h2"
                        >
                            {t("title")}
                        </Typography>
                        <Divider />
                        {basketData.length > 0 ? (
                            basketData.map((item: IBasket, i: number) => (
                                <Box key={i}>
                                    <Box className={styles.basketModal__block}>
                                        <Typography className={styles.basketModal__itemName}>
                                            {item.title}
                                            {" "}
                                            {item.itemName}
                                            {item.weight ? `, ${item.weight}${t("weight")}` : ""}
                                        </Typography>
                                        <CloseIcon
                                            className={styles.basketModal__removeItem}
                                            onClick={() =>
                                                handleRemove(item.id)
                                            }
                                        />
                                    </Box>
                                    <Typography className={styles.basketModal__price}>
                                        <RemoveCircleOutlineIcon
                                            className={styles.basketModal__quantityIcons}
                                            onClick={() =>
                                                handleDecrement(item.id)
                                            }
                                        />{" "}
                                        {item.quantity}{" "}
                                        <AddCircleOutlineIcon
                                            className={styles.basketModal__quantityIcons}
                                            onClick={() =>
                                                handleIncrement(item.id)
                                            }
                                        />
                                        {" x "}
                                        {item.price}
                                        {t("currency")}{" = "}
                                        {item.quantity * item.price}
                                        {t("currency")}
                                    </Typography>
                                    <Divider sx={{ mt: 2 }} />
                                </Box>
                            ))
                        ) : (
                            <Box className={styles.basketModal__subtitle}>
                                {t("message")}
                            </Box>
                        )}
                        <Typography className={styles.basketModal__total}>
                            {t("total")}
                            {basketData.reduce(
                                (sum: number, currentValue: { price: number; quantity: number; }) =>
                                    sum +
                                    +currentValue.price * currentValue.quantity,
                                0
                            )}
                            {t("currency")}
                        </Typography>
                        <BasketForm onSubmit={onSubmitForm} />
                    </Box>
                </Fade>
            </Modal>
        </>
    )
}

export default BasketModal;
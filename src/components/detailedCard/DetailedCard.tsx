import React from 'react';
import { useTranslation } from 'react-i18next';

import { Backdrop, Box, Modal, Fade, Typography } from '@mui/material';
import CloseIcon from "@mui/icons-material/Close";

import { IStoreItem } from 'types/storeTypes';
import { Languages } from 'types/menuTypes';

import styles from './detailedCard.module.scss';

// const style = {
//     bgcolor: 'background.paper',
//     boxShadow: 24,
// };

interface IDetailedCard {
    item: IStoreItem,
    lang: Languages,
    image: string,
    openModal: boolean,
    closeModal: () => void,
}

const DetailedCard: React.FC<IDetailedCard> = ({ item, lang, image, openModal, closeModal }) => {

    const { t } = useTranslation("card");

    const handleClose = () => {
        closeModal();
    };

    return (
        <div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={openModal}
                onClose={closeModal}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={openModal}>
                    <Box className={styles.modal}>
                        <CloseIcon
                            className={styles.modal__close}
                            onClick={handleClose}
                        />
                        <Box className={styles.modal__box}>
                            <img src={image} alt={item.itemName[lang]} />
                            <Box className={styles.modal__right}>
                                <Typography variant="h5" component="h2">
                                    {item.title[lang]} {item.itemName[lang]}
                                </Typography>
                                <Typography className={styles.card__price}>
                                    {item.price} {t("currency")}
                                </Typography>
                                <Box>
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
                                    {item.tm &&
                                        <Typography color='secondary.light'>
                                            {t("made")}{item.tm}
                                        </Typography>
                                    }
                                    {item.country &&
                                        <Typography color='secondary.light'>
                                            {t("country")}{item.country[lang]}
                                        </Typography>
                                    }
                                    {item.sort?.key &&
                                        <Typography color='secondary.light'>
                                            {item.sort.key[lang]}{": "} {item.sort.value[lang]}
                                        </Typography>
                                    }
                                </Box>
                            </Box>
                        </Box>
                        <Typography className={styles.card__description}>
                            {item.description[lang]}
                        </Typography>
                        {item.detailText &&
                            <Typography className={styles.card__detailText}>
                                {item.detailText[lang]}
                            </Typography>
                        }
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
}

export default DetailedCard;
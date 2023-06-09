import React from 'react';
import { useTranslation } from 'react-i18next';

import { Container, Typography, Link, Box } from "@mui/material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

import { Phone } from "../footer/footerData";

import styles from "./infoblock.module.scss";

const InfoBlock: React.FC = () => {
    const { t } = useTranslation("info");

    return (
        <Container maxWidth="md" className={styles.infoblock}>
            <Typography className={styles.infoblock__title} component="h1">
                {t("title")}
            </Typography>
            <Typography className={styles.infoblock__subtitle} component="h2">
                {t("subtitle")}
            </Typography>
            <Box className={styles.infoblock__items}>
                <AccessTimeIcon className={styles.infoblock__icon} />
                <Box>
                    <Typography className={styles.infoblock__item_1}>
                        {t("openTimesTitle")}
                    </Typography>
                    <Typography className={styles.infoblock__item_2}>
                        {t("openTimes_1")}
                    </Typography>
                    <Typography className={styles.infoblock__item_2}>
                        {t("openTimes_2")}
                    </Typography>
                </Box>
            </Box>
            <Box className={styles.infoblock__items}>
                <LocalShippingOutlinedIcon className={styles.infoblock__icon} />
                <Box>
                    <Typography className={styles.infoblock__item_1}>
                        {t("deliveryTitle")}
                    </Typography>
                    <Typography className={styles.infoblock__item_2}>
                        {t("deliveryOptions")}
                    </Typography>
                </Box>
            </Box>
            <Box className={styles.infoblock__items}>
                <LocationOnOutlinedIcon className={styles.infoblock__icon} />
                <Box>
                    <Typography className={styles.infoblock__item_1}>
                        {t("contactsTitle")}
                    </Typography>
                    <Typography className={styles.infoblock__item_2}>
                        {t("address")}
                    </Typography>
                    <Link
                        className={styles.infoblock__item_3}
                        href={Phone['href']}
                    >
                        {t("phone")}
                        {Phone['phone']}
                    </Link>
                </Box>
            </Box>
        </Container>
    );
};

export default InfoBlock;

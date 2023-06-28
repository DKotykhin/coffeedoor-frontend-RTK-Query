import React from 'react';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import { Container, Typography } from "@mui/material";

import logo from 'images/webp/logo_700x191.webp';
import ReturnButton from 'components/returnButton/ReturnButton';

import styles from './thanksBlock.module.scss';

const ThanksBlock: React.FC = () => {

    let { t } = useTranslation("thanks");

    return (
        <Container maxWidth="md" className={styles.thanks}>
            <Link to={'/'}>
                <img src={logo} alt='logo Coffeedoor' className={styles.thanks__image} />
            </Link>
            <Typography component="h1" className={styles.thanks__title}>
                {t("title")}
            </Typography>
            <Typography component="h2" className={styles.thanks__subtitle}>
                {t("subtitle")}
            </Typography>
            <ReturnButton />
        </Container>
    );
};

export default ThanksBlock;
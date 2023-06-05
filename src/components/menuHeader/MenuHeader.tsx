import React from 'react';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import { Box, Container, Typography } from '@mui/material';

import { langButtons } from 'hooks/useLang';
import logo from 'images/webp/logo_700x191.webp';

import styles from './menuHeader.module.scss';

const MenuHeader: React.FC = () => {
    const { t, i18n } = useTranslation('menu');

    return (
        <Container maxWidth="md" className={styles.menu}>
            <Link to={'/'}>
                <img src={logo} alt='logo Coffeedoor' className={styles.menu__image} />
            </Link>
            <Typography className={styles.menu__title} component="h2">
                {t("title")}
            </Typography>
            <Typography className={styles.menu__subtitle} component="h3">
                {t("subtitle")}
            </Typography>
            {langButtons.map(item => (
                <Box
                    key={item.key}
                    onClick={() => i18n.changeLanguage(item.key)}
                    className={(i18n.language === item.key) ? styles.menu__langButtonActive : styles.menu__langButton}
                >
                    {item.label}
                </Box>
            ))}
        </Container>
    )
}

export default MenuHeader;
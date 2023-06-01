import React from 'react';
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import { Box, Typography, Button } from '@mui/material';

import styles from './personalHeader.module.scss';

const PersonalHeader: React.FC = () => {

    const { t } = useTranslation("personal");
    const navigate = useNavigate();

    const handleClick = () => navigate('/');

    return (
        <Box className={styles.header}>
            <Typography className={styles.title}>{t("title")}</Typography>
            <Button
                className={styles.button}
                onClick={handleClick}
            >
                {t("return")}
            </Button>
        </Box>
    )
}

export default PersonalHeader;
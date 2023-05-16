import React from 'react';
import { useTranslation } from 'react-i18next';

import { Box, Typography } from '@mui/material';

import styles from './personalHeader.module.scss';

const PersonalHeader: React.FC = () => {
    const { t } = useTranslation("personal");

    return (
        <Box className={styles.header}>
            <Typography className={styles.title}>{t("title")}</Typography>
        </Box>
    )
}

export default PersonalHeader;
import React from 'react';
import { useTranslation } from 'react-i18next';
import { format } from "date-fns";

import { Container, Paper, Typography } from '@mui/material';

import InfoForm from './changeProfile/InfoForm';
import ChangePassword from './changePassword/ChangePassword';

import { IUser } from 'types/userTypes';

import styles from './infoTab.module.scss';

const InfoTab: React.FC<{ user: IUser }> = ({ user }) => {

    const { userName, phone, createdAt } = user;
    const { t } = useTranslation("personal");

    return (
        <Container maxWidth='sm' className={styles.info}>
            <Paper elevation={10} className={styles.info__paper}>
                <Typography className={styles.info__name}>
                    {t("infoGreeting")} {userName}
                </Typography>
                <Typography>{t("infoPhone")} +{phone}</Typography>
                <Typography>
                    {t("infoDate")} {format(new Date(createdAt), "dd'.'LL'.'yyyy")}
                </Typography>
            </Paper>
            <InfoForm user={user} />
            <ChangePassword />
        </Container>
    )
}

export default InfoTab;
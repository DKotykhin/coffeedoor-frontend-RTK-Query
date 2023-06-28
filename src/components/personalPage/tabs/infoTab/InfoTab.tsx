import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { format } from "date-fns";
import { toast } from 'react-toastify';

import { Button, Container, Paper, Typography } from '@mui/material';

import ChildModal from 'components/childModal/ChildModal';
import InfoForm from './changeProfile/InfoForm';
import ChangePassword from './changePassword/ChangePassword';

import { useFetchDeleteUserMutation } from 'services/userService';

import { IUser } from 'types/userTypes';

import styles from './infoTab.module.scss';

const InfoTab: React.FC<{ user: IUser }> = ({ user }) => {

    const { userName, phone, createdAt } = user;
    const [openChildModal, setOpenChildModal] = useState(false);

    const navigate = useNavigate();
    const { t } = useTranslation("personal");

    const [deleteUser, { isLoading }] = useFetchDeleteUserMutation();

    const handleDelete = (): void => setOpenChildModal(true);
    const handleCloseModal = (): void => setOpenChildModal(false);

    const handleSubmitDelete = async () => {
        setOpenChildModal(false);
        await deleteUser()
            .unwrap()
            .then(response => {
                toast.info(response.message);
                console.log(response);
                navigate("/");
            })
            .catch((error: { data: { message: string } }) => {
                toast.error(error.data.message);
            });
    };

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
            <Button
                variant='contained'
                color='error'
                className={styles.info__delete}
                onClick={handleDelete}
            >
                {isLoading ? 'Deleting...' : t("deleteUser")}
            </Button>
            <ChildModal
                open={openChildModal}
                handleClose={handleCloseModal}
                handleSubmit={handleSubmitDelete}
                title={userName}
            />
        </Container>
    );
};

export default InfoTab;
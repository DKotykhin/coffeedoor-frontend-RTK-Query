import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Paper, Typography } from '@mui/material';

import PasswordForm from './PasswordForm';
import NewPasswordForm from './NewPasswordForm';

import styles from './changePassword.module.scss';

export interface IPassword {
    changePassword: (arg: boolean) => void;
}

const ChangePassword: React.FC = () => {

    const [confirmPassword, setConfirmPassword] = useState(false);

    const { t } = useTranslation("personal");

    const changePassword = (data: boolean) => setConfirmPassword(data);

    return (
        <Paper elevation={10} className={styles.changePassword}>
            <Typography className={styles.changePassword__title}>
                {t("formPasswordTitle")}
            </Typography>
            {confirmPassword
                ? <NewPasswordForm changePassword={changePassword}/>
                : <PasswordForm changePassword={changePassword} />
            }
        </Paper>
    )
}

export default ChangePassword;
import React from 'react';
import { useForm } from "react-hook-form";
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';

import { Box, Button } from '@mui/material';

import { PasswordField } from 'components/authForms/fields/_index';
import { PasswordFormValidation } from 'components/validation/userFormValidation';
import { IPassword } from './ChangePassword';

import { useFetchConfirmPasswordMutation } from 'services/userService';

import styles from './passwordForm.module.scss';

const PasswordForm: React.FC<IPassword> = ({ changePassword }) => {

    const { t } = useTranslation("personal");
    const [sendPassword, { isLoading }] = useFetchConfirmPasswordMutation();

    const {
        control,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<{ password: string }>(PasswordFormValidation);

    const onSubmit = async (data: { password: string }) => {
        // console.log(data);
        await sendPassword(data)
            .unwrap()
            .then(response => {
                changePassword(response.status);
                toast.success(response.message);                
            })
            .catch(error => toast.error(error.data.message));
    };

    return (
        <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            className={styles.passwordForm}
        >
            <PasswordField
                name={"password"}
                label={t("formPasswordLabel")}
                placeholder={t("formPasswordPlaceholder")}
                error={errors.password}
                control={control}
            />
            <Button
                className={styles.passwordForm__submit_button}
                disabled={!isValid}
                type="submit"
            >
                {isLoading ? t("formLoading") : t("passwordSubmit")}
            </Button>
        </Box>
    );
};

export default PasswordForm;
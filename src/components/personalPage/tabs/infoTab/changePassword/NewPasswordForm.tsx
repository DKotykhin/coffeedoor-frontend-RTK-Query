import React from 'react';
import { useForm } from "react-hook-form";
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';

import { Box, Button } from '@mui/material';

import { PasswordField } from 'components/authForms/fields/_index';
import { NewPasswordFormValidation } from 'validation/userFormValidation';
import { IPassword } from './ChangePassword';

import { useFetchNewPasswordMutation } from 'services/userService';

import styles from './passwordForm.module.scss';

interface IForm {
    newpassword: string;
    confirmpassword: string;
}

const NewPasswordForm: React.FC<IPassword> = ({ changePassword }) => {

    const { t } = useTranslation("personal");
    const [sendPassword, { isLoading }] = useFetchNewPasswordMutation();

    const {
        control,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<IForm>(NewPasswordFormValidation);

    const onSubmit = async (data: IForm) => {
        if (data.newpassword === data.confirmpassword) {
            await sendPassword({ password: data.newpassword })
                .unwrap()
                .then(response => {
                    changePassword(response.status);
                    toast.success(response.message);
                })
                .catch(error => toast.error(error.data.message));
            changePassword(false);
        } else toast.warn("Passwords don't match");
    };

    const handleCancel = () => changePassword(false);

    return (
        <Box
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            className={styles.passwordForm}
        >
            <PasswordField
                name={"newpassword"}
                label={t("formNewPasswordLabel")}
                placeholder={t("formPasswordPlaceholder")}
                error={errors.newpassword}
                control={control}
            />
            <PasswordField
                name={"confirmpassword"}
                label={t("formConfirmPasswordLabel")}
                placeholder={t("formPasswordPlaceholder")}
                error={errors.confirmpassword}
                control={control}
            />
            <Box className={styles.passwordForm__buttons}>
                <Button
                    className={styles.passwordForm__cancel}
                    onClick={handleCancel}
                >
                    {t("cancel")}
                </Button>
                <Button
                    className={styles.passwordForm__submit}
                    disabled={!isValid}
                    type="submit"
                >
                    {isLoading ? t("formLoading") : t("passwordSubmit")}
                </Button>
            </Box>
        </Box>
    );
};

export default NewPasswordForm;
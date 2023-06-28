import React from 'react';
import { useParams, useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';

import { Button, Container, Typography, Avatar, Paper, Box } from "@mui/material";

import PasswordField from './fields/PasswordField';
import { NewPasswordFormValidation } from '../validation/userFormValidation';

import { useFetchSetPasswordMutation } from 'services/userService';

import styles from "./form.module.scss";

interface IForm {
    newpassword: string;
    confirmpassword: string;
}

const SetPasswordForm: React.FC = () => {

    const { userId } = useParams();
    const { t } = useTranslation("personal");
    const navigate = useNavigate();

    const [sendPassword, { isLoading }] = useFetchSetPasswordMutation();

    const {
        control,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<IForm>(NewPasswordFormValidation);

    const onSubmit = async (data: IForm) => {
        // console.log(data);
        if (data.newpassword === data.confirmpassword) {
            await sendPassword({ password: data.newpassword, userId })
                .unwrap()
                .then(response => {
                    toast.success(response.message);
                    navigate('/login');
                })
                .catch(error => toast.error(error.data.message));

        } else toast.warn("Passwords don't match");
    };

    return (
        <Container maxWidth="xs" className={styles.form}>
            <Paper elevation={10} className={styles.form__paper}>
                <Typography className={styles.form__title} component="h2">
                    {t("formSetPasswordTitle")}
                </Typography>
                <Avatar className={styles.form__avatar} />
                <Box
                    component="form"
                    onSubmit={handleSubmit(onSubmit)}
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
                    <Button
                        className={styles.form__submit_button}
                        disabled={!isValid}
                        type="submit"
                    >
                        {isLoading ? t("formLoading") : t("set")}
                    </Button>
                </Box>
            </Paper>
            <Button
                className={styles.form__return_button}
                component={Link}
                to="/"
            >
                {t("return")}
            </Button>
        </Container>
    );
};

export default SetPasswordForm;
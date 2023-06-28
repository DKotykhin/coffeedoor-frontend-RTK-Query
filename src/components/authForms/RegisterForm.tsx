import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';

import { Button, Container, Typography, Avatar, Paper, Box } from "@mui/material";

import { PasswordField, NameField, PhoneField } from './fields/_index';
import { RegisterFormValidation } from '../validation/userFormValidation';

import { useFetchRegisterUserMutation } from "services/userService";

import { IUserRegister } from "types/userTypes";

import styles from "./form.module.scss";

const RegisterForm: React.FC = () => {

    const { t } = useTranslation("personal");
    const navigate = useNavigate();

    const [register, { isLoading }] = useFetchRegisterUserMutation();

    const {
        control,
        handleSubmit,
        formState: { errors, isValid },
        reset,
    } = useForm<IUserRegister>(RegisterFormValidation);

    const onSubmit = async (data: IUserRegister): Promise<void> => {
        const { userName, phone, password } = data;
        const validData = {
            userName: userName.trim(),
            phone,
            password: password.trim(),
        };
        await register(validData)
            .unwrap()
            .then(response => {
                console.log(response.message);
                sessionStorage.setItem("rememberMe", response.token);
                navigate("/");
                reset();
            })
            .catch(error => toast.error(error.data.message));
    };

    return (
        <Container maxWidth="xs" className={styles.form}>
            <Paper elevation={10} className={styles.form__paper}>
                <Typography className={styles.form__title} component="h2">
                    {t("formRegisterTitle")}
                </Typography>
                <Avatar className={styles.form__avatar} />
                <Box
                    component="form"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <NameField
                        label={t("formNameLabel")}
                        placeholder={t("formNamePlaceholder")}
                        error={errors.userName}
                        control={control} />
                    <PhoneField
                        label={t("formPhoneLabel")}
                        error={errors.phone}
                        control={control}
                    />
                    <PasswordField
                        name={"password"}
                        label={t("formPasswordLabel")}
                        placeholder={t("formPasswordPlaceholder")}
                        error={errors.password}
                        control={control}
                    />
                    <Button
                        className={styles.form__submit_button}
                        disabled={!isValid}
                        type="submit"
                    >
                        {isLoading ? t("formLoading") : t("formRegisterTitle")}
                    </Button>
                </Box>
            </Paper>
            <Typography className={styles.form__subtitle}>
                {t("formRegisterQuestion")}
            </Typography>
            <Button
                className={styles.form__sign_button}
                component={Link}
                to="/login"
            >
                {t("formLoginTitle")}
            </Button>
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

export default RegisterForm;
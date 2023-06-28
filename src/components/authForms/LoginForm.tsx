import React from 'react';
import { useNavigate, Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';

import { Button, Container, Typography, Box, Avatar, Paper } from "@mui/material";
import { InputLabel, Checkbox } from "@mui/material";

import { PasswordField, PhoneField } from './fields/_index';
import { LoginFormValidation } from '../validation/userFormValidation';

import { useFetchLoginUserMutation } from 'services/userService';

import { IUserLoginForm } from 'types/userTypes';

import styles from "./form.module.scss";

const LoginForm: React.FC = () => {

    const { t } = useTranslation("personal");
    const navigate = useNavigate();

    const [login, { isLoading }] = useFetchLoginUserMutation();

    const {
        control,
        handleSubmit,
        formState: { errors, isValid },
        reset,
    } = useForm<IUserLoginForm>(LoginFormValidation);

    const onSubmit = async (data: IUserLoginForm): Promise<void> => {
        const { phone, password, rememberMe } = data;
        const validData = {
            phone,
            password: password.trim(),
        };
        await login(validData)
            .unwrap()
            .then(response => {
                console.log(response);
                if (response.token) {
                    sessionStorage.setItem("rememberMe", response.token);
                    if (rememberMe) localStorage.setItem("rememberMe", response.token);
                    navigate("/");
                } else navigate(`/setPassword:${response.user._id}`);
                reset();
            })
            .catch(error => toast.error(error.data.message));
    };

    return (
        <Container maxWidth="xs" className={styles.form}>
            <Paper elevation={10} className={styles.form__paper}>
                <Typography className={styles.form__title} component="h2">
                    {t("formLoginTitle")}
                </Typography>
                <Avatar className={styles.form__avatar} />
                <Box
                    component="form"
                    onSubmit={handleSubmit(onSubmit)}
                >
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
                    <InputLabel className={styles.form__checkbox}>
                        <Controller
                            name="rememberMe"
                            control={control}
                            render={({ field }) => <Checkbox {...field} />}
                            defaultValue={false}
                        />
                        Remember me
                    </InputLabel>
                    <Button
                        className={styles.form__submit_button}
                        disabled={!isValid}
                        type="submit"
                    >
                        {isLoading ? t("formLoading") : t("formLoginTitle")}
                    </Button>
                </Box>
            </Paper>
            <Typography className={styles.form__subtitle}>
                {t("formLoginQuestion")}
            </Typography>
            <Button
                className={styles.form__sign_button}
                component={Link}
                to="/registration"
            >
                {t("formRegisterTitle")}
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

export default LoginForm;

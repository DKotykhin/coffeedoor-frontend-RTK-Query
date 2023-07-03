import React from 'react';
import { useForm, Controller } from "react-hook-form";
import { useTranslation } from 'react-i18next';

import { Box, Button, TextField } from "@mui/material";
import { Typography, InputLabel } from "@mui/material";
import { Radio, RadioGroup, FormControlLabel } from "@mui/material";

import { FormValidation } from "../../validation/basketValidation";
import { NameField, PhoneField } from 'components/authForms/fields/_index';
import { useAuth } from 'hooks/useAuth';

import { IFormData } from 'types/basketTypes';

import styles from './basketForm.module.scss';

interface IBasketForm {
    onSubmit: (data: IFormData) => void;
    isLoading: boolean;
}

const BasketForm: React.FC<IBasketForm> = ({ onSubmit, isLoading }) => {

    const { t } = useTranslation("basket");
    const { data } = useAuth();

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormData>({
        ...FormValidation,
        defaultValues: {
            userName: data ? data.user.userName : '',
            phone: data ? data.user.phone : '',
            deliveryWay: '',
        },
    });

    return (
        <Box
            onSubmit={handleSubmit(onSubmit)}
            className={styles.basketForm}
            component="form"
            noValidate
            autoComplete="off"
        >
            <NameField
                label={t("name")}
                placeholder={t("namePlaceholder")}
                error={errors.userName}
                control={control}
            />
            <PhoneField
                label={t("phone")}
                error={errors.phone}
                control={control}
            />
            <InputLabel className={styles.basketForm__label}>
                {t("delivery")}
            </InputLabel>
            <Controller
                name="deliveryWay"
                control={control}
                render={({ field }) => (
                    <RadioGroup {...field}>
                        <FormControlLabel
                            value="забрати в кав'ярні"
                            control={<Radio />}
                            label={t("var_1")}
                        />
                        <FormControlLabel
                            value="доставка перевізником"
                            control={<Radio />}
                            label={t("var_2")}
                        />
                    </RadioGroup>
                )}
            />
            <Typography className={styles.basketForm__error}>
                {errors.deliveryWay?.message}
            </Typography>
            <InputLabel
                htmlFor="comment"
                className={styles.basketForm__label}
            >
                {t("comment")}
            </InputLabel>
            <Controller
                name="comment"
                control={control}
                render={({ field }) => (
                    <TextField
                        {...field}
                        multiline
                        rows={2}
                        sx={{ width: "100%" }}
                    />
                )}
            />
            <Button
                // disabled={!isValid}
                className={styles.basketForm__submitButton}
                type="submit"
            >
                {isLoading ? t("loading") : t("submit")}
            </Button>
        </Box>
    );
};

export default BasketForm;
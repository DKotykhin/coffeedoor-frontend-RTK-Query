import React from 'react';
import { useForm, Controller } from "react-hook-form";
import { useTranslation } from 'react-i18next';

import { Box, Button, TextField } from "@mui/material";
import { Typography, InputLabel, OutlinedInput } from "@mui/material";
import {
    Radio,
    RadioGroup,
    FormControl,
    FormControlLabel,
    FormLabel,
} from "@mui/material";

import { FormValidation } from "./basketFormValidation";

import { IFormData } from 'types/basketTypes';

import styles from './basketForm.module.scss';

interface IBasketForm {
    onSubmit: (data: IFormData) => void
}

const BasketForm: React.FC<IBasketForm> = ({ onSubmit }) => {

    const { t } = useTranslation("basket");

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<IFormData>(FormValidation);

    return (
        <>
            <Box
                onSubmit={handleSubmit(onSubmit)}
                className={styles.basketForm}
                component="form"
                noValidate
                autoComplete="off"
            >
                <InputLabel
                    htmlFor="userName"
                    className={styles.basketForm__label}
                >
                    {t("name")}
                </InputLabel>
                <Controller
                    name="userName"
                    control={control}
                    render={({ field }) => (
                        <OutlinedInput {...field} sx={{ width: "100%" }} />
                    )}
                />
                <Typography className={styles.basketForm__error}>
                    {errors.userName?.message}
                </Typography>
                <InputLabel
                    htmlFor="phone"
                    className={styles.basketForm__label}
                >
                    {t("phone")}
                </InputLabel>
                <Controller
                    name="phone"
                    control={control}
                    render={({ field }) => (
                        <OutlinedInput {...field} sx={{ width: "100%" }} placeholder='0501112233' />
                    )}
                />
                <Typography className={styles.basketForm__error}>
                    {errors.phone?.message}
                </Typography>
                <Controller
                    name="deliveryWay"
                    control={control}
                    render={({ field }) => (
                        <FormControl {...field}>
                            <FormLabel className={styles.basketForm__label}>
                                {t("delivery")}
                            </FormLabel>
                            <RadioGroup>
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
                        </FormControl>
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
                    {t("submit")}
                </Button>
            </Box>
        </>
    )
}

export default BasketForm;
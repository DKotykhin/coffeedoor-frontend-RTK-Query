import React from 'react';
import { useForm } from "react-hook-form";
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';

import { Box, Button, Paper, Typography } from '@mui/material';

import { NameField, EmailField, AddressField } from 'components/authForms/fields/_index';
import { InfoFormValidation } from 'components/validation/userFormValidation';

import { useFetchProfileMutation } from 'services/userService';

import { IUser } from 'types/userTypes';
import { IUserForm, formProfileData } from './formProfileData';

import styles from './infoForm.module.scss';

const InfoForm: React.FC<{ user: IUser }> = ({ user }) => {

    const { t } = useTranslation("personal");
    const [sendProfile, { isLoading }] = useFetchProfileMutation();

    const {
        control,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<IUserForm>({
        ...InfoFormValidation,
        defaultValues: {
            userName: user.userName,
            email: user.email || "",
            address: user.address || "",
        }
    });

    const onSubmit = async (data: IUserForm) => {
        const formData = formProfileData(data);
        // console.log(formData);
        await sendProfile(formData)
            .unwrap()
            .then(response => toast.success(response.message))
            .catch(error => toast.error(error.data.message))
    }

    return (
        <Paper elevation={10} className={styles.infoForm}>
            <Typography className={styles.infoForm__title}>
                {t("formInfoTitle")}
            </Typography>
            <Box
                component="form"
                onSubmit={handleSubmit(onSubmit)}
                className={styles.infoForm__box}
            >
                <NameField
                    label={t("formNameLabel")}
                    placeholder={t("formNamePlaceholder")}
                    error={errors.userName}
                    control={control}
                />
                <EmailField
                    label={t("formEmailLabel")}
                    placeholder={t("formEmailPlaceholder")}
                    error={errors.email}
                    control={control}
                />
                <AddressField
                    label={t("formAddressLabel")}
                    placeholder={t("formAddressPlaceholder")}
                    error={errors.address}
                    control={control}
                />
                <Button
                    className={styles.infoForm__submit_button}
                    disabled={!isValid}
                    type="submit"
                >
                    {isLoading ? t("formLoading") : t("infoSubmit")}
                </Button>
            </Box>
        </Paper>
    )
}

export default InfoForm;
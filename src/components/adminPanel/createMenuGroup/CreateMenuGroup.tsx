import React from 'react';
import { useNavigate } from "react-router-dom";
import { useForm, FieldValues } from "react-hook-form";
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';

import { Button, Box, Container, Paper, Typography } from '@mui/material';

import { InputField, CheckboxInput } from '../inputs/_index';
import { MenuGroupValidation } from 'validation/menuGroupValidation';
import { menuGroupFormData } from '../formData/menuGroupFormData';

import { useCreateMenuGroupMutation } from 'services/menuService';

import styles from './createMenuGroup.module.scss';

const CreateMenuGroup: React.FC = () => {

    const [sendData, { isLoading }] = useCreateMenuGroupMutation();

    const { t } = useTranslation("admin");

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm(MenuGroupValidation);

    const navigate = useNavigate();
    const handleCancel = (): void => navigate("/admin");

    const onSubmit = async (data: FieldValues) => {
        const formData = menuGroupFormData(data);
        await sendData(formData)
            .unwrap()
            .then(response => {
                toast.success(response.message);
                console.log(response);
                navigate("/admin");
            })
            .catch((error: { data: { message: string } }) => {
                toast.error(error.data.message);
            });
    };

    return (
        <Container maxWidth='lg' className={styles.createMenuGroup}>
            <Typography className={styles.createMenuGroup__title}>
                {t("createMenuGroupTitle")}
            </Typography>
            <Box
                onSubmit={handleSubmit(onSubmit)}
                className={styles.form}
                component="form"
                noValidate
                autoComplete="off"
            >
                <Paper elevation={10} sx={{ p: 2 }}>
                    <Paper elevation={10} sx={{ p: 1, my: 1 }}>
                        <InputField
                            control={control}
                            name={'titleUa'}
                            label={'Title Ua'}
                            error={errors.titleUa}
                        />
                        <InputField
                            control={control}
                            name={'titleRu'}
                            label={'Title Ru'}
                            error={errors.titleRu}
                        />
                        <InputField
                            control={control}
                            name={'titleEn'}
                            label={'Title En'}
                            error={errors.titleEn}
                        />
                    </Paper>
                    <Paper elevation={10} sx={{ p: 1, my: 1 }}>
                        <InputField
                            control={control}
                            name={'subtitleUa'}
                            label={'Subtitle Ua'}
                            error={errors.subtitleUa}
                        />
                        <InputField
                            control={control}
                            name={'subtitleRu'}
                            label={'Subtitle Ru'}
                            error={errors.subtitleRu}
                        />
                        <InputField
                            control={control}
                            name={'subtitleEn'}
                            label={'Subtitle En'}
                            error={errors.subtitleEn}
                        />
                    </Paper>
                    <Box sx={{ p: 1 }}>
                        <InputField
                            control={control}
                            name={'position'}
                            label={'Position'}
                            defaultValue={0}
                            error={errors.position}
                        />
                        <CheckboxInput
                            control={control}
                            name={'hidden'}
                            label={'Hidden'}
                            defaultValue={false}
                        />
                    </Box>
                </Paper>
                <Box className={styles.buttons}>
                    <Button
                        className={styles.button__cancel}
                        onClick={handleCancel}
                    >
                        Cancel
                    </Button>
                    <Button type="submit">
                        {isLoading ? 'Loading...' : 'Create'}
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default CreateMenuGroup;
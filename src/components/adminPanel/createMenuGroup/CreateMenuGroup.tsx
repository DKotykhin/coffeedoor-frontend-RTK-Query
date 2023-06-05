import React from 'react';
import { useNavigate } from "react-router-dom";
import { useForm, FieldValues } from "react-hook-form";

import { Button, Box, Container, Paper, Typography } from '@mui/material';

import InputField from '../inputs/InputField';
import CheckboxInput from '../inputs/CheckboxInput';
import { MenuGroupValidation } from 'components/validation/menuGroupValidation';
import { menuGroupFormData } from '../formData/menuGroupFormData';

import styles from './createMenuGroup.module.scss';

const CreateMenuGroup: React.FC = () => {

    const isLoading = false;

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm(MenuGroupValidation);

    const navigate = useNavigate();
    const handleCancel = (): void => navigate("/admin");

    const onSubmit = async (data: FieldValues) => {
        const formData = menuGroupFormData(data)
        console.log(formData);
    };

    return (
        <Container maxWidth='lg' className={styles.createMenuGroup}>
            <Typography className={styles.createMenuGroup__title}>
                Create Menu Group
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
                            defaultValue=""
                            error={errors.titleUa}
                        />
                        <InputField
                            control={control}
                            name={'titleRu'}
                            label={'Title Ru'}
                            defaultValue=""
                            error={errors.titleRu}
                        />
                        <InputField
                            control={control}
                            name={'titleEn'}
                            label={'Title En'}
                            defaultValue=""
                            error={errors.titleEn}
                        />
                    </Paper>
                    <Paper elevation={10} sx={{ p: 1, my: 1 }}>
                        <InputField
                            control={control}
                            name={'subtitleUa'}
                            label={'Subtitle Ua'}
                            defaultValue=""
                            error={errors.subtitleUa}
                        />
                        <InputField
                            control={control}
                            name={'subtitleRu'}
                            label={'Subtitle Ru'}
                            defaultValue=""
                            error={errors.subtitleRu}
                        />
                        <InputField
                            control={control}
                            name={'subtitleEn'}
                            label={'Subtitle En'}
                            defaultValue=""
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
    )
}

export default CreateMenuGroup;
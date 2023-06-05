import React from 'react';
import { useNavigate } from "react-router-dom";
import { useForm, FieldValues } from "react-hook-form";

import { Button, Box, Container, Paper, Typography } from '@mui/material';

import InputField from '../inputs/InputField';
import CheckboxInput from '../inputs/CheckboxInput';
import { menuGroupFormData } from '../formData/menuGroupFormData';
import { MenuItemValidation } from 'components/validation/menuItemValidation';

import styles from './createMenuItem.module.scss';

const CreateMenuItem: React.FC = () => {

    const isLoading = false;

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm(MenuItemValidation);

    const navigate = useNavigate();
    const handleCancel = (): void => navigate("/admin");

    const onSubmit = async (data: FieldValues) => {
        const formData = menuGroupFormData(data)
        console.log(formData);
    };

    return (
        <Container maxWidth='lg' className={styles.createMenuItem}>
            <Typography className={styles.createMenuItem__title}>
                Create Menu Item
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
                            name={'descriptionUa'}
                            label={'Description Ua'}
                            defaultValue=""
                            error={errors.descriptionUa}
                        />
                        <InputField
                            control={control}
                            name={'descriptionRu'}
                            label={'Description Ru'}
                            defaultValue=""
                            error={errors.descriptionRu}
                        />
                        <InputField
                            control={control}
                            name={'descriptionEn'}
                            label={'Description En'}
                            defaultValue=""
                            error={errors.descriptionEn}
                        />
                    </Paper>
                    <Box sx={{ p: 1 }}>
                        <InputField
                            control={control}
                            name={'price'}
                            label={'Price'}
                            defaultValue={0}
                            error={errors.price}
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

export default CreateMenuItem;
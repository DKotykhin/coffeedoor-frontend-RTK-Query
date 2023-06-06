import React from 'react';
import { useNavigate } from "react-router-dom";
import { useForm, FieldValues } from "react-hook-form";
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';

import { Button, Box, Container, Paper, Typography } from '@mui/material';

import { InputField, CheckboxInput, SelectInput } from '../inputs/_index';
import { menuItemFormData } from '../formData/menuItemFormData';
import { MenuItemValidation } from 'components/validation/menuItemValidation';

import { useCreateMenuItemMutation, useGetMenuQuery } from 'services/menuService';

import styles from './createMenuItem.module.scss';
import { IMenuGroup } from 'types/menuTypes';

const CreateMenuItem: React.FC = () => {

    const [sendData, { isLoading }] = useCreateMenuItemMutation();
    const { data: menuData, isSuccess } = useGetMenuQuery('');
    const groupList = menuData?.map((item: IMenuGroup) => item.title.ua);

    const { t } = useTranslation("admin");

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm(MenuItemValidation);

    const navigate = useNavigate();
    const handleCancel = (): void => navigate("/admin");

    const onSubmit = async (data: FieldValues) => {
        const formData = menuItemFormData(data)
        const group = menuData.find((item: IMenuGroup) => item.title.ua === data.group);
        const updatedData = {
            groupId: group._id,
            data: formData,
        }
        console.log(updatedData);
        await sendData(updatedData)
            .unwrap()
            .then(response => {
                toast.success(response.message);
                console.log(response);
                navigate("/admin");
            })
            .catch((error: { data: { message: string } }) => {
                toast.error(error.data.message);
            })
    };

    return (
        <Container maxWidth='lg' className={styles.createMenuItem}>
            <Typography className={styles.createMenuItem__title}>
                {t("createMenuItemTitle")}
            </Typography>
            <Box
                onSubmit={handleSubmit(onSubmit)}
                className={styles.form}
                component="form"
                noValidate
                autoComplete="off"
            >
                <Paper elevation={10} sx={{ p: 2 }}>
                    {isSuccess &&
                        <SelectInput
                            control={control}
                            name={'group'}
                            value={groupList}
                        />
                    }
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
                            name={'descriptionUa'}
                            label={'Description Ua'}
                            error={errors.descriptionUa}
                        />
                        <InputField
                            control={control}
                            name={'descriptionRu'}
                            label={'Description Ru'}
                            error={errors.descriptionRu}
                        />
                        <InputField
                            control={control}
                            name={'descriptionEn'}
                            label={'Description En'}
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
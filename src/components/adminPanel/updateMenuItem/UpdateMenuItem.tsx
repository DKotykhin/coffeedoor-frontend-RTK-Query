import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { useForm, FieldValues } from "react-hook-form";

import { Button, Box, Container, Typography, Paper } from '@mui/material';

import Spinner from 'components/spinner/Spinner';
import ChildModal from '../childModal/ChildModal';
import { CheckboxInput, InputField } from '../inputs/_index';
import { menuItemFormData } from '../formData/menuItemFormData';
import { MenuItemValidation } from 'components/validation/menuItemValidation';

import { useGetMenuQuery } from 'services/menuService';

import { IMenuGroup, IMenuItem } from 'types/menuTypes';

import styles from './updateMenuItem.module.scss';

const UpdateMenuItem: React.FC = () => {

    const [openChildModal, setOpenChildModal] = useState(false);
    const [menuItem, setMenuItem] = useState<IMenuItem>();

    const { itemId } = useParams();

    const { data, isSuccess } = useGetMenuQuery('');

    useEffect(() => {
        // const MenuItemsArray = data.map((item: IMenuGroup) => item.items).flat();
        // const Item = MenuItemsArray.find((item: any) => item._id === itemId);
        // setMenuItem(Item);

        const menuGroup = data.find((item: IMenuGroup) => (
            item.items.some(item => item._id === itemId)
        ));
        const Item = menuGroup.items.find((item: IMenuItem) => item._id === itemId);
        setMenuItem(Item);       
    }, [data, itemId]);

    const deleteLoading = false;
    const isLoading = false;

    const {       
        control,
        handleSubmit,
        formState: { errors },
    } = useForm(MenuItemValidation);

    const navigate = useNavigate();
    const handleCancel = (): void => navigate("/admin");
    const handleDelete = (): void => setOpenChildModal(true);
    const handleCloseModal = (): void => setOpenChildModal(false);

    const handleSubmitDelete = async () => {
        setOpenChildModal(false);
        console.log('delete')
    };

    const onSubmit = async (data: FieldValues) => {
        const formData = menuItemFormData(data);
        const updatedData = {
            id: itemId,
            data: formData,
        }
        console.log(updatedData);
    };

    return isSuccess ? (
        <Container maxWidth='lg' className={styles.menuItem}>
            <Typography className={styles.menuItem__title}>
                Edit Menu Item
            </Typography>
            {menuItem ?
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
                                defaultValue={menuItem.name.ua}
                                error={errors.titleUa}
                            />
                            <InputField
                                control={control}
                                name={'titleRu'}
                                label={'Title Ru'}
                                defaultValue={menuItem.name.ru}
                                error={errors.titleRu}
                            />
                            <InputField
                                control={control}
                                name={'titleEn'}
                                label={'Title En'}
                                defaultValue={menuItem.name.en}
                                error={errors.titleEn}
                            />
                        </Paper>
                        <Paper elevation={10} sx={{ p: 1, my: 1 }}>
                            <InputField
                                control={control}
                                name={'descriptionUa'}
                                label={'Description Ua'}
                                defaultValue={menuItem.description?.ua}
                                error={errors.descriptionUa}
                            />
                            <InputField
                                control={control}
                                name={'descriptionRu'}
                                label={'Description Ru'}
                                defaultValue={menuItem.description?.ru}
                                error={errors.descriptionRu}
                            />
                            <InputField
                                control={control}
                                name={'descriptionEn'}
                                label={'Description En'}
                                defaultValue={menuItem.description?.en}
                                error={errors.descriptionEn}
                            />
                        </Paper>
                        <Box sx={{ p: 1 }}>
                            <InputField
                                control={control}
                                name={'price'}
                                label={'Price, uah'}
                                defaultValue={menuItem.price}
                                error={errors.price}
                            />
                            <CheckboxInput
                                control={control}
                                name={'hidden'}
                                label={'Hidden'}
                                defaultValue={menuItem.hidden}
                            />
                        </Box>
                    </Paper>
                    <Box className={styles.buttons}>
                        <Button
                            className={styles.button__delete}
                            onClick={handleDelete}
                        >
                            {deleteLoading ? 'Loading...' : 'Delete'}
                        </Button>
                        <Button
                            className={styles.button__cancel}
                            onClick={handleCancel}
                        >
                            Cancel
                        </Button>
                        <Button type="submit">
                            {isLoading ? 'Loading...' : 'Update'}
                        </Button>
                    </Box>
                </Box> : null
            }
            <ChildModal
                open={openChildModal}
                handleClose={handleCloseModal}
                handleSubmit={handleSubmitDelete}
                title={menuItem?.name.ua}
            />
        </Container>
    ) : <Spinner />
}

export default UpdateMenuItem;
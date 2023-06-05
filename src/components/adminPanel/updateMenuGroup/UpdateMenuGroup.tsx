import React, { useState } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { useForm, FieldValues } from "react-hook-form";

import { Container, Typography, Box, Paper, Button } from '@mui/material';

import Spinner from 'components/spinner/Spinner';
import ChildModal from '../childModal/ChildModal';
import MenuItemsTable from '../itemTable/MenuItemsTable';
import { CheckboxInput, InputField } from '../inputs/_index';
import { menuGroupFormData } from '../formData/menuGroupFormData';
import { MenuGroupValidation } from 'components/validation/menuGroupValidation';

import { useGetMenuQuery } from 'services/menuService';

import { IMenuGroup } from 'types/menuTypes';

import styles from './updateMenuGroup.module.scss';

const UpdateMenuGroup: React.FC = () => {

    const { itemId } = useParams();
    const [openChildModal, setOpenChildModal] = useState(false);

    const { data, isSuccess } = useGetMenuQuery('');
    const currentItem: IMenuGroup = data?.filter((item: IMenuGroup) => item._id === itemId)[0];

    const { t } = useTranslation("admin");

    const deleteLoading = false;
    const isLoading = false;

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm(MenuGroupValidation);

    const navigate = useNavigate();
    const handleCancel = (): void => navigate("/admin");
    const handleDelete = (): void => setOpenChildModal(true);
    const handleCloseModal = (): void => setOpenChildModal(false);

    const handleSubmitDelete = async () => {
        setOpenChildModal(false);
        console.log('delete')
    };

    const onSubmit = async (data: FieldValues) => {
        const formData = menuGroupFormData(data);
        const updatedData = {
            data: formData,
            id: itemId,
        }
        console.log(updatedData);
    };

    return isSuccess ? (
        <Container maxWidth='lg' className={styles.menuGroup}>
            <Typography className={styles.menuGroup__title}>
                {t("menuGroupPageTitle")}
            </Typography>
            {currentItem ?
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
                                defaultValue={currentItem.title.ua}
                                error={errors.titleUa}
                            />
                            <InputField
                                control={control}
                                name={'titleRu'}
                                label={'Title Ru'}
                                defaultValue={currentItem.title.ru}
                                error={errors.titleRu}
                            />
                            <InputField
                                control={control}
                                name={'titleEn'}
                                label={'Title En'}
                                defaultValue={currentItem.title.en}
                                error={errors.titleEn}
                            />
                        </Paper>
                        <Paper elevation={10} sx={{ p: 1, my: 1 }}>
                            <InputField
                                control={control}
                                name={'subtitleUa'}
                                label={'Subtitle Ua'}
                                defaultValue={currentItem.subtitle?.ua}
                                error={errors.subtitleUa}
                            />
                            <InputField
                                control={control}
                                name={'subtitleRu'}
                                label={'Subtitle Ru'}
                                defaultValue={currentItem.subtitle?.ru}
                                error={errors.subtitleRu}
                            />
                            <InputField
                                control={control}
                                name={'subtitleEn'}
                                label={'Subtitle En'}
                                defaultValue={currentItem.subtitle?.en}
                                error={errors.subtitleEn}
                            />
                        </Paper>
                        <Box sx={{ p: 1 }}>
                            <InputField
                                control={control}
                                name={'position'}
                                label={'Position'}
                                defaultValue={currentItem.position}
                                error={errors.position}
                            />
                            <CheckboxInput
                                control={control}
                                name={'hidden'}
                                label={'Hidden'}
                                defaultValue={currentItem.hidden}
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
            <MenuItemsTable itemList={currentItem.items} />
            <ChildModal
                open={openChildModal}
                handleClose={handleCloseModal}
                handleSubmit={handleSubmitDelete}
                title={currentItem.title.ua}
            />
        </Container>
    ) : <Spinner />
}

export default UpdateMenuGroup;
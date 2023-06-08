import React, { useState, useCallback, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { useForm, FieldValues } from "react-hook-form";
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';

import { Button, Box, Container, Paper, Typography } from '@mui/material';

import Spinner from 'components/spinner/Spinner';
import ChildModal from '../childModal/ChildModal';
import { StoreItemValidation } from 'components/validation/storeItemValidation';
import { TextArea, MDEField, CheckboxInput, InputField } from '../inputs/_index';

import { storeFormData } from '../formData/storeFormData';
import { useUpdateStoreItemMutation, useDeleteStoreItemMutation } from 'services/storeService';
import { useGetStoreQuery } from 'services/storeService';

import styles from './updateStoreItem.module.scss';

const UpdateStoreItem: React.FC = () => {

    const { itemId } = useParams();
    const { data, isSuccess } = useGetStoreQuery('');
    const [sendData, { isLoading }] = useUpdateStoreItemMutation();
    const [deleteData, { isLoading: deleteLoading }] = useDeleteStoreItemMutation();

    const { t } = useTranslation("admin");

    const [openChildModal, setOpenChildModal] = useState(false);
    const handleCloseModal = (): void => setOpenChildModal(false);

    const currentItem = data?.filter(item => item._id === itemId)[0];

    const navigate = useNavigate();
    const handleCancel = (): void => navigate("/admin");
    const handleDelete = (): void => setOpenChildModal(true);

    useEffect(() => {
        setMdeValueUa(currentItem && currentItem.detailText?.ua);
        setMdeValueRu(currentItem && currentItem.detailText?.ru);
        setMdeValueEn(currentItem && currentItem.detailText?.en);
    }, [currentItem]);

    const [mdeValueUa, setMdeValueUa] = useState<string | undefined>();
    const MDEChangeUa = useCallback((data: string) => {
        setMdeValueUa(data);
    }, []);

    const [mdeValueRu, setMdeValueRu] = useState<string | undefined>();
    const MDEChangeRu = useCallback((data: string) => {
        setMdeValueRu(data);
    }, []);

    const [mdeValueEn, setMdeValueEn] = useState<string | undefined>();
    const MDEChangeEn = useCallback((data: string) => {
        setMdeValueEn(data);
    }, []);

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm(StoreItemValidation);

    const onSubmit = async (data: FieldValues) => {
        const formData = storeFormData(data, mdeValueUa, mdeValueRu, mdeValueEn);
        const updatedData = {
            id: itemId,
            data: formData,
        }
        // console.log(updatedData);
        await sendData(updatedData)
            .unwrap()
            .then(response => {
                toast.success(response.message);                
                navigate("/admin");
            })
            .catch(error => toast.error(error.data.message))
    };

    const handleSubmitDelete = async () => {
        setOpenChildModal(false);
        await deleteData(itemId)
            .unwrap()
            .then(response => {
                toast.success(response.message);
                console.log(response.message);
                navigate("/admin");
            })
            .catch((error: { data: { message: string } }) => {
                toast.error(error.data.message);
            })
    };

    return isSuccess ? (
        <Container maxWidth='lg' className={styles.storeItem}>
            <Typography className={styles.storeItem__title}>
                {t("updateStoreItemTitle")}
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
                                name={'itemNameUa'}
                                label={'Item Name Ua'}
                                defaultValue={currentItem.itemName.ua}
                                error={errors.itemNameUa}
                            />
                            <InputField
                                control={control}
                                name={'itemNameRu'}
                                label={'Item Name Ru'}
                                defaultValue={currentItem.itemName.ru}
                                error={errors.itemNameRu}
                            />
                            <InputField
                                control={control}
                                name={'itemNameEn'}
                                label={'Item Name En'}
                                defaultValue={currentItem.itemName.en}
                                error={errors.itemNameEn}
                            />
                        </Paper>
                        <Paper elevation={10} sx={{ p: 1, my: 1 }}>
                            <InputField
                                control={control}
                                name={'countryUa'}
                                label={'Country Ua'}
                                defaultValue={currentItem.country?.ua}
                                error={errors.countryUa}
                            />
                            <InputField
                                control={control}
                                name={'countryRu'}
                                label={'Country Ru'}
                                defaultValue={currentItem.country?.ru}
                                error={errors.countryRu}
                            />
                            <InputField
                                control={control}
                                name={'countryEn'}
                                label={'Country En'}
                                defaultValue={currentItem.country?.en}
                                error={errors.countryEn}
                            />
                        </Paper>
                        <Paper elevation={10} sx={{ p: 1, my: 1 }}>
                            <InputField
                                control={control}
                                name={'sortKeyUa'}
                                label={'Sort key Ua'}
                                defaultValue={currentItem.sort?.key.ua}
                                error={errors.sortKeyUa}
                            />
                            <InputField
                                control={control}
                                name={'sortKeyRu'}
                                label={'Sort key Ru'}
                                defaultValue={currentItem.sort?.key.ru}
                                error={errors.sortKeyRu}
                            />
                            <InputField
                                control={control}
                                name={'sortKeyEn'}
                                label={'Sort key En'}
                                defaultValue={currentItem.sort?.key.en}
                                error={errors.sortKeyEn}
                            />
                        </Paper>
                        <Paper elevation={10} sx={{ p: 1, my: 1 }}>
                            <InputField
                                control={control}
                                name={'sortValueUa'}
                                label={'Sort value Ua'}
                                defaultValue={currentItem.sort?.value.ua}
                                error={errors.sortValueUa}
                            />
                            <InputField
                                control={control}
                                name={'sortValueRu'}
                                label={'Sort value Ru'}
                                defaultValue={currentItem.sort?.value.ru}
                                error={errors.sortValueRu}
                            />
                            <InputField
                                control={control}
                                name={'sortValueEn'}
                                label={'Sort value En'}
                                defaultValue={currentItem.sort?.value.en}
                                error={errors.sortValueEn}
                            />
                        </Paper>
                        <Paper elevation={10} sx={{ p: 1, my: 1 }}>
                            <TextArea
                                control={control}
                                name={'descriptionUa'}
                                label={'Description Ua'}
                                defaultValue={currentItem.description?.ua}
                                error={errors.descriptionUa}
                            />
                            <TextArea
                                control={control}
                                name={'descriptionRu'}
                                label={'Description Ru'}
                                defaultValue={currentItem.description?.ru}
                                error={errors.descriptionRu}
                            />
                            <TextArea
                                control={control}
                                name={'descriptionEn'}
                                label={'Description En'}
                                defaultValue={currentItem.description?.en}
                                error={errors.descriptionEn}
                            />
                        </Paper>
                        <MDEField MDEChange={MDEChangeUa} value={currentItem.detailText?.ua} label={'Detail text Ua'} />
                        <MDEField MDEChange={MDEChangeRu} value={currentItem.detailText?.ru} label={'Detail text Ru'} />
                        <MDEField MDEChange={MDEChangeEn} value={currentItem.detailText?.en} label={'Detail text En'} />
                        <Box sx={{ p: 2 }}>
                            <InputField
                                control={control}
                                name={'price'}
                                label={'Price, uah'}
                                defaultValue={currentItem.price}
                                error={errors.price}
                            />
                            <InputField
                                control={control}
                                name={'weight'}
                                label={'Weight, g'}
                                defaultValue={currentItem?.weight}
                                error={errors.weight}
                            />
                            <InputField
                                control={control}
                                name={'tm'}
                                label={'TM'}
                                defaultValue={currentItem?.tm}
                            />
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
                            <CheckboxInput
                                control={control}
                                name={'order'}
                                label={'Order'}
                                defaultValue={currentItem.order}
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
                title={currentItem?.itemName.ua}
            />
        </Container>
    ) : <Spinner />
}

export default UpdateStoreItem;
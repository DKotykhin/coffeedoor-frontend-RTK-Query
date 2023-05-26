import React, { useState, useCallback, useEffect } from 'react';
import { useParams, useNavigate } from "react-router-dom";
import { useForm, FieldValues } from "react-hook-form";

import { Button, Box, Container, Paper, Typography } from '@mui/material';

import Spinner from 'components/spinner/Spinner';
import ChildModal from '../childModal/ChildModal';
import { updateFormData } from './updateFormData';
import { SingleInput, TextArea, MDEField, RadioButton } from '../inputs';

import { useUpdateStoreItemMutation, useDeleteStoreItemMutation } from 'services/storeService';
import { useGetStoreQuery } from 'services/storeService';

import styles from './updateStoreItem.module.scss';

const UpdateStoreItem: React.FC = () => {

    const { itemId } = useParams();
    const { data, isSuccess } = useGetStoreQuery('');
    const [sendData, { isLoading }] = useUpdateStoreItemMutation();
    const [deleteData, { isLoading: deleteLoading }] = useDeleteStoreItemMutation();

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
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data: FieldValues) => {
        const updatedData = updateFormData(data, itemId, mdeValueUa, mdeValueRu, mdeValueEn);
        console.log(updatedData)
        await sendData(updatedData)
            .unwrap()
            .then(response => {
                console.log(response.message);
                navigate("/admin");
            })
    };

    const handleSubmitDelete = async () => {
        setOpenChildModal(false);
        await deleteData({_id: itemId})
            .unwrap()
            .then(response => {
                console.log(response.message);
                navigate("/admin");
            })
    };

    return isSuccess ? (
        <Container maxWidth='lg' className={styles.storeItem}>
            <Typography className={styles.storeItem__title}>
                Edit Store Item
            </Typography>
            {currentItem ?
                <Paper
                    elevation={10}
                    onSubmit={handleSubmit(onSubmit)}
                    className={styles.form}
                    component="form"
                    noValidate
                    autoComplete="off"
                >
                    <Paper elevation={10} sx={{ p: 1, my: 1 }}>
                        <SingleInput
                            register={register('titleUa', { required: true })}
                            label={'Title Ua'}
                            defaultValue={currentItem.title.ua}
                            error={errors.titleUa}
                        />
                        <SingleInput
                            register={register('titleRu', { required: true })}
                            label={'Title Ru'}
                            defaultValue={currentItem.title.ru}
                            error={errors.titleRu}
                        />
                        <SingleInput
                            register={register('titleEn', { required: true })}
                            label={'Title En'}
                            defaultValue={currentItem.title.en}
                            error={errors.titleEn}
                        />
                    </Paper>
                    <Paper elevation={10} sx={{ p: 1, my: 1 }}>
                        <SingleInput
                            register={register('itemNameUa', { required: true })}
                            label={'Item Name Ua'}
                            defaultValue={currentItem.itemName.ua}
                            error={errors.itemNameUa}
                        />
                        <SingleInput
                            register={register('itemNameRu', { required: true })}
                            label={'Item Name Ru'}
                            defaultValue={currentItem.itemName.ru}
                            error={errors.itemNameRu}
                        />
                        <SingleInput
                            register={register('itemNameEn', { required: true })}
                            label={'Item Name En'}
                            defaultValue={currentItem.itemName.en}
                            error={errors.itemNameEn}
                        />
                    </Paper>
                    <Paper elevation={10} sx={{ p: 1, my: 1 }}>
                        <SingleInput
                            register={register('countryUa')}
                            label={'Country Ua'}
                            defaultValue={currentItem.country?.ua}
                            error={errors.countryUa}
                        />
                        <SingleInput
                            register={register('countryRu')}
                            label={'Country Ru'}
                            defaultValue={currentItem.country?.ru}
                            error={errors.countryRu}
                        />
                        <SingleInput
                            register={register('countryEn')}
                            label={'Country En'}
                            defaultValue={currentItem.country?.en}
                            error={errors.countryEn}
                        />
                    </Paper>
                    <Paper elevation={10} sx={{ p: 1, my: 1 }}>
                        <SingleInput
                            register={register('sortKeyUa')}
                            label={'Sort key Ua'}
                            defaultValue={currentItem.sort?.key.ua}
                            error={errors.sortKeyUa}
                        />
                        <SingleInput
                            register={register('sortKeyRu')}
                            label={'Sort key Ru'}
                            defaultValue={currentItem.sort?.key.ru}
                            error={errors.sortKeyUa}
                        />
                        <SingleInput
                            register={register('sortKeyEn')}
                            label={'Sort key En'}
                            defaultValue={currentItem.sort?.key.en}
                            error={errors.sortKeyUa}
                        />
                    </Paper>
                    <Paper elevation={10} sx={{ p: 1, my: 1 }}>
                        <SingleInput
                            register={register('sortValueUa')}
                            label={'Sort value Ua'}
                            defaultValue={currentItem.sort?.value.ua}
                            error={errors.sortValueUa}
                        />
                        <SingleInput
                            register={register('sortValueRu')}
                            label={'Sort value Ru'}
                            defaultValue={currentItem.sort?.value.ru}
                            error={errors.sortValueUa}
                        />
                        <SingleInput
                            register={register('sortValueEn')}
                            label={'Sort value En'}
                            defaultValue={currentItem.sort?.value.en}
                            error={errors.sortValueUa}
                        />
                    </Paper>
                    <Paper elevation={10} sx={{ p: 1, my: 1 }}>
                        <TextArea
                            register={register('descriptionUa', { required: true })}
                            label={'Description Ua'}
                            defaultValue={currentItem.description?.ua}
                            error={errors.descriptionUa}
                        />
                        <TextArea
                            register={register('descriptionRu', { required: true })}
                            label={'Description Ru'}
                            defaultValue={currentItem.description?.ru}
                            error={errors.descriptionRu}
                        />
                        <TextArea
                            register={register('descriptionEn', { required: true })}
                            label={'Description En'}
                            defaultValue={currentItem.description?.en}
                            error={errors.descriptionEn}
                        />
                    </Paper>
                    <MDEField MDEChange={MDEChangeUa} value={currentItem.detailText?.ua} label={'Detail text Ua'} />
                    <MDEField MDEChange={MDEChangeRu} value={currentItem.detailText?.ru} label={'Detail text Ru'} />
                    <MDEField MDEChange={MDEChangeEn} value={currentItem.detailText?.en} label={'Detail text En'} />
                    <SingleInput
                        register={register('price', { required: true, pattern: /^\d+$/ })}
                        label={'Price, uah'}
                        defaultValue={currentItem.price}
                        error={errors.price}
                    />
                    <SingleInput
                        register={register('weight', { pattern: /^\d+$/ })}
                        label={'Weight, g'}
                        defaultValue={currentItem?.weight}
                        error={errors.weight}
                    />
                    <SingleInput
                        register={register('tm')}
                        label={'TM'}
                        defaultValue={currentItem?.tm}
                    />
                    <SingleInput
                        register={register('position', { required: true, pattern: /^\d+$/ })}
                        label={'Position'}
                        defaultValue={currentItem.position}
                        error={errors.position}
                    />
                    <RadioButton
                        register={register('hidden', { required: true })}
                        label={'Hidden'}
                        defaultValue={currentItem.hidden}
                    />
                    <RadioButton
                        register={register('order', { required: true })}
                        label={'Order'}
                        defaultValue={currentItem.order}
                    />
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
                </Paper> : null
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
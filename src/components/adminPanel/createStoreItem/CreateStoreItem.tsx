import React, { useState, useCallback } from 'react';
import { useNavigate } from "react-router-dom";
import { useForm, FieldValues } from "react-hook-form";

import { Button, Box, Container, Paper, Typography } from '@mui/material';

import { SingleInput, TextArea, MDEField, RadioButton } from '../inputs';
import { createFormData } from './createFormData';
import SelectInput from '../inputs/SelectInput';

import { useGetStoreQuery, useCreateStoreItemMutation } from 'services/storeService';

import styles from './createStoreItem.module.scss'

const CreateStoreItem: React.FC = () => {

    const { data, isSuccess } = useGetStoreQuery('');
    const groups = data?.map(item => item.group);
    const groupList = [...new Set(groups)];

    const [createData, { isLoading }] = useCreateStoreItemMutation();

    const navigate = useNavigate();
    const handleCancel = (): void => navigate("/admin");

    const [mdeValueUa, setMdeValueUa] = useState<string>("");
    const MDEChangeUa = useCallback((data: string) => {
        setMdeValueUa(data);
    }, []);

    const [mdeValueRu, setMdeValueRu] = useState<string>("");
    const MDEChangeRu = useCallback((data: string) => {
        setMdeValueRu(data);
    }, []);

    const [mdeValueEn, setMdeValueEn] = useState<string>("");
    const MDEChangeEn = useCallback((data: string) => {
        setMdeValueEn(data);
    }, []);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data: FieldValues) => {
        const createdData = createFormData(data, mdeValueUa, mdeValueRu, mdeValueEn);
        console.log(createdData);
        await createData(createdData)
            .unwrap()
            .then(response => {
                console.log(response.message);
                navigate("/admin");
            })
    };

    return (
        <Container maxWidth='lg' className={styles.createStoreItem}>
            <Typography className={styles.createStoreItem__title}>
                Create Store Item
            </Typography>
            <Paper
                elevation={10}
                onSubmit={handleSubmit(onSubmit)}
                className={styles.form}
                component="form"
                noValidate
                autoComplete="off"
            >
                {isSuccess &&
                    <SelectInput
                        register={register('group', { required: true })}
                        value={groupList}
                    />
                }
                <Paper elevation={10} sx={{ p: 1, my: 1 }}>
                    <SingleInput
                        register={register('titleUa', { required: true })}
                        label={'Title Ua'}
                        defaultValue=""
                        error={errors.titleUa}
                    />
                    <SingleInput
                        register={register('titleRu', { required: true })}
                        label={'Title Ru'}
                        defaultValue=""
                        error={errors.titleRu}
                    />
                    <SingleInput
                        register={register('titleEn', { required: true })}
                        label={'Title En'}
                        defaultValue=""
                        error={errors.titleEn}
                    />
                </Paper>
                <Paper elevation={10} sx={{ p: 1, my: 1 }}>
                    <SingleInput
                        register={register('itemNameUa', { required: true })}
                        label={'Item Name Ua'}
                        defaultValue=""
                        error={errors.itemNameUa}
                    />
                    <SingleInput
                        register={register('itemNameRu', { required: true })}
                        label={'Item Name Ru'}
                        defaultValue=""
                        error={errors.itemNameRu}
                    />
                    <SingleInput
                        register={register('itemNameEn', { required: true })}
                        label={'Item Name En'}
                        defaultValue=""
                        error={errors.itemNameEn}
                    />
                </Paper>
                <Paper elevation={10} sx={{ p: 1, my: 1 }}>
                    <SingleInput
                        register={register('countryUa')}
                        label={'Country Ua'}
                        defaultValue=""
                        error={errors.countryUa}
                    />
                    <SingleInput
                        register={register('countryRu')}
                        label={'Country Ru'}
                        defaultValue=""
                        error={errors.countryRu}
                    />
                    <SingleInput
                        register={register('countryEn')}
                        label={'Country En'}
                        defaultValue=""
                        error={errors.countryEn}
                    />
                </Paper>
                <Paper elevation={10} sx={{ p: 1, my: 1 }}>
                    <SingleInput
                        register={register('sortKeyUa')}
                        label={'Sort key Ua'}
                        defaultValue=""
                        error={errors.sortKeyUa}
                    />
                    <SingleInput
                        register={register('sortKeyRu')}
                        label={'Sort key Ru'}
                        defaultValue=""
                        error={errors.sortKeyUa}
                    />
                    <SingleInput
                        register={register('sortKeyEn')}
                        label={'Sort key En'}
                        defaultValue=""
                        error={errors.sortKeyUa}
                    />
                </Paper>
                <Paper elevation={10} sx={{ p: 1, my: 1 }}>
                    <SingleInput
                        register={register('sortValueUa')}
                        label={'Sort value Ua'}
                        defaultValue=""
                        error={errors.sortValueUa}
                    />
                    <SingleInput
                        register={register('sortValueRu')}
                        label={'Sort value Ru'}
                        defaultValue=""
                        error={errors.sortValueUa}
                    />
                    <SingleInput
                        register={register('sortValueEn')}
                        label={'Sort value En'}
                        defaultValue=""
                        error={errors.sortValueUa}
                    />
                </Paper>
                <Paper elevation={10} sx={{ p: 1, my: 1 }}>
                    <TextArea
                        register={register('descriptionUa', { required: true })}
                        label={'Description Ua'}
                        defaultValue=""
                        error={errors.descriptionUa}
                    />
                    <TextArea
                        register={register('descriptionRu', { required: true })}
                        label={'Description Ru'}
                        defaultValue=""
                        error={errors.descriptionRu}
                    />
                    <TextArea
                        register={register('descriptionEn', { required: true })}
                        label={'Description En'}
                        defaultValue=""
                        error={errors.descriptionEn}
                    />
                </Paper>
                <MDEField MDEChange={MDEChangeUa} value="" label={'Detail text Ua'} />
                <MDEField MDEChange={MDEChangeRu} value="" label={'Detail text Ru'} />
                <MDEField MDEChange={MDEChangeEn} value="" label={'Detail text En'} />
                <SingleInput
                    register={register('price', { required: true, pattern: /^\d+$/ })}
                    label={'Price, uah'}
                    defaultValue={0}
                    error={errors.price}
                />
                <SingleInput
                    register={register('weight', { pattern: /^\d+$/ })}
                    label={'Weight, g'}
                    defaultValue=""
                    error={errors.weight}
                />
                <SingleInput
                    register={register('tm')}
                    label={'TM'}
                    defaultValue=""
                />
                <SingleInput
                    register={register('position', { required: true, pattern: /^\d+$/ })}
                    label={'Position'}
                    defaultValue={0}
                    error={errors.position}
                />
                <RadioButton
                    register={register('hidden', { required: true })}
                    label={'Hidden'}
                    defaultValue={false}
                />
                <RadioButton
                    register={register('order', { required: true })}
                    label={'Order'}
                    defaultValue={false}
                />
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
            </Paper>
        </Container>
    )
}

export default CreateStoreItem;
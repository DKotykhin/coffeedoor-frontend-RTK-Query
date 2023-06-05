import React, { useState, useCallback } from 'react';
import { useNavigate } from "react-router-dom";
import { useForm, FieldValues } from "react-hook-form";

import { Button, Box, Container, Paper, Typography } from '@mui/material';

import { StoreItemValidation } from 'components/validation/storeItemValidation';
import { TextArea, MDEField, CheckboxInput, InputField, SelectInput } from '../inputs/_index';
import { storeFormData } from '../formData/storeFormData';

import { useGetStoreQuery, useCreateStoreItemMutation } from 'services/storeService';

import styles from './createStoreItem.module.scss';

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
        control,
        handleSubmit,
        formState: { errors },
    } = useForm(StoreItemValidation);

    const onSubmit = async (data: FieldValues) => {
        const createdData = storeFormData(data, mdeValueUa, mdeValueRu, mdeValueEn);
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
                            name={'itemNameUa'}
                            label={'Item Name Ua'}
                            defaultValue=""
                            error={errors.itemNameUa}
                        />
                        <InputField
                            control={control}
                            name={'itemNameRu'}
                            label={'Item Name Ru'}
                            defaultValue=""
                            error={errors.itemNameRu}
                        />
                        <InputField
                            control={control}
                            name={'itemNameEn'}
                            label={'Item Name En'}
                            defaultValue=""
                            error={errors.itemNameEn}
                        />
                    </Paper>
                    <Paper elevation={10} sx={{ p: 1, my: 1 }}>
                        <InputField
                            control={control}
                            name={'countryUa'}
                            label={'Country Ua'}
                            defaultValue=""
                            error={errors.countryUa}
                        />
                        <InputField
                            control={control}
                            name={'countryRu'}
                            label={'Country Ru'}
                            defaultValue=""
                            error={errors.countryRu}
                        />
                        <InputField
                            control={control}
                            name={'countryEn'}
                            label={'Country En'}
                            defaultValue=""
                            error={errors.countryEn}
                        />
                    </Paper>
                    <Paper elevation={10} sx={{ p: 1, my: 1 }}>
                        <InputField
                            control={control}
                            name={'sortKeyUa'}
                            label={'Sort key Ua'}
                            defaultValue=""
                            error={errors.sortKeyUa}
                        />
                        <InputField
                            control={control}
                            name={'sortKeyRu'}
                            label={'Sort key Ru'}
                            defaultValue=""
                            error={errors.sortKeyRu}
                        />
                        <InputField
                            control={control}
                            name={'sortKeyEn'}
                            label={'Sort key En'}
                            defaultValue=""
                            error={errors.sortKeyEn}
                        />
                    </Paper>
                    <Paper elevation={10} sx={{ p: 1, my: 1 }}>
                        <InputField
                            control={control}
                            name={'sortValueUa'}
                            label={'Sort value Ua'}
                            defaultValue=""
                            error={errors.sortValueUa}
                        />
                        <InputField
                            control={control}
                            name={'sortValueRu'}
                            label={'Sort value Ru'}
                            defaultValue=""
                            error={errors.sortValueRu}
                        />
                        <InputField
                            control={control}
                            name={'sortValueEn'}
                            label={'Sort value En'}
                            defaultValue=""
                            error={errors.sortValueEn}
                        />
                    </Paper>
                    <Paper elevation={10} sx={{ p: 1, my: 1 }}>
                        <TextArea
                            control={control}
                            name={'descriptionUa'}
                            label={'Description Ua'}
                            defaultValue=""
                            error={errors.descriptionUa}
                        />
                        <TextArea
                            control={control}
                            name={'descriptionRu'}
                            label={'Description Ru'}
                            defaultValue=""
                            error={errors.descriptionRu}
                        />
                        <TextArea
                            control={control}
                            name={'descriptionEn'}
                            label={'Description En'}
                            defaultValue=""
                            error={errors.descriptionEn}
                        />
                    </Paper>
                    <MDEField MDEChange={MDEChangeUa} value="" label={'Detail text Ua'} />
                    <MDEField MDEChange={MDEChangeRu} value="" label={'Detail text Ru'} />
                    <MDEField MDEChange={MDEChangeEn} value="" label={'Detail text En'} />
                    <InputField
                        control={control}
                        name={'price'}
                        label={'Price, uah'}
                        defaultValue={0}
                        error={errors.price}
                    />
                    <InputField
                        control={control}
                        name={'weight'}
                        label={'Weight, g'}
                        defaultValue=""
                        error={errors.weight}
                    />
                    <InputField
                        control={control}
                        name={'tm'}
                        label={'TM'}
                        defaultValue=""
                    />
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
                    <CheckboxInput
                        control={control}
                        name={'order'}
                        label={'Order'}
                        defaultValue={false}
                    />
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

export default CreateStoreItem;
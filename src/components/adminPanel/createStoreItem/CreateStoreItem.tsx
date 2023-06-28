import React, { useState, useCallback } from 'react';
import { useNavigate } from "react-router-dom";
import { useForm, FieldValues } from "react-hook-form";
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';

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

    const { t } = useTranslation("admin");

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
        const formData = storeFormData(data, mdeValueUa, mdeValueRu, mdeValueEn);
        // console.log(formData);
        const createdData = {
            ...formData,
            group: data.group,
        };
        await createData(createdData)
            .unwrap()
            .then(response => {
                toast.success(response.message);
                console.log(response.message);
                navigate("/admin");
            })
            .catch((error: { data: { message: string } }) => {
                toast.error(error.data.message);
            });
    };

    return (
        <Container maxWidth='lg' className={styles.createStoreItem}>
            <Typography className={styles.createStoreItem__title}>
                {t("createStoreItemTitle")}
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
                            name={'itemNameUa'}
                            label={'Item Name Ua'}
                            error={errors.itemNameUa}
                        />
                        <InputField
                            control={control}
                            name={'itemNameRu'}
                            label={'Item Name Ru'}
                            error={errors.itemNameRu}
                        />
                        <InputField
                            control={control}
                            name={'itemNameEn'}
                            label={'Item Name En'}
                            error={errors.itemNameEn}
                        />
                    </Paper>
                    <Paper elevation={10} sx={{ p: 1, my: 1 }}>
                        <InputField
                            control={control}
                            name={'countryUa'}
                            label={'Country Ua'}
                            error={errors.countryUa}
                        />
                        <InputField
                            control={control}
                            name={'countryRu'}
                            label={'Country Ru'}
                            error={errors.countryRu}
                        />
                        <InputField
                            control={control}
                            name={'countryEn'}
                            label={'Country En'}
                            error={errors.countryEn}
                        />
                    </Paper>
                    <Paper elevation={10} sx={{ p: 1, my: 1 }}>
                        <InputField
                            control={control}
                            name={'sortKeyUa'}
                            label={'Sort key Ua'}
                            error={errors.sortKeyUa}
                        />
                        <InputField
                            control={control}
                            name={'sortKeyRu'}
                            label={'Sort key Ru'}
                            error={errors.sortKeyRu}
                        />
                        <InputField
                            control={control}
                            name={'sortKeyEn'}
                            label={'Sort key En'}
                            error={errors.sortKeyEn}
                        />
                    </Paper>
                    <Paper elevation={10} sx={{ p: 1, my: 1 }}>
                        <InputField
                            control={control}
                            name={'sortValueUa'}
                            label={'Sort value Ua'}
                            error={errors.sortValueUa}
                        />
                        <InputField
                            control={control}
                            name={'sortValueRu'}
                            label={'Sort value Ru'}
                            error={errors.sortValueRu}
                        />
                        <InputField
                            control={control}
                            name={'sortValueEn'}
                            label={'Sort value En'}
                            error={errors.sortValueEn}
                        />
                    </Paper>
                    <Paper elevation={10} sx={{ p: 1, my: 1 }}>
                        <TextArea
                            control={control}
                            name={'descriptionUa'}
                            label={'Description Ua'}
                            error={errors.descriptionUa}
                        />
                        <TextArea
                            control={control}
                            name={'descriptionRu'}
                            label={'Description Ru'}
                            error={errors.descriptionRu}
                        />
                        <TextArea
                            control={control}
                            name={'descriptionEn'}
                            label={'Description En'}
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
                        error={errors.weight}
                    />
                    <InputField
                        control={control}
                        name={'tm'}
                        label={'TM'}                        
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
    );
};

export default CreateStoreItem;
import React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

import { Controller } from "react-hook-form";

import {
    Box,
    InputLabel,
    FormControl,
    FormHelperText,
} from "@mui/material";

import styles from './field.module.scss';

interface IPhoneField {
    label: string;
    error: any;
    control: any;
}

const PhoneField: React.FC<IPhoneField> = ({ label, error, control }) => {

    return (
        <Box className={styles.field}>
            <InputLabel>{label}</InputLabel>
            <FormControl className={styles.field__control}>
                <Controller
                    name="phone"
                    control={control}
                    render={({ field }) => (
                        <PhoneInput
                            {...field}
                            country={'ua'}
                            regions={'europe'}
                            // masks={{ua: '(..) ...-..-..'}}
                            countryCodeEditable={false}
                            inputClass={styles.field__phone}
                            placeholder=''
                        />
                    )}
                />
                <FormHelperText className={styles.field__helper}>{error?.message}</FormHelperText>
            </FormControl>
        </Box>
    );
};

export { PhoneField };
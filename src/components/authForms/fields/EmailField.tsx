import React from "react";
import { Controller } from "react-hook-form";

import {
    Box,
    Input,
    InputLabel,
    FormControl,
    FormHelperText,
} from "@mui/material";

import styles from './field.module.scss';

interface IEmailField {
    label: string;
    placeholder: string;
    disabled: boolean;
    error: any;
    control: any
}

const EmailField: React.FC<IEmailField> = ({ label, placeholder, disabled, error, control }) => {
    return (
        <Box className={styles.field}>
            <InputLabel>{label}</InputLabel>
            <FormControl>
                <Controller
                    name="email"
                    control={control}
                    render={({ field }) => (
                        <Input
                            {...field}
                            type="email"
                            disabled={disabled}
                            placeholder={placeholder}
                            autoComplete="email"
                            error={error ? true : false}
                        />
                    )}
                />
                <FormHelperText>{error?.message}</FormHelperText>
            </FormControl>
        </Box>
    );
};

export default EmailField;

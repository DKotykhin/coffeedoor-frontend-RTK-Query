import React from 'react';
import { Controller } from "react-hook-form";

import { Box, InputLabel, Input, FormHelperText } from "@mui/material";

interface IInputField {
    label: string;
    name: string;
    defaultValue?: string | number | undefined;
    control: any,
    error?: any,
}

const InputField: React.FC<IInputField> = ({ label, defaultValue, control, name, error }) => {

    return (
        <>
            <Box sx={{ display: "flex", mb: 2 }}>
                <InputLabel sx={{ width: "130px", mt: 1 }}>{label}</InputLabel>
                <Controller
                    name={name}
                    control={control}
                    defaultValue={defaultValue || ""}
                    render={({ field }) =>
                        <Input
                            {...field}
                            sx={{ ml: 3, width: "100%" }}
                            error={error ? true : false}
                        />
                    }
                />
            </Box>
            <FormHelperText sx={{ marginLeft: '130px' }}>{error?.message}</FormHelperText>
        </>
    )
}

export default InputField;
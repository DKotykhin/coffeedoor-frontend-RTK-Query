import React from 'react';
import { Controller } from "react-hook-form";

import { Box, InputLabel, TextField, FormHelperText } from "@mui/material";

interface IInput {
    label: string;
    name: string;
    defaultValue: string | undefined;
    control: any,
    error?: any,
}

const TextArea: React.FC<IInput> = ({ label, defaultValue, control, name, error }) => {

    return (
        <>
            <Box sx={{ display: "flex", mb: 2 }}>
                <InputLabel sx={{ width: "130px", mt: 1 }}>{label}</InputLabel>
                <Controller
                    name={name}
                    control={control}
                    defaultValue={defaultValue}
                    render={({ field }) =>
                        <TextField
                            {...field}
                            multiline
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

export default TextArea;
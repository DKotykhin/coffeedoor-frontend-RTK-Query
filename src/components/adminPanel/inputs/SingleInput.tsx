import React from 'react';

import { Box, InputLabel, Input, Typography } from "@mui/material";

interface IInput {
    label: string;
    defaultValue?: string | number;
    register: Object
    error?: any,
}

const SingleInput: React.FC<IInput> = ({ label, defaultValue, register, error }) => {

    return (
        <>
            <Box sx={{ display: "flex", mb: 2 }}>
                <InputLabel sx={{ width: "120px", mt: 1 }}>{label}</InputLabel>
                <Input
                    {...register}
                    sx={{ ml: 3, width: "100%" }}
                    defaultValue={defaultValue}
                />
            </Box>
            {error &&
                <Typography sx={{ color: '#ff0000', fontSize: '0.8rem' }}>
                    {error.type === 'required' ? 'This field is required' : 'Put valid value'}
                </Typography>
            }
        </>
    )
}

export default SingleInput;
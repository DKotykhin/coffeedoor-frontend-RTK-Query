import React from 'react';
import { Controller } from "react-hook-form";

import { Box, InputLabel, Checkbox } from "@mui/material";

interface ICheckboxInput {
    label: string;
    name: string;
    defaultValue: boolean;
    control: any
}

const CheckboxInput: React.FC<ICheckboxInput> = ({ label, defaultValue, control, name }) => {
    return (
        <Box sx={{ display: "flex", mb: 2 }}>
            <InputLabel sx={{ width: "120px", mt: 1 }}>{label}</InputLabel>
            <Controller
                name={name}
                control={control}
                defaultValue={defaultValue}
                render={({ field }) => <Checkbox {...field} defaultChecked={defaultValue} />}
            />
        </Box>
    );
};

export { CheckboxInput };
import React from 'react';

import {
    Box,
    FormLabel,
    FormControl,
    FormControlLabel,
    RadioGroup,
    Radio,
} from "@mui/material";

interface IRadio {
    label: string;
    defaultValue: boolean;
    register: Object
}

const RadioButton: React.FC<IRadio> = ({ label, defaultValue, register }) => {
    return (
        <Box sx={{ display: "flex", mb: 2 }}>
            <FormLabel sx={{ width: "150px", mt: 1 }}>{label}</FormLabel>
            <FormControl>
                <RadioGroup defaultValue={defaultValue}>
                    <FormControlLabel
                        {...register}
                        value={false}
                        control={<Radio />}
                        label="Ні"
                    />
                    <FormControlLabel
                        {...register}
                        value={true}
                        control={<Radio />}
                        label="Так"
                    />
                </RadioGroup>
            </FormControl>
        </Box>
    );
}

export default RadioButton;
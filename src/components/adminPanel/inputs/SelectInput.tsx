import React from 'react';
import { Controller } from "react-hook-form";

import { InputLabel, MenuItem, FormControl, Select } from '@mui/material';

interface ISelectInput {
    value: string[],
    name: string,
    control: any,
}

const SelectInput: React.FC<ISelectInput> = ({ value, control, name }) => {

    return (
        <FormControl variant="standard" sx={{ m: 1, minWidth: 150 }}>
            <InputLabel>Group</InputLabel>
            <Controller
                name={name}
                control={control}
                defaultValue={value[0]}
                render={({ field }) =>
                    <Select {...field}>
                        {value.map(item => (
                            <MenuItem key={item} value={item}>{item}</MenuItem>
                        ))}
                    </Select>
                }
            />
        </FormControl>
    );
};

export { SelectInput };
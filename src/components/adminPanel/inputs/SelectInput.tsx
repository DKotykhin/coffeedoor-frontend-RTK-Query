import React from 'react';

import { InputLabel, MenuItem, FormControl, Select } from '@mui/material';

interface ISelectInput {
    value: string[],
    register: Object,
}

const SelectInput: React.FC<ISelectInput> = ({ value, register }) => {

    return (
        <div>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 150 }}>
                <InputLabel>Group</InputLabel>
                <Select
                    {...register}
                    defaultValue={value[0]}
                >
                    {value.map(item => (
                        <MenuItem key={item} value={item}>{item}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}

export default SelectInput;
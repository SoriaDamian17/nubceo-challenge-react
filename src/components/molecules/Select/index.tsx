import React from 'react'
import { MenuItem } from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";

import SelectUi from "./styles";
import { IOption } from './types';

export default React.memo(function Select({
    background,
    colorText,
    onChange,
    options,
    valueSelected,
    width,
    height,
}: {
    background?:string,
    colorText?:string
    height?: string,
    onChange?: (value: string) => void,
    options: IOption[],
    valueSelected: string,
    width?: string,
}) {
    const [value, setValue] = useState<string>(valueSelected);

    const handleChange = (event: SelectChangeEvent<any>) => {
        setValue(event.target.value);
        onChange && onChange(event.target.value)
    };

    return (
        <SelectUi
            id="dropdown"
            label="status"
            labelId="select-status"
            onChange={handleChange}
            value={value}
            width={"10rem"}
            height={height}
        >
            {options.map((option:IOption) => 
                <MenuItem key={option.id} value={option.id}>
                    <em>{option.value}</em>
                </MenuItem>
            )}
        </SelectUi>
    )
})
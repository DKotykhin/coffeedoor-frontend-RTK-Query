import React from 'react';
import { format } from "date-fns";

import { Typography } from '@mui/material';

import { IUser } from 'types/userTypes';

const InfoTab: React.FC<{ user: IUser }> = ({ user }) => {
    const { userName, phone, createdAt } = user;

    return (
        <>
            <Typography>{userName}</Typography>
            <Typography>+{phone}</Typography>
            <Typography>
                {format(new Date(createdAt), "dd'.'LL'.'yyyy")}
            </Typography>
        </>
    )
}

export default InfoTab;
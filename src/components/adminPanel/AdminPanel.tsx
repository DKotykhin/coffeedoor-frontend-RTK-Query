import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

import { Button, Typography, Box } from "@mui/material";

import Spinner from 'components/spinner/Spinner';
import ItemTable from './itemTable/ItemTable';

import { useGetStoreQuery } from 'services/storeService';

import { IStoreItem } from 'types/storeTypes';

import styles from './adminPanel.module.scss';

const AdminPanel: React.FC = () => {

    const [itemList, setItemList] = useState<IStoreItem[]>([])

    const { data, isSuccess } = useGetStoreQuery('');
    const groups = data?.map(item => item.group);
    const buttons = [...new Set(groups)];

    const navigate = useNavigate();
    const handleReturn = () => navigate("/");

    const handleAdd = () => navigate("/admin/create");

    const handleClick = (group: string) => {
        const storeItems = data?.filter(item => item.group === group);
        setItemList(storeItems || []);
    };

    return isSuccess ? (
        <Box className={styles.admin}>
            <Typography className={styles.admin__title}>
                Admin Panel
            </Typography>
            <Box className={styles.admin__buttonBox}>
                <Button
                    className={styles.admin__return}
                    onClick={() => handleReturn()}
                >
                    Main page
                </Button>
                <Button
                    className={styles.admin__add}
                    onClick={() => handleAdd()}
                >
                    Add new item
                </Button>
            </Box>
            <Box className={styles.admin__buttons}>
                {buttons.map(item => (
                    <Button
                        key={item}
                        variant='outlined'
                        onClick={() => handleClick(item)}
                        className={styles.admin__button}
                    >
                        {item}
                    </Button>
                ))}
            </Box>
            {itemList.length ?
                <ItemTable itemList={itemList} /> : null
            }
        </Box>
    ) : <Spinner />
}

export default AdminPanel;
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import { Button, Typography, Box } from "@mui/material";

import Spinner from 'components/spinner/Spinner';
import StoreTable from './itemTable/StoreTable';
import MenuGroupTable from './itemTable/MenuGroupTable';

import { useGetStoreQuery } from 'services/storeService';
import { useGetMenuQuery } from 'services/menuService';

import { IStoreItem } from 'types/storeTypes';
import { IMenuGroup } from 'types/menuTypes';

import styles from './adminPanel.module.scss';

const AdminPanel: React.FC = () => {

    const [storeList, setStoreList] = useState<IStoreItem[]>([]);
    const [menuList, setMenuList] = useState<IMenuGroup[]>([]);

    const { t } = useTranslation("admin");

    const { data: storeData, isSuccess } = useGetStoreQuery('');
    const groups = storeData?.map(item => item.group);
    const buttons = [...new Set(groups)];

    const { data: menuData, isSuccess: menuIsSuccess } = useGetMenuQuery('');

    const navigate = useNavigate();
    const handleReturn = () => navigate("/");

    const handleAddStoreItem = () => navigate("/admin/createStoreItem");
    const handleAddMenuGroup = () => navigate("/admin/createMenuGroup");
    const handleAddMenuItem = () => navigate("/admin/createMenuItem");

    const handleClickStoreGroup = (group: string) => {
        const storeItems = storeData?.filter(item => item.group === group);
        setStoreList(storeItems || []);
        setMenuList([]);
    };

    const handleClickMenu = () => {
        setMenuList(menuData)
        setStoreList([]);
    };

    return (isSuccess && menuIsSuccess) ? (
        <Box className={styles.admin}>
            <Typography className={styles.admin__title}>
                {t("adminPageTitle")}
            </Typography>
            <Button
                className={styles.admin__return}
                onClick={() => handleReturn()}
            >
                {t("returnLink")}
            </Button>
            <Box className={styles.admin__buttons}>
                <Typography>{t("store")}</Typography>
                <Button
                    variant='contained'
                    className={styles.admin__add}
                    onClick={() => handleAddStoreItem()}
                >
                    {t("addStoreItem")}
                </Button>
                {buttons?.map(item => (
                    <Button
                        key={item}
                        variant='outlined'
                        onClick={() => handleClickStoreGroup(item)}
                        className={styles.admin__button}
                    >
                        {item}
                    </Button>
                ))}
            </Box>
            <Box className={styles.admin__buttons}>
                <Typography>{t("menu")}</Typography>
                <Button
                    variant='contained'
                    className={styles.admin__add}
                    onClick={() => handleAddMenuGroup()}
                >
                    {t("addMenuGroup")}
                </Button>
                <Button
                    variant='contained'
                    className={styles.admin__add}
                    onClick={() => handleAddMenuItem()}
                >
                    {t("addStoreItem")}
                </Button>
                <Button
                    variant='outlined'
                    className={styles.admin__add}
                    onClick={() => handleClickMenu()}
                >
                    {t("menu")}
                </Button>
            </Box>
            {storeList.length ?
                <StoreTable itemList={storeList} /> : null
            }
            {menuList.length ?
                <MenuGroupTable itemList={menuList} /> : null
            }
        </Box>
    ) : <Spinner />
}

export default AdminPanel;
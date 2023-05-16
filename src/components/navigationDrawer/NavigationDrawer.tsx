import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom";

import { List, ListItem } from "@mui/material";
import { Box, Drawer, Divider, Link as MuiLink } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import logo from 'images/webp/logo_192x192.webp';

import styles from './navigationDrawer.module.scss';

interface IDrawerTitle {
    title: string;
    id: string
}

const NavigationDrawer: React.FC = () => {

    const [state, setState] = useState(false);
    const { t, i18n } = useTranslation("first");

    const catalogTitleList: IDrawerTitle[] = [
        { title: t("titleA"), id: "#coffee" },
        { title: t("titleB"), id: "#tea" },
        { title: t("titleE"), id: "#jam" },
        { title: t("titleC"), id: "#mills" },
        { title: t("titleD"), id: "#accessories" },
    ];
    const homePageTitleList: IDrawerTitle[] = [
        { title: t("titleX"), id: "#about" },
        { title: t("titleY"), id: "#footer" },
    ];

    const lang = [
        { key: 'ua', label: 'Ua' },
        { key: 'ru', label: 'Ru' },
        { key: 'en', label: 'En' },
    ];

    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
            ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }
        setState(open);
    };

    return (
        <Box className={styles.drawer}>
            <MenuIcon
                className={styles.drawer__icon}
                onClick={toggleDrawer(true)}
            />
            <Drawer anchor="right" open={state} onClick={toggleDrawer(false)}>
                <Box className={styles.drawer__box}>
                    <img src={logo} width={100} alt='CoffeeDoor logo' />
                    <List className={styles.drawer__items}>
                        {catalogTitleList.map((text) => (
                            <ListItem key={text.id} disablePadding>
                                <MuiLink
                                    className={styles.drawer__item}
                                    href={text.id}
                                >
                                    {text.title}
                                </MuiLink>
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <List className={styles.drawer__items}>
                        {homePageTitleList.map((text) => (
                            <ListItem key={text.title} disablePadding>
                                <MuiLink
                                    className={styles.drawer__item}
                                    href={text.id}
                                >
                                    {text.title}
                                </MuiLink>
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <List className={styles.drawer__items}>
                        <Link to="/menu" style={{ textDecoration: 'none' }}>
                            <ListItem className={styles.drawer__item}>
                                {t("link_2")}
                            </ListItem>
                        </Link>
                    </List>
                    <Divider />
                    <Box className={styles.lang__box}>
                        {lang.map(item => (
                            <Box
                                key={item.key}
                                onClick={() => i18n.changeLanguage(item.key)}
                                className={(i18n.language === item.key) ? styles.lang__button_active : styles.lang__button}
                            >
                                {item.label}
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Drawer>
        </Box>
    );
}

export default NavigationDrawer;
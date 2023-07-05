import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from "react-router-dom";

import { List, ListItem, Typography } from "@mui/material";
import { Box, Drawer, Divider, Link as MuiLink } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from '@mui/icons-material/Logout';

import { useAuth } from 'hooks/useAuth';
import { langButtons } from 'hooks/useLang';
import { fetchUser } from "services/userService";
import { useAppDispatch } from "store/reduxHooks";

import logo from 'images/webp/logo_192x192.webp';

import styles from './navigationDrawer.module.scss';

interface IDrawerTitle {
    title: string;
    id: string
};

const catalogTitleList: IDrawerTitle[] = [
    { title: "titleA", id: "#coffee" },
    { title: "titleB", id: "#tea" },
    { title: "titleE", id: "#jam" },
    { title: "titleC", id: "#mills" },
    { title: "titleD", id: "#accessories" },
];
const homePageTitleList: IDrawerTitle[] = [
    { title: "titleX", id: "#about" },
    { title: "titleY", id: "#footer" },
];

const NavigationDrawer: React.FC = () => {

    const [state, setState] = useState(false);
    const { t, i18n } = useTranslation("first");
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const { data, isSuccess } = useAuth();

    const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
            ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }
        setState(open);
    };

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const handleLink = () => navigate('/admin');
    const handleLogin = () => navigate('/personal');
    const handleLogout = () => {
        sessionStorage.removeItem("rememberMe");
        localStorage.removeItem("rememberMe");
        dispatch(fetchUser.util.resetApiState());
    };

    return (
        <Box className={styles.drawer}>
            <MenuIcon
                className={styles.drawer__icon}
                onClick={toggleDrawer(true)}
            />
            <Drawer anchor="right" open={state} onClick={toggleDrawer(false)}>
                <Box className={styles.drawer__box}>
                    <img src={logo} width={100} alt='CoffeeDoor logo' onClick={handleClick} />
                    <Divider />
                    <Box className={styles.drawer__loginBox}>
                        <Typography
                            className={styles.drawer__login}
                            onClick={handleLogin}
                        >
                            {data ? data.user.userName : t("login")}
                        </Typography>
                        {isSuccess &&
                            <Box
                                className={styles.drawer__logout}
                                onClick={handleLogout}
                            >
                                <LogoutIcon />
                            </Box>
                        }
                    </Box>
                    {(data?.user.role === 'admin') ?
                        <Typography
                            className={styles.drawer__admin}
                            onClick={handleLink}
                        >
                            {t("admin")}
                        </Typography> : null
                    }
                    <Divider />
                    <List className={styles.drawer__items}>
                        {catalogTitleList.map((text) => (
                            <ListItem key={text.id} disablePadding>
                                <MuiLink
                                    className={styles.drawer__item}
                                    href={text.id}
                                >
                                    {t(text.title)}
                                </MuiLink>
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <List className={styles.drawer__items}>
                        {homePageTitleList.map((text) => (
                            <ListItem key={text.id} disablePadding>
                                <MuiLink
                                    className={styles.drawer__item}
                                    href={text.id}
                                >
                                    {t(text.title)}
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
                        {langButtons.map(item => (
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
};

export default NavigationDrawer;
import React from "react";
import { useTranslation } from 'react-i18next';

import { Box } from "@mui/system";
import { Typography, Link } from "@mui/material";

import { SocialMedia, Phone, Email } from "./footerData";

import styles from "./footer.module.scss";

const Footer: React.FC = () => {
    const { t } = useTranslation("footer");

    return (
        <Box id="footer" className={styles.footer_block}>
            <Box>
                {
                    SocialMedia.map(sm => (
                        <Link href={sm.href} key={sm.id} target='_blank' aria-label={sm.ariaLabel}>
                            <sm.icon className={styles.footer_icon} />
                        </Link>
                    ))
                }
            </Box>
            <Typography className={styles.footer_item}>
                {t("address")}
            </Typography>
            <Box className={styles.footer_item}>
                <Link href={Phone['href']}>
                    {t("phone")}
                    {Phone['phone']}
                </Link>
            </Box>
            <Box className={styles.footer_item}>
                <Link href={"mailto:" + Email['email']}>
                    {"e-mail: " + Email['email']}
                </Link>
            </Box>
        </Box>
    );
};

export default Footer;

import React from "react";
import { useTranslation } from 'react-i18next';

import { Box } from "@mui/system";
import { Typography, Link } from "@mui/material";

import { SocialMedias, Phone, Email } from "./footerData";

import styles from "./footer.module.scss";

const Footer: React.FC = () => {
    const { t } = useTranslation("footer");

    return (
        <Box id="footer" className={styles.footer_block}>
            <Box>
                {
                    SocialMedias.map(socialMedia => (
                        <Link href={socialMedia.href} key={socialMedia.id} target='_blank'>
                            <socialMedia.icon className={styles.footer_icon} />
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

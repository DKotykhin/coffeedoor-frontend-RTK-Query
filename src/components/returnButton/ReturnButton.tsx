import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

import { Box, Typography } from "@mui/material";

import styles from "./returnbutton.module.scss";

const ReturnButton: React.FC = () => {
    let { t } = useTranslation("menu");

    return (
        <Box className={styles.return}>
            <Link to="/" style={{ textDecoration: 'none' }}>
                <Typography className={styles.return__link}>{t("button")}</Typography>
            </Link>
        </Box>
    );
};

export default ReturnButton;

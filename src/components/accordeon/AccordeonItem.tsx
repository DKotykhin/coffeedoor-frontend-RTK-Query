import { useTranslation } from 'react-i18next';

import { Typography } from "@mui/material";

import { IMenuItem } from "types/menuTypes";
import { Languages } from "hooks/useLang";

import styles from './accordeon.module.scss';

interface IAccordeonItem {
    item: IMenuItem,
    lang: Languages,
}

const AccordeonItem: React.FC<IAccordeonItem> = ({ item, lang }) => {

    const { t } = useTranslation('menu');

    return (
        <>
            <Typography className={styles.accordeon__name} >
                {item.name[lang]}
            </Typography>
            <Typography className={styles.accordeon__description}>
                {item.description?.[lang]}
            </Typography>
            <Typography className={styles.accordeon__price} >
                {item.price} {t("currency")}
            </Typography>
        </>
    );
};

export default AccordeonItem;
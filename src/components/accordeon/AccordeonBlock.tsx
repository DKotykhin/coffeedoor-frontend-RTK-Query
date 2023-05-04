import React from "react";

import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { styled } from "@mui/material/styles";

import AccordeonItem from "./AccordeonItem";
import { IMenuGroup, IMenuItem, Languages } from "types/menuTypes";

import styles from './accordeon.module.scss';

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

interface IAccordeonBlock {
    blockItem: IMenuGroup,
    lang: Languages,
}

export const AccordeonBlock: React.FC<IAccordeonBlock> = ({ blockItem, lang }) => {

    return (
        <AccordionDetails>
            {blockItem?.subtitle &&
                <Typography className={styles.accordeon__subtitle} >
                    {blockItem.subtitle[lang]}
                </Typography>
            }
            {blockItem.items?.map((item: IMenuItem, i: number) => (
                <Box key={i} className={styles.accordeon__block}>
                    <AccordeonItem
                        item={item} lang={lang} />
                </Box>
            ))}
        </AccordionDetails>
    );
};

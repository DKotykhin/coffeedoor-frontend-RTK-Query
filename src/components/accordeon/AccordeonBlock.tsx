import React from "react";

import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { styled } from "@mui/material/styles";

import AccordeonItem from "./AccordeonItem";
import { IMenuGroup, IMenuItem } from "types/menuTypes";
import { Languages } from "hooks/useLang";

import styles from './accordeon.module.scss';

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

interface IAccordeonBlock {
    blockItem: IMenuGroup,
    lang: Languages,
}

const AccordeonBlock: React.FC<IAccordeonBlock> = ({ blockItem, lang }) => {

    return (
        <AccordionDetails>
            {blockItem?.subtitle &&
                <Typography className={styles.accordeon__subtitle} >
                    {blockItem.subtitle[lang]}
                </Typography>
            }
            {blockItem.items
                ?.filter(item => item.hidden === false)
                .map((item: IMenuItem, i: number) => (
                    <Box key={i} className={styles.accordeon__block}>
                        <AccordeonItem
                            item={item} lang={lang}
                        />
                    </Box>
                ))}
        </AccordionDetails>
    );
};

export default AccordeonBlock;

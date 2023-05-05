import { useState } from "react";

import { Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
    AccordionSummaryProps,
} from '@mui/material/AccordionSummary';

import ExpandMoreIcon from "@mui/icons-material/ExpandCircleDown";

import AccordeonBlock from "./AccordeonBlock";
import { IMenuGroup, Languages } from "types/menuTypes";

import styles from './accordeon.module.scss';

const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    "&:not(:last-child)": {
        borderBottom: 0,
    },
    "&:before": {
        display: "none",
    },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
        expandIcon={<ExpandMoreIcon sx={{ fontSize: "0.9rem" }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === "dark"
            ? "rgba(255, 255, 255, .05)"
            : "rgba(0, 0, 0, .03)",
    "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
        transform: "rotate(180deg)",
        color: theme.palette.primary.main,
    },
    "& .MuiAccordionSummary-content": {
        marginLeft: theme.spacing(1),
    },
}));

interface IAccordeonBlock {
    data: IMenuGroup[],
    lang: Languages,
}


const AccordeonMenu: React.FC<IAccordeonBlock> = ({ data, lang }) => {
    const [expanded, setExpanded] = useState("");

    const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : "");
    };

    return (
        <Container maxWidth="md" className={styles.accordeon}>
            {data?.map((item: IMenuGroup, i: number) => (
                <Accordion
                    key={i}
                    expanded={expanded === `panel${i}`}
                    onChange={handleChange(`panel${i}`)}
                >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography className={styles.accordeon__title} >
                            {item.title[lang]}
                        </Typography>
                    </AccordionSummary>
                    <AccordeonBlock blockItem={item} lang={lang} />
                </Accordion>
            ))}
        </Container>
    );
}

export default AccordeonMenu;

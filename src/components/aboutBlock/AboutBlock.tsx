import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from "framer-motion";

import {
    Container,
    Box,
    ImageList,
    ImageListItem,
    Typography,
} from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";

import { photoData, IPhotoData } from "./photoData";

import styles from './aboutblock.module.scss';

const srcset = (image: string, width: number, height: number, rows = 1, cols = 1) => {
    return {
        src: `${image}?w=${width * cols}&h=${height * rows
            }&fit=crop&auto=format`,
        srcSet: `${image}?w=${width * cols}&h=${height * rows
            }&fit=crop&auto=format&dpr=2 2x`,
    };
};

const listVariants = {
    visible: (i: number) => ({
        opacity: 1,
        transition: {
            delay: i * 0.5,
        },
    }),
    hidden: { opacity: 0 },
};

const AboutBlock: React.FC = () => {

    const { t } = useTranslation("about");
    const benefitsItem = [
        t("itemA"), t("itemB"), t("itemC"), t("itemD"), t("itemE"), t("itemF"),
    ];

    return (
        <Container
            id="about"
            maxWidth="lg"
            className={styles.about}
        >
            <Typography className={styles.about__title}>{t("title")}</Typography>
            <ImageList
                sx={{
                    height: 800,
                    transform: "translateZ(0)",
                }}
                gap={10}
            >
                {photoData.map((item: IPhotoData, i: number) => {
                    const cols = item.bigSize ? 2 : 1;
                    const rows = item.bigSize ? 2 : 1;
                    return (
                        <ImageListItem key={i} cols={cols} rows={rows}>
                            <img
                                {...srcset(item.img, 250, 200, rows, cols)}
                                src={item.img}
                                alt={item.alt}
                                loading="lazy"
                            />
                        </ImageListItem>
                    );
                })}
            </ImageList>
            <Box maxWidth="md" className={styles.about__box}>
                <Typography className={styles.about__slogan}>
                    Our coffee – Everything matters
                </Typography>
                <Typography className={styles.about__descr}>
                    {t("paragraph_1")}
                </Typography>
                <Typography className={styles.about__descr}>
                    {t("subtitle")}
                </Typography>
                {benefitsItem.map((item, i) => (
                    <motion.div
                        key={i}
                        initial="hidden"
                        whileInView="visible"
                        variants={listVariants}
                        custom={i}
                        viewport={{ amount: 0.3, once: true }}
                        className={styles.about__list}
                    >
                        <DoneIcon />
                        <Box className={styles.about__item}>
                            {item}
                        </Box>
                    </motion.div>
                ))}
                <Typography className={styles.about__descr}                >
                    {t("paragraph_2")}
                </Typography>
                <br />
            </Box>
        </Container>
    )
}

export default AboutBlock;
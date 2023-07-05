import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import { useScroll } from 'hooks/useScroll';

import styles from './scrollButton.module.scss';

const ScrollButton = () => {

    const y = useScroll();
    const controls = useAnimation();

    useEffect(() => {
        controls.start({
            opacity: y / document.body.scrollHeight
        });
    }, [controls, y]);

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return y > 1000 ? (
        <motion.div
            className={styles.scrollButton}
            onClick={handleClick}
            animate={controls}
            initial={{ opacity: 0 }}
        >
            <KeyboardArrowUpIcon />
        </motion.div>
    ) : null;
};

export default ScrollButton;
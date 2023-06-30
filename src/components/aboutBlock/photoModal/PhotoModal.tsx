import React from 'react';

import { Box, Modal } from '@mui/material';

import { IPhotoData } from '../photoData';

import styles from './photoModal.module.scss';

interface IPhotoModal {
    image: IPhotoData;
    open: boolean;
    handleClose: () => void;
}

const PhotoModal: React.FC<IPhotoModal> = ({ image, open, handleClose }) => {

    const { img, alt, portrait } = image;

    return (
        <Modal
            open={open}
            onClose={handleClose}
        >
            <Box className={styles.photoModal} sx={portrait ? { width: 600 } : { width: 900 }}>
                <Box onClick={handleClose} className={styles.close}>&times;</Box>
                <img src={img} alt={alt} />
            </Box>
        </Modal>
    );
};

export default PhotoModal;
import React from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination } from "swiper";

import { Box } from '@mui/material';

import waitImage from 'images/webp/wait_1.webp';

import { Languages } from "hooks/useLang";
import { IStoreItem } from 'types/storeTypes';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cube";
import "./imageSwiper.scss";

interface IImageSwiper {
    item: IStoreItem,
    lang: Languages,
}

const Base_URL = process.env.REACT_APP_BACKEND_URL;

const ImageSwiper: React.FC<IImageSwiper> = ({ item, lang }) => {

    const { images } = item;

    return (
        <Box sx={{ width: '100%', maxWidth: '350px' }}>
            {images?.length ?
                <Swiper
                    pagination={true}
                    grabCursor={true}
                    effect={"cube"}
                    cubeEffect={{
                        shadow: true,
                        slideShadows: true,
                        shadowOffset: 10,
                        shadowScale: 0.8,
                    }}
                    modules={[EffectCube, Pagination]}
                >
                    {images.map((image, i) => (
                        <SwiperSlide key={i}>
                            <img src={Base_URL + image} alt={item.itemName[lang]} />
                        </SwiperSlide>
                    ))}
                </Swiper>
                :
                <img src={waitImage} alt={'wait for'} />
            }
        </Box>
    )
}

export default ImageSwiper;
import React from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination } from "swiper";

import waitImage from 'images/webp/wait_1.webp';

import { IStoreItem } from 'types/storeTypes';
import { Languages } from 'types/menuTypes';

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

interface IImageSwiper {
    item: IStoreItem,
    lang: Languages,
}

const Base_URL = process.env.REACT_APP_BACKEND_URL;

const ImageSwiper: React.FC<IImageSwiper> = ({ item, lang }) => {

    const { images } = item;

    return (
        <>
            {images?.length ?
                <Swiper
                    effect={"cube"}
                    grabCursor={true}
                    cubeEffect={{
                        shadow: true,
                        slideShadows: true,
                        shadowOffset: 10,
                        shadowScale: 0.8,
                    }}
                    pagination={true}
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
        </>
    )
}

export default ImageSwiper;
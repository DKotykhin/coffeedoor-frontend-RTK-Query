import React from 'react';
import { Helmet } from "react-helmet";

import ThanksBlock from 'components/thanksBlock/ThanksBlock';

const ThanksPage: React.FC = () => {
    return (
        <>
            <Helmet>
                <meta name="description" content="Thanks Page" />
                <title>Дякуємо за замовлення</title>
            </Helmet>
            <ThanksBlock />
        </>

    );
};

export default ThanksPage;

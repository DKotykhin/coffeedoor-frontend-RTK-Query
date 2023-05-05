import React from 'react';
import Helmet from "react-helmet";
import { useTranslation } from 'react-i18next';

import AccordionMenu from 'components/accordeon/AccordeonMenu';

import { useGetMenuQuery } from 'services/menuService';
import Spinner from 'components/spinner/Spinner';
import MenuHeader from 'components/menuHeader/MenuHeader';
import ReturnButton from 'components/returnButton/ReturnButton';

import { Languages } from 'types/menuTypes';

const MenuPage: React.FC = () => {
    const { data, isLoading } = useGetMenuQuery('');
    const { i18n } = useTranslation('menu');

    let lang: Languages;
    switch (i18n.language) {
        case 'ua': lang = 'ua';
            break;
        case 'ru': lang = 'ru';
            break;
        case 'en': lang = 'en';
            break;
        default: lang = 'ua';
    }

    return (
        <>
            <Helmet>
                <meta name="description" content="Menu Page" />
                <title>Menu Page</title>
            </Helmet>
            <MenuHeader />
            {isLoading ? <Spinner /> : <AccordionMenu data={data} lang={lang} />}
            <ReturnButton />
        </>
    )
};

export default MenuPage;
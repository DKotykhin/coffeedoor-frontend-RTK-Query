import React from 'react';
import Helmet from "react-helmet";

import AccordionMenu from 'components/accordeon/AccordeonMenu';
import Spinner from 'components/spinner/Spinner';
import MenuHeader from 'components/menuHeader/MenuHeader';
import ReturnButton from 'components/returnButton/ReturnButton';

import { useGetMenuQuery } from 'services/menuService';
import { IMenuGroup } from 'types/menuTypes';

const MenuPage: React.FC = () => {
    const { data, isLoading } = useGetMenuQuery('');
    const visibleData = data?.filter((item: IMenuGroup) => item.hidden === false);

    return (
        <>
            <Helmet>
                <meta name="description" content="Menu Page" />
                <title>Menu Page</title>
            </Helmet>
            <MenuHeader />
            {isLoading ? <Spinner /> : <AccordionMenu data={visibleData} />}
            <ReturnButton />
        </>
    )
};

export default MenuPage;
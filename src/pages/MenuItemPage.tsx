import React from 'react';
import Helmet from "react-helmet";

import UpdateMenuItem from 'components/adminPanel/updateMenuItem/UpdateMenuItem';

const MenuItemPage: React.FC = () => {
    return (
        <>
            <Helmet>
                <meta name="description" content="Menu Item Page" />
                <title>Menu Item Page</title>
            </Helmet>
            <UpdateMenuItem />
        </>
    )
}

export { MenuItemPage };
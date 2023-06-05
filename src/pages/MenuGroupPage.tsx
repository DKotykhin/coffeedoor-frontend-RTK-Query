import React from 'react';
import Helmet from "react-helmet";

import UpdateMenuGroup from 'components/adminPanel/updateMenuGroup/UpdateMenuGroup';

const MenuGroupPage: React.FC = () => {
    return (
        <>
            <Helmet>
                <meta name="description" content="Menu Group Page" />
                <title>Menu Group Page</title>
            </Helmet>
            <UpdateMenuGroup />
        </>
    )
}

export default MenuGroupPage;
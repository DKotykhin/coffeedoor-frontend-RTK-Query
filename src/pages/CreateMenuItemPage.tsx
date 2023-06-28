import React from 'react';
import Helmet from "react-helmet";

import CreateMenuItem from 'components/adminPanel/createMenuItem/CreateMenuItem';

const CreateMenuItemPage: React.FC = () => {
    return (
        <>
            <Helmet>
                <meta name="description" content="Create Menu Item Page" />
                <title>Create Menu Item Page</title>
            </Helmet>
            <CreateMenuItem />
        </>
    )
}

export { CreateMenuItemPage };
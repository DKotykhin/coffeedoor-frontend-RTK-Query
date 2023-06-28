import React from 'react';
import Helmet from "react-helmet";

import UpdateStoreItem from 'components/adminPanel/updateStoreItem/UpdateStoreItem';

const StoreItemPage: React.FC = () => {
    return (
        <>
            <Helmet>
                <meta name="description" content="Update Item Page" />
                <title>Store Item Page</title>
            </Helmet>
            <UpdateStoreItem />
        </>
    )
}

export { StoreItemPage };
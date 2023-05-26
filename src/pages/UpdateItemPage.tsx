import React from 'react';
import Helmet from "react-helmet";

import UpdateStoreItem from 'components/adminPanel/updateStoreItem/UpdateStoreItem';

const UpdateItemPage: React.FC = () => {
    return (
        <>
            <Helmet>
                <meta name="description" content="Update Item Page" />
                <title>Update Item Page</title>
            </Helmet>
            <UpdateStoreItem />
        </>
    )
}

export default UpdateItemPage;
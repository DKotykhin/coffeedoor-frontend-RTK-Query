import React from 'react';
import Helmet from "react-helmet";

import CreateStoreItem from 'components/adminPanel/createStoreItem/CreateStoreItem';

const CreateItemPage: React.FC = () => {
    return (
        <>
            <Helmet>
                <meta name="description" content="Create Item Page" />
                <title>Create Item Page</title>
            </Helmet>
            <CreateStoreItem />
        </>
    )
}

export default CreateItemPage;
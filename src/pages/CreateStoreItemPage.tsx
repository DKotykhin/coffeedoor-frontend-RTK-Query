import React from 'react';
import Helmet from "react-helmet";

import CreateStoreItem from 'components/adminPanel/createStoreItem/CreateStoreItem';

const CreateStoreItemPage: React.FC = () => {
    return (
        <>
            <Helmet>
                <meta name="description" content="Create Store Item Page" />
                <title>Create Store Item Page</title>
            </Helmet>
            <CreateStoreItem />
        </>
    );
};

export { CreateStoreItemPage };
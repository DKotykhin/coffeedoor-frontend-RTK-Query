import React from 'react';
import Helmet from "react-helmet";

import CreateMenuGroup from 'components/adminPanel/createMenuGroup/CreateMenuGroup';

const CreateMenuGroupPage: React.FC = () => {
    return (
        <>
            <Helmet>
                <meta name="description" content="Create Menu Group Page" />
                <title>Create Menu Group Page</title>
            </Helmet>
            <CreateMenuGroup />
        </>
    )
}

export default CreateMenuGroupPage;
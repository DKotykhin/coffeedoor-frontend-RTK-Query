import React from 'react';
import Helmet from "react-helmet";

import AdminPanel from 'components/adminPanel/AdminPanel';

const AdminPage: React.FC = () => {
    return (
        <>
            <Helmet>
                <meta name="description" content="Admin Page" />
                <title>Admin Page</title>
            </Helmet>
            <AdminPanel />
        </>
    );
};

export { AdminPage };
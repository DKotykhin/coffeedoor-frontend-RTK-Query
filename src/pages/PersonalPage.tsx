import React from 'react';
import { Helmet } from "react-helmet";

import PageComponent from 'components/personalPage/PageComponent';

const PersonalPage: React.FC = () => {
    return (
        <>
            <Helmet>
                <meta name="description" content="Personal Page" />
                <title>Personal Page</title>
            </Helmet>
            <PageComponent />
        </>
    )
}

export { PersonalPage };
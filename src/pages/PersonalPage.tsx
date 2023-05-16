import PersonalHeader from 'components/personalPage/personalHeader/PersonalHeader';
import Tabs from 'components/personalPage/tabs/Tabs';
import React from 'react';
import { Helmet } from "react-helmet";

const PersonalPage: React.FC = () => {
    return (
        <>
            <Helmet>
                <meta name="description" content="Personal Page" />
                <title>Personal Page</title>
            </Helmet>
            <PersonalHeader />
            <Tabs />
        </>
    )
}

export default PersonalPage;
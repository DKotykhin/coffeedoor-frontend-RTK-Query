import React from 'react';
import Helmet from "react-helmet";

import FirstBlock from 'components/firstBlock/FirstBlock';
import InfoBlock from 'components/infoBlock/InfoBlock';
import AboutBlock from 'components/aboutBlock/AboutBlock';

const HomePage: React.FC = () => {

    return (
        <>
            <Helmet>
                <meta name="description" content="Home Page" />
                <title>Home Page</title>
            </Helmet>
            <FirstBlock />
            <InfoBlock />
            <AboutBlock />
        </>
    )
};

export default HomePage;
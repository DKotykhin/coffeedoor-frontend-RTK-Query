import React from 'react';
import Helmet from "react-helmet";

import FirstBlock from 'components/firstBlock/FirstBlock';

const HomePage: React.FC = () => {

    return (
        <>
            <Helmet>
                <meta name="description" content="Home Page" />
                <title>Home Page</title>
            </Helmet>
            <FirstBlock />
        </>
    )
};

export default HomePage;
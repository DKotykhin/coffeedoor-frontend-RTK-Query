import React from 'react';
import Helmet from "react-helmet";

const HomePage: React.FC = () => {

    return (
        <>
            <Helmet>
                <meta name="description" content="Home Page" />
                <title>Home Page</title>
            </Helmet>
            <h1>Home Page</h1>
        </>
    )
};

export default HomePage;
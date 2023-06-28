import React from 'react';

import PersonalHeader from './personalHeader/PersonalHeader';
import Tabs from './tabs/Tabs';

import { useAuth } from 'hooks/useAuth';

const PageComponent: React.FC = () => {

    const { data } = useAuth();

    return (
        <>
            <PersonalHeader />
            {data &&
                <Tabs user={data.user} />
            }
        </>
    );
};

export default PageComponent;
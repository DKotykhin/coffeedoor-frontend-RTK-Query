import React from 'react';

import { Box } from '@mui/material';

import CardList from './CardList';
import { useGetStoreQuery } from 'services/storeService';
import Spinner from 'components/spinner/Spinner';

const List = [
    {
        group: "coffee",
        title: "coffee_title",
        subtitle: "coffee_subtitle"
    },
    {
        group: "tea",
        title: "tea_title",
        subtitle: "tea_subtitle"
    },
    {
        group: "jam",
        title: "jam_title",
        subtitle: "jam_subtitle"
    },
    {
        group: "mills",
        title: "mills_title",
        subtitle: "mills_subtitle"
    },
    {
        group: "accessories",
        title: "accessories_title",
        subtitle: "accessories_subtitle"
    }
];

const CatalogList: React.FC = () => {

    const { data, isSuccess } = useGetStoreQuery('');

    return isSuccess ? (
        <>
            {List.map(item => (
                <Box key={item.group}>
                    <CardList group={item.group} title={item.title} subtitle={item.subtitle} data={data} />
                </Box>
            ))}
        </>
    ) : <Spinner />
}

export default CatalogList;
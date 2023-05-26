import React from 'react';

import { Box } from '@mui/material';

import CardList from './CardList';
import Spinner from 'components/spinner/Spinner';

import { useGetStoreQuery } from 'services/storeService';

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
            {List.map(listItem => (
                <Box key={listItem.group}>
                    <CardList
                        item={listItem}
                        data={data.filter((dataItem: { group: string; }) => dataItem.group === listItem.group)}
                    />
                </Box>
            ))}
        </>
    ) : <Spinner />
}

export default CatalogList;
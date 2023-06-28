import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Box, Typography, Stack, Chip, Badge } from "@mui/material";
import FilterAltOutlinedIcon from "@mui/icons-material/FilterAltOutlined";

import styles from './filterItem.module.scss';

interface IFilterItem {
    filterKey: string | undefined,
    filterValue: (string | undefined)[] | undefined,
    arrayLength: number | undefined,
    onSelected: (arg0: string | undefined | null) => void,
}

const FilterItem: React.FC<IFilterItem> = ({ filterKey, filterValue, onSelected, arrayLength }) => {

    const [showFilter, setShowFilter] = useState(false);
    const [selectedItem, setSelectedItem] = useState<string | undefined>(filterValue?.length ? filterValue[0] : "");
    const { t } = useTranslation('catalog');

    const filtersOpen = () => {
        setShowFilter(!showFilter);
        onSelected(t("all_button"));
        setSelectedItem(filterValue?.length ? filterValue[0] : "");
    };
    const handleSelect = (data: string | undefined) => {
        setSelectedItem(data);
        onSelected(data);
    };

    return (
        <>
            <Box className={styles.filter}>
                <Stack
                    direction="row"
                    spacing={1}
                    onClick={filtersOpen}
                    className={styles.filter__stack}
                >
                    <FilterAltOutlinedIcon />
                    <Typography>
                        {showFilter ? filterKey : t("filters")}
                    </Typography>
                </Stack>
            </Box>
            {showFilter &&
                <Stack
                    direction="row"
                    spacing={2}
                >
                    {filterValue?.map((item, i) => (
                        <Badge
                            key={i}
                            badgeContent={
                                item === selectedItem ? arrayLength : 0
                            }
                            color="primary"
                        >
                            <Chip
                                variant='outlined'
                                color={
                                    item === selectedItem
                                        ? "primary"
                                        : "default"
                                }
                                label={item}
                                onClick={() => handleSelect(item)}
                            />
                        </Badge>
                    ))}
                </Stack>
            }
        </>
    );
};

export default FilterItem;
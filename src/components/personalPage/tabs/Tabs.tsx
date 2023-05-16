import React from 'react';
import { useTranslation } from 'react-i18next';

import { Box, Container, Tab } from '@mui/material';

import { TabContext, TabList, TabPanel } from '@mui/lab';


const Tabs: React.FC = () => {
    const [value, setValue] = React.useState('1');
    const { t } = useTranslation("personal");

    const handleChange = (event: React.SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };

    return (
        <Container maxWidth='lg' >
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label={t("tabLabelA")} value="1" />
                        <Tab label={t("tabLabelB")} value="2" />
                        <Tab label={t("tabLabelC")} value="3" />
                    </TabList>
                </Box>
                <TabPanel value="1">{t("tabLabelA")}</TabPanel>
                <TabPanel value="2">{t("tabLabelB")}</TabPanel>
                <TabPanel value="3">{t("tabLabelC")}</TabPanel>
            </TabContext>
        </Container>
    );
}

export default Tabs;
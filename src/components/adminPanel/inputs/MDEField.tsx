import React, { useMemo } from "react";
import Paper from "@mui/material/Paper";

import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { Box, Typography } from "@mui/material";

interface IMDEField {
    label?: string;
    value?: string;
    MDEChange: (arg0: string) => void;
}

const MDEField: React.FC<IMDEField> = ({ value, MDEChange, label }) => {

    const options: EasyMDE.Options = useMemo(
        () => ({
            spellChecker: true,
            hideIcons: ["preview", "side-by-side", "quote", "image"],
            maxHeight: "150px",
            placeholder: "type text...",
            status: false,
            autosave: {
                enabled: true,
                delay: 1000,
                uniqueId: "MyUniqueID",
            },
        }),
        []
    );
    return (
        <Paper elevation={10} sx={{ display: 'flex', my: 1, p: 1 }}>
            <Typography sx={{ width: "160px", color: '#808080' }}>
                {label}
            </Typography>
            <Box sx={{ width: "100%" }}>
                <SimpleMDE value={value} onChange={MDEChange} options={options} />
            </Box>
        </Paper>
    );
};

export { MDEField };
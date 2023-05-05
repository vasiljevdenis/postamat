import { Box, Typography } from "@mui/material";

export default function Home() {
    const heading = "Laravel 9 Vite  with React JS";
    return (
        <Box sx={{ width: '100%', maxWidth: 500 }}>
            <Typography variant="h1" gutterBottom>
                Постамат
            </Typography>
        </Box>
    );
}
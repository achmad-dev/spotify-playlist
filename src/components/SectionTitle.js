import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export default function AlbumCard({ text }) {
  return (
    <Box sx={{
            ml: 'auto',
            mr: 'auto',
            mt: '50px',
            width: 100,
            maxWidth: '100%',
            minHeight: 70
        }}>
        <Typography gutterBottom variant="h4" component="div">
            {text}
        </Typography>
    </Box>
  );
}

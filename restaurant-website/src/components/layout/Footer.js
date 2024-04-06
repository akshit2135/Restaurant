import React from 'react';
import { Box, Typography } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
    return (
        <>
            <Box sx={{ textAlign: 'center', bgcolor: 'black', color: 'white', p: 3}}>
                <Box marginRight='15px' sx={{display: 'flex',justifyContent: 'center',"& svg":{
                    fontSize: "40px",
                    cursor: "pointer",
                    mr: 2,
                }}}>
                <InstagramIcon />
                <XIcon />
                <YouTubeIcon />
                </Box>
                <Typography variant='h5' sx={{
                    '@media (width < 600px)': {
                        fontSize: "1rem",
                    }
                }}>
                    All Rights Reserved &copy; SAEIndia
                </Typography>
            </Box>
        </>
    )
}

export default Footer

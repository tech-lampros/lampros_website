import React from 'react';
import { Box, Typography, Grid, Button } from '@mui/material';
import appImage from '../assets/hand.png'; // Replace with correct path
import playStore from '../assets/playstore.png'; // Replace with correct path
import appStore from '../assets/playstore.png'; // Replace with correct path
import logo from '../assets/logo.png'; // Replace with correct path

const AppDownload = () => {
  return (
    <Box
      sx={{
        bgcolor: '#FFFBFB',
        py: 6,
        px: { xs: 2, sm: 4, md: 8 }, // Adjust padding for different screen sizes
      }}
    >
      <Grid container spacing={4} alignItems="center">
        {/* App Image Section */}
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            textAlign: { xs: 'center', md: 'left' }, // Center on small screens
            mb: { xs: 4, md: 0 }, // Add margin-bottom on small screens
          }}
        >
          <img
            src={appImage}
            alt="App Screenshot"
            style={{
              width: '100%', // Automatically scale on small screens
              maxWidth: '300px', // Restrict maximum size for larger screens
              height: 'auto', // Maintain aspect ratio
              objectFit: 'contain', // Ensure proper scaling
            }}
          />
        </Grid>

        {/* App Info Section */}
        <Grid item xs={12} md={6}>
          {/* Title */}
          <Typography
            sx={{
              fontFamily: 'Muller, sans-serif',
              fontSize: { xs: '24px', md: '32px' }, // Adjust font size for smaller screens
              fontWeight: 500,
              lineHeight: '28.8px',
              letterSpacing: '1.336px',
              textAlign: { xs: 'center', md: 'left' }, // Center on small screens
              mb: 2,
            }}
          >
            The best of{' '}
            <Box
              component="img"
              src={logo}
              alt="Logo"
              sx={{
                height: { xs: '24px', md: '32px' }, // Adjust logo size for smaller screens
                verticalAlign: 'middle',
                display: 'inline-block',
                objectFit: 'contain',
              }}
            />{' '}
            is in the app
          </Typography>

          {/* Description */}
          <Typography
            sx={{
              fontFamily: 'Montserrat, sans-serif',
              fontSize: { xs: '14px', md: '16px' }, // Adjust font size for smaller screens
              fontWeight: 500,
              lineHeight: '19.2px',
              letterSpacing: '0.668px',
              textAlign: { xs: 'center', md: 'left' }, // Center on small screens
              color: '#666',
              mb: 4,
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            pellente ac erat nec pretium.
          </Typography>

          {/* Download Buttons */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: { xs: 'center', md: 'flex-start' }, // Center on small screens
              gap: 2,
            }}
          >
            <Button
              component="a"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                padding: 0,
                bgcolor: 'transparent',
                '&:hover': { bgcolor: 'transparent' },
              }}
            >
              <img
                src={playStore}
                alt="Get it on Google Play"
                style={{
                  height: '48px', // Fixed height for consistency
                  width: 'auto', // Maintain aspect ratio
                }}
              />
            </Button>

            <Button
              component="a"
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                padding: 0,
                bgcolor: 'transparent',
                '&:hover': { bgcolor: 'transparent' },
              }}
            >
              <img
                src={appStore}
                alt="Download on the App Store"
                style={{
                  height: '48px', // Fixed height for consistency
                  width: 'auto', // Maintain aspect ratio
                }}
              />
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AppDownload;

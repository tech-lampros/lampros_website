import React from 'react';
import { FaUserTie, FaComments, FaStar } from 'react-icons/fa';
import { Box, Typography, Grid } from '@mui/material';

const Benefits = () => {
  const benefitItems = [
    {
      icon: <FaUserTie size={32} />,
      title: 'Qualified Employees',
      text: 'Our team consists of more than 4 qualified and experienced real estate brokers and property managers ready to help you.',
    },
    {
      icon: <FaComments size={32} />,
      title: 'Free Consultations',
      text: 'Our acquaintance with a client always begins with a free consultation to find out what kind of property they are looking for.',
    },
    {
      icon: <FaStar size={32} />,
      title: '100% Guaranteed',
      text: 'Our service quality is 100% guaranteed to ensure maximum client satisfaction.',
    },
  ];

  return (
    <Box
      sx={{
        bgcolor: '#FFFBFB',
        py: 6,
        px: '10%', // Consistent horizontal padding for the entire section
      }}
    >
      {/* Main Title */}
      <Typography
        variant="h4"
        sx={{
          fontFamily: 'Montserrat, sans-serif',
          fontSize: '24px',
          fontWeight: 600,
          lineHeight: '28.8px',
          letterSpacing: '1px',
          textAlign: 'center',
          mb: 4,
        }}
      >
        Benefits
      </Typography>

      {/* Icons in a Row */}
      <Grid container spacing={4} justifyContent="flex-start" sx={{ mb: 6 }}>
        {benefitItems.map((item, index) => (
          <Grid
            item
            xs={4}
            key={index}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}
          >
            <Box
              sx={{
                width: '51.8px',
                height: '43.11px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                bgcolor: '#FCEED4',
                borderRadius: '8px',
              }}
            >
              <Box sx={{ color: '#222831', opacity: 1 }}>{item.icon}</Box>
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* Subtitles and Details */}
      <Grid container spacing={4}>
        {benefitItems.map((item, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
            }}
          >
            {/* Subtitle */}
            <Typography
              sx={{
                fontFamily: 'Outfit, sans-serif',
                fontSize: '16px',
                fontWeight: 400,
                lineHeight: '20.16px',
                letterSpacing: '1px',
                textAlign: 'left',
                mb: 1,
              }}
            >
              {item.title}
            </Typography>

            {/* Details */}
            <Typography
              sx={{
                fontFamily: 'Montserrat, sans-serif',
                fontSize: '12px',
                fontWeight: 300,
                lineHeight: '14.63px',
                letterSpacing: '1px',
                textAlign: 'left',
                color: '#666',
              }}
            >
              {item.text}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Benefits;
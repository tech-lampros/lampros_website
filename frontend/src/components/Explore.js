import React from 'react';
import { Box, Typography, Grid, Card, CardMedia, CardContent } from '@mui/material';
import img1 from '../assets/expo1.png';
import img2 from '../assets/expo2.png';
import img3 from '../assets/expo3.png';
import img4 from '../assets/expo4.png';

const Explore = ({ onDesignsClick, onProductsClick, onProfessionalsClick }) => {
  const items = [
    {
      img: img1,
      title: 'Explore Designs',
      text: 'Thousands of unique and stylish designs for kitchens, bedrooms, dining areas, and much more are available to suit every taste and need.',
      onClick: () => onDesignsClick('image'),
    },
    {
      img: img2,
      title: 'Find Professionals',
      text: 'Thousands of unique and stylish designs for kitchens, bedrooms, dining areas, and much more are available to suit every taste and need.',
      onClick: () => onProfessionalsClick('image'),
    },
    {
      img: img3,
      title: 'Find Products & Materials',
      text: 'Thousands of unique and stylish designs for kitchens, bedrooms, dining areas, and much more are available to suit every taste and need.',
      onClick: () => onProductsClick('image'),
    },
    {
      img: img4,
      title: 'Properties & Lands',
      text: 'Thousands of unique and stylish designs for kitchens, bedrooms, dining areas, and much more are available to suit every taste and need.',
      onClick: () => console.log('Properties & Lands clicked'),
    },
  ];

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '1440px',
        margin: '0 auto',
        padding: { xs: '0 20px', md: '0 177px' },
        textAlign: 'center',
        backgroundColor: '#FFFBFB'
      }}
    >
      {/* Main Title */}
      <Typography
        variant="h2"
        sx={{
          fontFamily: 'Montserrat, sans-serif',
          fontSize: '24px',
          fontWeight: 600,
          lineHeight: '52.8px',
          letterSpacing: '1px',
          textAlign: 'center',
          mb: '44px',
        }}
      >
        Explore Lampros
      </Typography>

      {/* Grid Layout */}
      <Grid container spacing={4}>
        {items.map((item, index) => (
          <Grid item xs={12} sm={6} md={6} key={index}>
            <Card
              onClick={item.onClick}
              sx={{
                display: 'flex',
                alignItems: 'center',
                boxShadow: 'none',
                cursor: 'pointer',
                padding: 2,
                textAlign: 'start',
                backgroundColor: '#FFFBFB'
              }}
            >
              {/* Image Box */}
              <CardMedia
                component="img"
                image={item.img}
                alt={item.title}
                sx={{
                  width: { xs: '100px' , md: '250px'},
                  height: 'auto',
                  borderRadius: '50%', // Make the image circular
                  objectFit: 'cover',
                  marginRight: 2,
                }}
              />

              {/* Card Content */}
              <CardContent sx={{ padding: 0 }}>
                {/* Sub-title */}
                <Typography
                  variant="h3"
                  sx={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '16px',
                    fontWeight: 500,
                    lineHeight: '19.5px',
                    textAlign:'start',
                    mb: 1,
                  }}
                >
                  {item.title}
                </Typography>

                {/* Description */}
                <Typography
                  variant="body2"
                  sx={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontSize: '12px',
                    fontWeight: 400,
                    lineHeight: '24px',
                    textAlign:'start',
                  }}
                >
                  {item.text}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Explore;
import React, { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Modal,
  Select,
  MenuItem,
  FormControl,
} from '@mui/material';

import bedroom from '../assets/designs/service-bedroom.png';
import kitchen from '../assets/designs/service-kitchen.png';
import bathroom from '../assets/designs/service-bathroom.png';
import livingroom from '../assets/designs/service-livingroom.png';
import storage from '../assets/designs/service-storage.png';
import dining from '../assets/designs/service-dining.png';
import staircase from '../assets/designs/service-staircase.png';
import elevation from '../assets/designs/service-elevation.png';
import bhk3 from '../assets/designs/service-3bhk.png';

const designs = [
  {
    title: 'Modern Budget Living Room',
    src: livingroom,
    alt: 'Modern Living Room',
    price: '₹ 42 Lacks',
    location: '3BHK, 1480 sqft, Kozhikode, Kerala',
  },
  {
    title: 'Classic Interior 3BHK',
    src: bhk3,
    alt: 'Classic 3BHK',
    price: '₹ 50 Lacks',
    location: '3BHK, 1600 sqft, Calicut, Kerala',
  },
  {
    title: 'Luxury Bedroom Suite',
    src: bedroom,
    alt: 'Luxury Bedroom',
    price: '₹ 35 Lacks',
    location: '2BHK, 1200 sqft, Ernakulam, Kerala',
  },
  {
    title: 'Spacious Modular Kitchen',
    src: kitchen,
    alt: 'Spacious Kitchen',
    price: '₹ 25 Lacks',
    location: '1BHK, 800 sqft, Thrissur, Kerala',
  },
  {
    title: 'Elegant Dining Space',
    src: dining,
    alt: 'Dining Space',
    price: '₹ 30 Lacks',
    location: '3BHK, 1400 sqft, Malappuram, Kerala',
  },
  {
    title: 'Contemporary Staircase Design',
    src: staircase,
    alt: 'Staircase Design',
    price: '₹ 15 Lacks',
    location: 'Duplex, 2000 sqft, Kannur, Kerala',
  },
  {
    title: 'Stylish Storage Ideas',
    src: storage,
    alt: 'Storage Design',
    price: '₹ 18 Lacks',
    location: '2BHK, 1000 sqft, Trivandrum, Kerala',
  },
  {
    title: 'Modern Bathroom Designs',
    src: bathroom,
    alt: 'Modern Bathroom',
    price: '₹ 10 Lacks',
    location: '1BHK, 750 sqft, Kollam, Kerala',
  },
  {
    title: 'Elegant Elevation Concepts',
    src: elevation,
    alt: 'Elegant Elevation',
    price: '₹ 60 Lacks',
    location: '4BHK, 2500 sqft, Wayanad, Kerala',
  },
];

const DesignsPage = () => {
  const [modalImage, setModalImage] = useState(null);

  const openModal = (image) => {
    setModalImage(image);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <Box sx={{ px: '8%', py: 6 }}>
      {/* Header Section */}
      <Box sx={{ mb: 4 }}>
        <Typography
          sx={{
            fontFamily: 'Outfit, sans-serif',
            fontSize: '11.62px',
            fontWeight: 400,
            lineHeight: '9.96px',
            letterSpacing: '0.415px',
            mb: 2,
          }}
        >
          Home › Designs › Living Room
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontFamily: 'Outfit, sans-serif',
            fontSize: '24px',
            fontWeight: 600,
            mb: 2,
          }}
        >
          Living Room Designs
        </Typography>
        <Typography
          sx={{
            fontFamily: 'Outfit, sans-serif',
            fontSize: '14px',
            fontWeight: 400,
            lineHeight: '1.6',
            textAlign: 'start',
            mb: 4,
          }}
        >
          Discover a wide range of handpicked living room interior designs and décor ideas at Livspace. We bring you living room designs that are customizable, practical, and trendy. Browse now to create a space that reflects your style.
        </Typography>
      </Box>

      {/* Filter Section */}
      <Grid container spacing={2} sx={{ mb: 4 }}>
        {['Sort By', 'Filter By', 'Type', 'Category', 'City', 'Built Up Area', 'Layout', 'Cost'].map((filter, index) => (
          <Grid item xs={6} sm={6} md={3} key={index}>
            <FormControl fullWidth>
              <Select
                defaultValue={filter}
                sx={{
                  fontFamily: 'Outfit, sans-serif',
                  fontSize: '12px',
                }}
              >
                <MenuItem value={filter}>{filter}</MenuItem>
                <MenuItem value="Option 1">Option 1</MenuItem>
                <MenuItem value="Option 2">Option 2</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        ))}
      </Grid>

      {/* Designs Grid */}
      <Grid container spacing={4}>
        {designs.map((design, index) => (
          <Grid item xs={6} sm={4} md={3} key={index}>
            <Card
              sx={{
                borderRadius: 2,
                cursor: 'pointer',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
                bgcolor: '#FFFBFB',
              }}
              onClick={() => openModal(design.src)}
            >
              <CardMedia
                component="img"
                image={design.src}
                alt={design.alt}
                sx={{
                  height: 160,
                  borderRadius: 2,
                  objectFit: 'cover',
                }}
              />
              <CardContent>
                <Typography
                  sx={{
                    fontFamily: 'Outfit, sans-serif',
                    fontSize: '11.62px',
                    fontWeight: 400,
                    textAlign: 'start',
                    lineHeight: '9.96px',
                    letterSpacing: '0.415px',
                    mb: 1,
                  }}
                >
                  {design.title}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'Outfit, sans-serif',
                    fontSize: '13.28px',
                    fontWeight: 400,
                    lineHeight: '11.62px',
                    textAlign: 'start',
                  }}
                >
                  {design.location}
                </Typography>
                <Typography
                  sx={{
                    color: '#0D1717',
                    fontFamily: 'Outfit, sans-serif',
                    textAlign: 'start',
                    fontSize: '14px',
                    fontWeight: 600,
                    mt: 1,
                  }}
                >
                  {design.price}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Modal */}
      <Modal open={!!modalImage} onClose={closeModal}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
          }}
        >
          <img src={modalImage} alt="Full view" style={{ width: '100%', borderRadius: '8px' }} />
        </Box>
      </Modal>
    </Box>
  );
};

export default DesignsPage;

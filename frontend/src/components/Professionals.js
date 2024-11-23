import React from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Avatar,
  Chip,
  Divider,
} from '@mui/material';
import { Star, Verified, Group, Work, CalendarToday } from '@mui/icons-material';

const professionals = [
  {
    name: 'AR Architects',
    profession: 'Architect',
    location: 'Palakutty, Kozhikode, Kerala',
    phone: '+91 9876543210',
    experience: '10 Years',
    followers: 500,
    hired: 2,
    projects: 5,
    badges: ['Verified', 'Customer Hired'],
    reviews: [
      {
        reviewer: 'John Doe',
        role: 'Home Owner',
        text: 'Excellent service, timely delivery, and very professional!',
        rating: 5,
      },
    ],
    images: [
      'https://via.placeholder.com/100', // Replace with actual image URLs
      'https://via.placeholder.com/100',
      'https://via.placeholder.com/100',
    ],
  },
  {
    name: 'Civil Eng Co.',
    profession: 'Civil Engineer',
    location: 'Kochi, Ernakulam, Kerala',
    phone: '+91 9988776655',
    experience: '8 Years',
    followers: 300,
    hired: 5,
    projects: 15,
    badges: ['Verified'],
    reviews: [
      {
        reviewer: 'Jane Smith',
        role: 'Home Owner',
        text: 'The engineers were highly skilled and cooperative throughout.',
        rating: 4,
      },
    ],
    images: [
      'https://via.placeholder.com/100', // Replace with actual image URLs
      'https://via.placeholder.com/100',
      'https://via.placeholder.com/100',
    ],
  },
  {
    name: 'AR Architects',
    profession: 'Architect',
    location: 'Palakutty, Kozhikode, Kerala',
    phone: '+91 9876543210',
    experience: '10 Years',
    followers: 500,
    hired: 2,
    projects: 5,
    badges: ['Verified', 'Customer Hired'],
    reviews: [
      {
        reviewer: 'John Doe',
        role: 'Home Owner',
        text: 'Excellent service, timely delivery, and very professional!',
        rating: 5,
      },
    ],
    images: [
      'https://via.placeholder.com/100', // Replace with actual image URLs
      'https://via.placeholder.com/100',
      'https://via.placeholder.com/100',
    ],
  },
  {
    name: 'Civil Eng Co.',
    profession: 'Civil Engineer',
    location: 'Kochi, Ernakulam, Kerala',
    phone: '+91 9988776655',
    experience: '8 Years',
    followers: 300,
    hired: 5,
    projects: 15,
    badges: ['Verified'],
    reviews: [
      {
        reviewer: 'Jane Smith',
        role: 'Home Owner',
        text: 'The engineers were highly skilled and cooperative throughout.',
        rating: 4,
      },
    ],
    images: [
      'https://via.placeholder.com/100', // Replace with actual image URLs
      'https://via.placeholder.com/100',
      'https://via.placeholder.com/100',
    ],
  },
  {
    name: 'AR Architects',
    profession: 'Architect',
    location: 'Palakutty, Kozhikode, Kerala',
    phone: '+91 9876543210',
    experience: '10 Years',
    followers: 500,
    hired: 2,
    projects: 5,
    badges: ['Verified', 'Customer Hired'],
    reviews: [
      {
        reviewer: 'John Doe',
        role: 'Home Owner',
        text: 'Excellent service, timely delivery, and very professional!',
        rating: 5,
      },
    ],
    images: [
      'https://via.placeholder.com/100', // Replace with actual image URLs
      'https://via.placeholder.com/100',
      'https://via.placeholder.com/100',
    ],
  },
  {
    name: 'Civil Eng Co.',
    profession: 'Civil Engineer',
    location: 'Kochi, Ernakulam, Kerala',
    phone: '+91 9988776655',
    experience: '8 Years',
    followers: 300,
    hired: 5,
    projects: 15,
    badges: ['Verified'],
    reviews: [
      {
        reviewer: 'Jane Smith',
        role: 'Home Owner',
        text: 'The engineers were highly skilled and cooperative throughout.',
        rating: 4,
      },
    ],
    images: [
      'https://via.placeholder.com/100', // Replace with actual image URLs
      'https://via.placeholder.com/100',
      'https://via.placeholder.com/100',
    ],
  },
  {
    name: 'AR Architects',
    profession: 'Architect',
    location: 'Palakutty, Kozhikode, Kerala',
    phone: '+91 9876543210',
    experience: '10 Years',
    followers: 500,
    hired: 2,
    projects: 5,
    badges: ['Verified', 'Customer Hired'],
    reviews: [
      {
        reviewer: 'John Doe',
        role: 'Home Owner',
        text: 'Excellent service, timely delivery, and very professional!',
        rating: 5,
      },
    ],
    images: [
      'https://via.placeholder.com/100', // Replace with actual image URLs
      'https://via.placeholder.com/100',
      'https://via.placeholder.com/100',
    ],
  },
  {
    name: 'Civil Eng Co.',
    profession: 'Civil Engineer',
    location: 'Kochi, Ernakulam, Kerala',
    phone: '+91 9988776655',
    experience: '8 Years',
    followers: 300,
    hired: 5,
    projects: 15,
    badges: ['Verified'],
    reviews: [
      {
        reviewer: 'Jane Smith',
        role: 'Home Owner',
        text: 'The engineers were highly skilled and cooperative throughout.',
        rating: 4,
      },
    ],
    images: [
      'https://via.placeholder.com/100', // Replace with actual image URLs
      'https://via.placeholder.com/100',
      'https://via.placeholder.com/100',
    ],
  },
  {
    name: 'AR Architects',
    profession: 'Architect',
    location: 'Palakutty, Kozhikode, Kerala',
    phone: '+91 9876543210',
    experience: '10 Years',
    followers: 500,
    hired: 2,
    projects: 5,
    badges: ['Verified', 'Customer Hired'],
    reviews: [
      {
        reviewer: 'John Doe',
        role: 'Home Owner',
        text: 'Excellent service, timely delivery, and very professional!',
        rating: 5,
      },
    ],
    images: [
      'https://via.placeholder.com/100', // Replace with actual image URLs
      'https://via.placeholder.com/100',
      'https://via.placeholder.com/100',
    ],
  },
  {
    name: 'Civil Eng Co.',
    profession: 'Civil Engineer',
    location: 'Kochi, Ernakulam, Kerala',
    phone: '+91 9988776655',
    experience: '8 Years',
    followers: 300,
    hired: 5,
    projects: 15,
    badges: ['Verified'],
    reviews: [
      {
        reviewer: 'Jane Smith',
        role: 'Home Owner',
        text: 'The engineers were highly skilled and cooperative throughout.',
        rating: 4,
      },
    ],
    images: [
      'https://via.placeholder.com/100', // Replace with actual image URLs
      'https://via.placeholder.com/100',
      'https://via.placeholder.com/100',
    ],
  },
  {
    name: 'AR Architects',
    profession: 'Architect',
    location: 'Palakutty, Kozhikode, Kerala',
    phone: '+91 9876543210',
    experience: '10 Years',
    followers: 500,
    hired: 2,
    projects: 5,
    badges: ['Verified', 'Customer Hired'],
    reviews: [
      {
        reviewer: 'John Doe',
        role: 'Home Owner',
        text: 'Excellent service, timely delivery, and very professional!',
        rating: 5,
      },
    ],
    images: [
      'https://via.placeholder.com/100', // Replace with actual image URLs
      'https://via.placeholder.com/100',
      'https://via.placeholder.com/100',
    ],
  },
  {
    name: 'Civil Eng Co.',
    profession: 'Civil Engineer',
    location: 'Kochi, Ernakulam, Kerala',
    phone: '+91 9988776655',
    experience: '8 Years',
    followers: 300,
    hired: 5,
    projects: 15,
    badges: ['Verified'],
    reviews: [
      {
        reviewer: 'Jane Smith',
        role: 'Home Owner',
        text: 'The engineers were highly skilled and cooperative throughout.',
        rating: 4,
      },
    ],
    images: [
      'https://via.placeholder.com/100', // Replace with actual image URLs
      'https://via.placeholder.com/100',
      'https://via.placeholder.com/100',
    ],
  },
];

const Professionals = () => {
  return (
    <Box sx={{ px: '8%', py: 6 }}>
      <Typography
        variant="h4"
        sx={{
          fontFamily: 'Outfit, sans-serif',
          fontSize: '24px',
          fontWeight: 600,
          mb: 4,
        }}
      >
        Find Professionals
      </Typography>
      <Grid container spacing={4}>
        {professionals.map((professional, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ boxShadow: 3, borderRadius: 2, overflow: 'hidden' }}>
              <CardContent>
                {/* Header Section */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'start' }}>
                    <Avatar
                      src="https://via.placeholder.com/50" // Placeholder avatar image
                      alt={professional.name}
                      sx={{ width: 50, height: 50, mr: 2 }}
                    />
                    <Box>
                      <Typography
                        variant="h6"
                        sx={{
                          fontFamily: 'Outfit, sans-serif',
                          fontSize: '14px',
                          fontWeight: 600,
                          color: '#222831',
                          textAlign: 'start',
                        }}
                      >
                        {professional.name}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: 'Outfit, sans-serif',
                          fontSize: '10px',
                          color: '#717171',
                          textAlign: 'start',
                        }}
                      >
                        {professional.profession} <br /> {professional.location}
                      </Typography>
                    </Box>
                  </Box>
                  <Button
                    variant="contained"
                    color="warning"
                    sx={{
                      textTransform: 'none',
                      fontFamily: 'Outfit, sans-serif',
                      fontSize: '14px',
                      fontWeight: 500,
                      padding: '8px 16px',
                      borderRadius: 2,
                      height: '40px',
                    }}
                  >
                    Contact
                  </Button>
                </Box>
                <Divider sx={{ mb: 2 }} />

                {/* Details Section */}
                <Box
                  sx={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(4, 1fr)',
                    gap: 1,
                    textAlign: 'start',
                  }}
                >
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: 'Outfit, sans-serif',
                      fontSize: '11px',
                      color: '#222831',
                    }}
                  >
                    <CalendarToday fontSize="small" sx={{ mr: 1 }} />
                    {professional.experience}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: 'Outfit, sans-serif',
                      fontSize: '11px',
                      color: '#222831',
                    }}
                  >
                    <Group fontSize="small" sx={{ mr: 1 }} />
                    {professional.followers} Followers
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: 'Outfit, sans-serif',
                      fontSize: '11px',
                      color: '#222831',
                    }}
                  >
                    <Work fontSize="small" sx={{ mr: 1 }} />
                    Hired: {professional.hired}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontFamily: 'Outfit, sans-serif',
                      fontSize: '11px',
                      color: '#222831',
                    }}
                  >
                    <Work fontSize="small" sx={{ mr: 1 }} />
                    Projects: {professional.projects}
                  </Typography>
                </Box>

                {/* Badges Section */}
                <Box sx={{ display: 'flex', gap: 1, mt: 2, mb: 2 }}>
                  {professional.badges.map((badge, idx) => (
                    <Chip
                      key={idx}
                      label={badge}
                      icon={badge === 'Verified' ? <Verified /> : <Work />}
                      color="primary"
                      variant="outlined"
                      sx={{
                        fontFamily: 'Outfit, sans-serif',
                        fontSize: '12px',
                      }}
                    />
                  ))}
                </Box>

                {/* Images Section */}
                <Box sx={{ display: 'flex', gap: 1, overflowX: 'auto' }}>
                  {professional.images.map((image, imgIdx) => (
                    <Box
                      key={imgIdx}
                      component="img"
                      src={image}
                      alt={`${professional.name} work`}
                      sx={{
                        width: 80,
                        height: 80,
                        borderRadius: 2,
                        objectFit: 'cover',
                        border: '1px solid #ddd',
                      }}
                    />
                  ))}
                </Box>

                {/* Review Section */}
                {professional.reviews.map((review, reviewIdx) => (
                  <Box key={reviewIdx} sx={{ mt: 2 }}>
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: 'Outfit, sans-serif',
                        fontSize: '12px',
                        fontWeight: 500,
                      }}
                    >
                      Reviews: {review.reviewer} · {review.role}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        fontFamily: 'Outfit, sans-serif',
                        fontSize: '12px',
                        color: '#717171',
                      }}
                    >
                      {review.text}
                    </Typography>
                    <Typography>
                      <Star fontSize="small" sx={{ color: '#FF7800' }} />{' '}
                      <Star fontSize="small" sx={{ color: '#FF7800' }} />{' '}
                      <Star fontSize="small" sx={{ color: '#FF7800' }} />{' '}
                      <Star fontSize="small" sx={{ color: '#FF7800' }} />{' '}
                      <Star fontSize="small" sx={{ color: '#FF7800' }} />
                    </Typography>
                  </Box>
                ))}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Professionals;

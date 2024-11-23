import React from 'react';
import {
  Box,
  Typography,
  Grid,
  IconButton,
  List,
  ListItem,
} from '@mui/material';
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa';
import logo from '../assets/logo white.png'; // Replace with the correct path

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#352130',
        color: '#FFFFFF',
        py: 6,
        px: { xs: '10%', md: '20%' }, // Set consistent horizontal padding
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '12px',
        fontWeight: 400,
        lineHeight: '13.92px',
        textAlign: 'left',
      }}
    >
      {/* Footer Content */}
      <Grid container spacing={4}>
        {/* About Section */}
        <Grid item xs={12} md={4}>
          <Box>
            <img
              src={logo}
              alt="Lampros Logo"
              style={{ width: '250px', marginBottom: '16px' }}
            />
            <Typography sx={{ mb: 2 }}>
              A real tech company for complete home solutions under one roof.
            </Typography>
            <Box>
              <Typography sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <FaEnvelope style={{ marginRight: '8px' }} />{' '}
                careers.lampros@gmail.com
              </Typography>
              <Typography sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <FaPhoneAlt style={{ marginRight: '8px' }} /> +91 7592990050
              </Typography>
              <Typography sx={{ display: 'flex', alignItems: 'center' }}>
                <FaMapMarkerAlt style={{ marginRight: '8px' }} /> Calicut,
                Koduvally
              </Typography>
            </Box>
            <Box sx={{ mt: 2 }}>
              <IconButton
                onClick={() =>
                  window.open('https://www.instagram.com', '_blank')
                }
                aria-label="Instagram"
                sx={{ color: '#FFFFFF' }}
              >
                <FaInstagram />
              </IconButton>
              <IconButton
                onClick={() =>
                  window.open('https://www.facebook.com', '_blank')
                }
                aria-label="Facebook"
                sx={{ color: '#FFFFFF' }}
              >
                <FaFacebookF />
              </IconButton>
              <IconButton
                onClick={() =>
                  window.open('https://www.twitter.com', '_blank')
                }
                aria-label="Twitter"
                sx={{ color: '#FFFFFF' }}
              >
                <FaTwitter />
              </IconButton>
              <IconButton
                onClick={() =>
                  window.open('https://www.linkedin.com', '_blank')
                }
                aria-label="LinkedIn"
                sx={{ color: '#FFFFFF' }}
              >
                <FaLinkedinIn />
              </IconButton>
              <IconButton
                onClick={() =>
                  window.open('https://www.youtube.com', '_blank')
                }
                aria-label="YouTube"
                sx={{ color: '#FFFFFF' }}
              >
                <FaYoutube />
              </IconButton>
            </Box>
          </Box>
        </Grid>

        {/* Company Links */}
        <Grid item xs={12} md={4}>
          <Typography
            variant="h6"
            sx={{
              fontSize: '14px',
              fontWeight: 600,
              mb: 2,
              textTransform: 'uppercase',
            }}
          >
            Company
          </Typography>
          <List disablePadding>
            <ListItem
              disableGutters
              sx={{ mb: 1, cursor: 'pointer', '&:hover': { opacity: 0.8 } }}
              onClick={() => console.log('About us clicked')}
            >
              About us
            </ListItem>
            <ListItem
              disableGutters
              sx={{ mb: 1, cursor: 'pointer', '&:hover': { opacity: 0.8 } }}
              onClick={() => console.log('Become a pro clicked')}
            >
              Become a pro
            </ListItem>
            <ListItem
              disableGutters
              sx={{ cursor: 'pointer', '&:hover': { opacity: 0.8 } }}
              onClick={() => console.log('Contact us clicked')}
            >
              Contact us
            </ListItem>
          </List>
        </Grid>

        {/* Support Links */}
        <Grid item xs={12} md={4}>
          <Typography
            variant="h6"
            sx={{
              fontSize: '14px',
              fontWeight: 600,
              mb: 2,
              textTransform: 'uppercase',
            }}
          >
            Support
          </Typography>
          <List disablePadding>
            <ListItem
              disableGutters
              sx={{ mb: 1, cursor: 'pointer', '&:hover': { opacity: 0.8 } }}
              onClick={() => console.log('Terms of services clicked')}
            >
              Terms of services
            </ListItem>
            <ListItem
              disableGutters
              sx={{ mb: 1, cursor: 'pointer', '&:hover': { opacity: 0.8 } }}
              onClick={() => console.log('Privacy policy clicked')}
            >
              Privacy policy
            </ListItem>
            <ListItem
              disableGutters
              sx={{ cursor: 'pointer', '&:hover': { opacity: 0.8 } }}
              onClick={() => console.log('Legal clicked')}
            >
              Legal
            </ListItem>
          </List>
        </Grid>
      </Grid>

      {/* Footer Bottom */}
      <Box
        sx={{
          textAlign: 'center',
          mt: 4,
          pt: 2,
          borderTop: '1px solid rgba(255, 255, 255, 0.2)',
        }}
      >
        <Typography>
          &copy; Lampros 2024. All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
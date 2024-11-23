import React, { useState } from 'react';
import {
  Box,
  Typography,
  IconButton,
  Collapse,
  List,
  ListItem,
  ListItemText,
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
import logo from '../assets/logo white.png';

const FooterMobile = () => {
  const [companyOpen, setCompanyOpen] = useState(false);
  const [supportOpen, setSupportOpen] = useState(false);

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: '#352130',
        color: '#FFFFFF',
        py: 4,
        px: 2,
        fontFamily: 'Outfit, sans-serif',
      }}
    >
      {/* Company Section */}
      <Box
        sx={{
          borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
          mb: 2,
          pb: 2,
        }}
      >
        <Typography
          variant="h6"
          onClick={() => setCompanyOpen(!companyOpen)}
          sx={{
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 600,
          }}
        >
          Company
        </Typography>
        <Collapse in={companyOpen}>
          <List>
            <ListItem button>
              <ListItemText
                primary="About Us"
                primaryTypographyProps={{
                  fontSize: '14px',
                  fontWeight: 500,
                }}
              />
            </ListItem>
            <ListItem button>
              <ListItemText
                primary="Become a Pro"
                primaryTypographyProps={{
                  fontSize: '14px',
                  fontWeight: 500,
                }}
              />
            </ListItem>
            <ListItem button>
              <ListItemText
                primary="Contact Us"
                primaryTypographyProps={{
                  fontSize: '14px',
                  fontWeight: 500,
                }}
              />
            </ListItem>
          </List>
        </Collapse>
      </Box>

      {/* Support Section */}
      <Box
        sx={{
          borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
          mb: 2,
          pb: 2,
        }}
      >
        <Typography
          variant="h6"
          onClick={() => setSupportOpen(!supportOpen)}
          sx={{
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 600,
          }}
        >
          Support
        </Typography>
        <Collapse in={supportOpen}>
          <List>
            <ListItem button>
              <ListItemText
                primary="Terms of Service"
                primaryTypographyProps={{
                  fontSize: '14px',
                  fontWeight: 500,
                }}
              />
            </ListItem>
            <ListItem button>
              <ListItemText
                primary="Privacy Policy"
                primaryTypographyProps={{
                  fontSize: '14px',
                  fontWeight: 500,
                }}
              />
            </ListItem>
            <ListItem button>
              <ListItemText
                primary="Legal"
                primaryTypographyProps={{
                  fontSize: '14px',
                  fontWeight: 500,
                }}
              />
            </ListItem>
          </List>
        </Collapse>
      </Box>

      {/* About Section */}
      <Box sx={{ textAlign: 'center', mb: 2 }}>
        <Box
          component="img"
          src={logo}
          alt="Lampros Logo"
          sx={{ width: 150, mb: 2 }}
        />
        <Box>
          <Typography
            sx={{
              fontSize: '14px',
              fontWeight: 400,
              mb: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <FaEnvelope style={{ marginRight: '8px' }} /> careers.lampros@gmail.com
          </Typography>
          <Typography
            sx={{
              fontSize: '14px',
              fontWeight: 400,
              mb: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <FaPhoneAlt style={{ marginRight: '8px' }} /> +91 7592990050
          </Typography>
          <Typography
            sx={{
              fontSize: '14px',
              fontWeight: 400,
              mb: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <FaMapMarkerAlt style={{ marginRight: '8px' }} /> Calicut, Koduvally
          </Typography>
        </Box>

        {/* Social Media Icons */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            gap: 2,
            mt: 2,
          }}
        >
          <IconButton
            onClick={() => window.open('https://www.instagram.com', '_blank')}
            aria-label="Instagram"
            sx={{ color: '#FFFFFF' }}
          >
            <FaInstagram />
          </IconButton>
          <IconButton
            onClick={() => window.open('https://www.facebook.com', '_blank')}
            aria-label="Facebook"
            sx={{ color: '#FFFFFF' }}
          >
            <FaFacebookF />
          </IconButton>
          <IconButton
            onClick={() => window.open('https://www.twitter.com', '_blank')}
            aria-label="Twitter"
            sx={{ color: '#FFFFFF' }}
          >
            <FaTwitter />
          </IconButton>
          <IconButton
            onClick={() => window.open('https://www.linkedin.com', '_blank')}
            aria-label="LinkedIn"
            sx={{ color: '#FFFFFF' }}
          >
            <FaLinkedinIn />
          </IconButton>
          <IconButton
            onClick={() => window.open('https://www.youtube.com', '_blank')}
            aria-label="YouTube"
            sx={{ color: '#FFFFFF' }}
          >
            <FaYoutube />
          </IconButton>
        </Box>
      </Box>

      {/* Footer Bottom */}
      <Box sx={{ textAlign: 'center', mt: 4 }}>
        <Typography
          sx={{
            fontSize: '12px',
            fontWeight: 400,
          }}
        >
          &copy; Lampros 2024. All Rights Reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default FooterMobile;

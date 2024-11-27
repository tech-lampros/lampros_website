import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Collapse,
  Button,
  Box,
  Divider,
  Tooltip,
} from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BedroomIcon from '@mui/icons-material/BedroomBaby';
import BusinessIcon from '@mui/icons-material/Business';
import BuildIcon from '@mui/icons-material/Build';
import logo from '../assets/logo.png'; // Ensure the path is correct
import { useNavigate } from 'react-router-dom';

const DARK_ORANGE = '#E65100';

function Mobnav() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState('');
  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleSubmenuToggle = (menu) => {
    setOpenSubmenu((prev) => (prev === menu ? '' : menu));
  };

  const handleNavClick = (path) => {
    navigate(path);
    setDrawerOpen(false);
  };

  const navItems = [
    {
      text: 'Designs',
      icon: <BedroomIcon />,
      submenu: [
        { text: 'Bedroom', path: '/designs' },
        { text: 'Kitchen', path: '/designs' },
        { text: 'View All', path: '/designs' },
      ],
    },
    {
      text: 'Professionals',
      icon: <BusinessIcon />,
      submenu: [
        { text: 'Interior Designers', path: '/professionals' },
        { text: 'Architects', path: '/professionals' },
        { text: 'Painters', path: '/professionals' },
        { text: 'View All', path: '/professionals' },
      ],
    },
    {
      text: 'Products',
      icon: <BuildIcon />,
      submenu: [
        { text: 'Bathroom & Toilet', path: '/products' },
        { text: 'Kitchen Fittings', path: '/products' },
        { text: 'Flooring', path: '/products' },
        { text: 'View All', path: '/products' },
      ],
    },
  ];

  return (
    <>
      {/* AppBar */}
      <AppBar
        position="static"
        sx={{
          backgroundColor: '#FFFFFF',
          boxShadow: 'none',
          color: '#000',
        }}
      >
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          {/* Menu Icon */}
          <Tooltip title="Menu">
            <IconButton onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          </Tooltip>

          {/* Logo */}
          <img
            src={logo}
            alt="Logo"
            style={{ width: '100px', cursor: 'pointer' }}
            onClick={() => handleNavClick('/')} // Navigate to Home
          />

          {/* Account and Notifications */}
          <Box>
            <Tooltip title="Notifications">
              <IconButton>
                <NotificationsIcon />
              </IconButton>
            </Tooltip>
            <Tooltip title="Account">
              <IconButton>
                <AccountCircleIcon />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerToggle}>
        <Box
          sx={{
            width: 300,
            height: '100%',
            backgroundColor: '#FFFFFF',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Drawer Header */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              p: 2,
            }}
          >
            <img
              src={logo}
              alt="Logo"
              style={{ width: '120px' }}
              onClick={() => handleNavClick('/')} // Navigate to Home
            />
            <IconButton onClick={handleDrawerToggle}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Divider />

          {/* Navigation Items */}
          <List>
            <ListItem disablePadding>
              <ListItemButton
                onClick={() => handleNavClick('/')} // Navigate to Home
                sx={{
                  '&:hover': {
                    backgroundColor: DARK_ORANGE,
                    color: '#FFFFFF',
                  },
                }}
              >
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>
            {navItems.map((item, index) => (
              <React.Fragment key={index}>
                <ListItem disablePadding>
                  <ListItemButton
                    onClick={() => handleSubmenuToggle(item.text)}
                    sx={{
                      '&:hover': {
                        backgroundColor: DARK_ORANGE,
                        color: '#FFFFFF',
                      },
                    }}
                  >
                    {item.icon}
                    <ListItemText
                      primary={item.text}
                      sx={{ marginLeft: 2 }}
                    />
                    {openSubmenu === item.text ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                </ListItem>
                <Collapse
                  in={openSubmenu === item.text}
                  timeout="auto"
                  unmountOnExit
                >
                  <List disablePadding>
                    {item.submenu.map((subitem, subIndex) => (
                      <ListItem key={subIndex} disablePadding>
                        <ListItemButton
                          onClick={() => handleNavClick(subitem.path)} // Navigate to subitem path
                          sx={{
                            pl: 4,
                            '&:hover': {
                              backgroundColor: alpha(DARK_ORANGE, 0.1),
                            },
                          }}
                        >
                          <ListItemText
                            primary={subitem.text}
                            primaryTypographyProps={{
                              color:
                                subitem.text === 'View All'
                                  ? DARK_ORANGE
                                  : 'inherit', // Set 'View All' color to orange
                              fontWeight:
                                subitem.text === 'View All' ? 'bold' : 'normal',
                            }}
                          />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Collapse>
              </React.Fragment>
            ))}
          </List>
          <Divider />

          {/* Join as a Pro Button */}
          <Box sx={{ p: 2 }}>
            <Button
              variant="contained"
              fullWidth
              onClick={() => handleNavClick('/pro')} // Navigate to Join as Pro page
              sx={{
                backgroundColor: DARK_ORANGE,
                color: '#FFFFFF',
                textTransform: 'none',
                '&:hover': { backgroundColor: '#D84315' },
              }}
            >
              Join as a Pro
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}

export default Mobnav;

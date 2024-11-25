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
  Button,
  Box,
  InputBase,
  Divider,
  Fade,
  Tooltip,
  Autocomplete,
} from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import CloseIcon from '@mui/icons-material/Close';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import logo from '../assets/logo.png'; // Ensure the path is correct

// Define your dark orange color
const DARK_ORANGE = '#E65100'; // You can adjust this shade as needed

// Styled Components for Search Functionality
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha('#000000', 0.05),
  '&:hover': {
    backgroundColor: alpha('#000000', 0.1),
  },
  marginLeft: 0,
  width: '100%',
  transition: theme.transitions.create(['width', 'background-color'], {
    duration: theme.transitions.duration.shorter,
  }),
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  transition: theme.transitions.create('width'),
  '& .MuiInputBase-input': {
    padding: theme.spacing(0.5, 1, 0.5, 0),
    // Vertical padding + font size from searchIcon
    width: '100%',
  },
}));

function Mobnav({
  onHomeClick,
  onJoinAsProClick,
  onDesignsClick,
  onProductsClick,
  onProfessionalsClick,
}) {
  const [searchVisible, setSearchVisible] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleSearch = () => {
    setSearchVisible((prev) => !prev);
  };

  const handleDrawerToggle = () => {
    setDrawerOpen((prev) => !prev);
  };

  const handleNavClick = (action) => {
    if (action) action();
    setDrawerOpen(false);
  };

  const navItems = [
    { text: 'Home', onClick: onHomeClick },
    { text: 'Designs', onClick: onDesignsClick },
    { text: 'Professionals', onClick: onProfessionalsClick },
    { text: 'Products', onClick: onProductsClick },
  ];

  // Sample search options (Replace with dynamic data as needed)
  const searchOptions = ['Designs', 'Products', 'Professionals', 'Home'];

  return (
    <>
      {/* Customized AppBar with White Background and Black Icons */}
      <AppBar
        position="static"
        color="transparent"
        elevation={0}
        sx={{
          backgroundColor: '#FFFFFF', // White background
          height: '56px', // Reduced height
          [theme => theme.breakpoints.up('sm')]: {
            height: '64px', // Slightly larger height for larger screens
          },
        }}
      >
        <Toolbar
          sx={{
            minHeight: '56px !important', // Override default minHeight
            paddingX: 1, // Horizontal padding
            display: 'flex',
            alignItems: 'center',
          }}
        >
          {/* Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <img
              src={logo}
              alt="Logo"
              style={{ width: '80px', cursor: 'pointer' }}
              onClick={onHomeClick}
            />
          </Box>

         

          {/* Notifications Icon */}
          <Tooltip title="Notifications">
            <IconButton
              size="large"
              aria-label="notifications"
              color="inherit"
              sx={{ marginLeft: 2 }}
            >
              <NotificationsIcon />
            </IconButton>
          </Tooltip>

          {/* User Profile Icon */}
          <Tooltip title="Account">
            <IconButton
              size="large"
              edge="end"
              aria-label="account"
              color="inherit"
              sx={{ marginLeft: 2 }}
            >
              <AccountCircleIcon />
            </IconButton>
          </Tooltip>

          {/* Menu Icon */}
          <Tooltip title="Menu">
            <IconButton
              size="large"
              edge="end"
              aria-label="menu"
              color="inherit"
              onClick={handleDrawerToggle}
              sx={{ marginLeft: 2 }}
            >
              <MenuIcon />
            </IconButton>
          </Tooltip>
        </Toolbar>

        {/* Search Bar with Fade Transition */}
        <Fade in={searchVisible}>
          <Box sx={{ p: 1, backgroundColor: alpha('#000000', 0.05) }}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <Autocomplete
                freeSolo
                options={searchOptions}
                renderInput={(params) => (
                  <StyledInputBase
                    {...params.inputProps}
                    placeholder="Search…"
                    inputProps={{
                      ...params.inputProps,
                      'aria-label': 'search',
                    }}
                  />
                )}
                sx={{ width: '100%' }}
              />
            </Search>
          </Box>
        </Fade>
      </AppBar>

      {/* Drawer Component */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        <Box
          sx={{
            width: 250,
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            backgroundColor: '#FFFFFF', // White background
            color: 'black', // Black text for contrast
          }}
          role="presentation"
          onKeyDown={handleDrawerToggle}
        >
          {/* Drawer Header */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              p: 2,
              justifyContent: 'space-between',
              backgroundColor: '#FFFFFF', // White background for consistency
            }}
          >
            <img
              src={logo}
              alt="Logo"
              style={{ width: '120px', cursor: 'pointer' }}
              onClick={() => handleNavClick(onHomeClick)}
            />
            <IconButton onClick={handleDrawerToggle} sx={{ color: 'black' }}>
              <CloseIcon />
            </IconButton>
          </Box>

          <Divider sx={{ backgroundColor: alpha('#000', 0.2) }} />

          {/* Navigation Links */}
          <List>
            {navItems.map((item, index) => (
              <ListItem key={index} disablePadding>
                <ListItemButton
                  onClick={() => handleNavClick(item.onClick)}
                  sx={{
                    '&:hover': {
                      backgroundColor: alpha('#E65100', 0.1), // Light orange on hover
                      transform: 'scale(1.02)',
                      transition: 'transform 0.2s ease-in-out',
                    },
                  }}
                >
                  <ListItemText
                    primary={item.text}
                    primaryTypographyProps={{ variant: 'h6', color: 'black' }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Divider sx={{ backgroundColor: alpha('#000', 0.2) }} />

          {/* Become a Partner Button in Drawer */}
          <Box sx={{ p: 2 }}>
            <Button
              variant="contained"
              startIcon={<PersonAddIcon />}
              fullWidth
              onClick={() => handleNavClick(onJoinAsProClick)}
              sx={{
                backgroundColor: DARK_ORANGE, // Dark orange color
                color: 'white',
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: '#D84315', // Slightly darker orange on hover
                },
              }}
            >
              Become a Partner
            </Button>
          </Box>
        </Box>
      </Drawer>
    </>
  );
}

export default Mobnav;

import React, { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Select,
  MenuItem,
  Button,
  Grid,
  InputAdornment,
  FormControl,
  InputLabel,
  Divider,
} from '@mui/material';
import { Pie } from 'react-chartjs-2';
import 'chart.js/auto'; // Import the required chart.js modules

const Calc = () => {
  const [area, setArea] = useState(1); // Default area
  const [constructionType, setConstructionType] = useState('basic'); // Default type
  const [cost, setCost] = useState({ totalCost: '', interiorCost: '', maxCost: '' });

  const handleCalculate = () => {
    let totalCostRange, interiorCostRange;

    switch (constructionType) {
      case 'basic':
        totalCostRange = [1.53, 1.8];
        interiorCostRange = [0.75, 0.9];
        break;
      case 'premium':
        totalCostRange = [1.77, 2.03];
        interiorCostRange = [0.9, 1.05];
        break;
      case 'luxury':
        totalCostRange = [2.04, 2.61];
        interiorCostRange = [1.05, 1.2];
        break;
      default:
        return;
    }

    const totalCost = totalCostRange.map((cost) => (cost * area).toFixed(2)).join(' - ');
    const interiorCost = interiorCostRange.map((cost) => (cost * area).toFixed(2)).join(' - ');
    const maxCost = (Math.max(...totalCostRange) * area).toFixed(2);

    setCost({ totalCost, interiorCost, maxCost });
  };

  const pieData = {
    labels: ['Basic', 'Premium', 'Luxury', 'Interior', 'Others'],
    datasets: [
      {
        data: [30, 25, 20, 15, 10],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
      },
    ],
  };

  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '1440px',
        margin: '0 auto',
        padding: '40px',
        bgcolor: '#FFFBFB',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* Title and Description */}
      <Typography
        variant="h4"
        sx={{
          fontFamily: 'Montserrat, sans-serif',
          fontSize: '24px',
          fontWeight: 600,
          mb: 2,
        }}
      >
        Calculate Construction Cost
      </Typography>
      <Typography
        sx={{
          fontFamily: 'Montserrat, sans-serif',
          fontSize: '16px',
          fontWeight: 400,
          mb: 4,
          color: '#666',
        }}
      >
        Get an estimate amount for your home construction
      </Typography>

      <Grid container spacing={4} sx={{ alignItems: 'center' }}>
        {/* Form Section */}
        <Grid item xs={12} md={6}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {/* State Selector */}
            <FormControl fullWidth>
              <InputLabel>Select State</InputLabel>
              <Select defaultValue="kerala" disabled>
                <MenuItem value="kerala">Kerala</MenuItem>
              </Select>
            </FormControl>

            {/* City Selector */}
            <FormControl fullWidth>
              <InputLabel>Select City</InputLabel>
              <Select>
                <MenuItem value="city1">City 1</MenuItem>
                <MenuItem value="city2">City 2</MenuItem>
              </Select>
            </FormControl>

            {/* Area Input */}
            <TextField
              label="Area"
              type="number"
              value={area}
              onChange={(e) => setArea(Number(e.target.value))}
              InputProps={{
                endAdornment: <InputAdornment position="end">Sq. feet</InputAdornment>,
              }}
            />

            {/* Construction Type Selector */}
            <FormControl fullWidth>
              <InputLabel>Type of Construction</InputLabel>
              <Select
                value={constructionType}
                onChange={(e) => setConstructionType(e.target.value)}
              >
                <MenuItem value="basic">Basic</MenuItem>
                <MenuItem value="premium">Premium</MenuItem>
                <MenuItem value="luxury">Luxury</MenuItem>
              </Select>
            </FormControl>

            {/* Buttons */}
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Button
                variant="outlined"
                sx={{
                  fontFamily: 'Montserrat, sans-serif',
                  color: '#FF7800',
                  borderColor: '#FF7800',
                  '&:hover': { borderColor: '#FF5722', color: '#FF5722' },
                }}
                onClick={() => {
                  setArea(1);
                  setConstructionType('basic');
                  setCost({ totalCost: '', interiorCost: '', maxCost: '' });
                }}
              >
                Reset
              </Button>
              <Button
                variant="contained"
                sx={{
                  fontFamily: 'Montserrat, sans-serif',
                  bgcolor: '#FF7800',
                  '&:hover': { bgcolor: '#FF5722' },
                }}
                onClick={handleCalculate}
              >
                Calculate Cost
              </Button>
            </Box>
          </Box>
        </Grid>

        {/* Illustration Section */}
        <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
          <img
            src="https://i.imgur.com/KXOCITh.png"
            alt="Construction Illustration"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </Grid>
      </Grid>

      {/* Cost Results */}
      {cost.totalCost && (
  <Box
    sx={{
      bgcolor: '#FFFBFB',
      borderRadius: '8px',
      width: '100%'
    }}
  >
    {/* Title Bar */}
    <Box
      sx={{
        bgcolor: '#222831',
        color: '#fff',
        textAlign: 'center',
        p: 1.5,
        borderRadius: '8px',
        fontFamily: 'Montserrat, sans-serif',
        fontWeight: 500,
        fontSize: '16px',
        lineHeight: '19.5px',
        mb: 4,
      }}
    >
      Estimated Cost
    </Box>

    <Grid container spacing={4}>
      {/* Results Section */}
      <Grid item xs={12} md={6}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Typography
            sx={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 500,
              fontSize: '20px',
              lineHeight: '24.38px',
              letterSpacing: '1px',
              textAlign: 'left',
            }}
          >
            Total Construction Cost (without interior):
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 600,
              fontSize: '32px',
              lineHeight: '39.01px',
              letterSpacing: '1px',
              textAlign: 'left',
            }}
          >
            ₹{cost.totalCost} Lakhs
          </Typography>
          <Divider sx={{ bgcolor: '#ddd', my: 2 }} />

          <Typography
            sx={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 500,
              fontSize: '20px',
              lineHeight: '24.38px',
              letterSpacing: '1px',
              textAlign: 'left',
            }}
          >
            Total Construction Cost (interior):
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 600,
              fontSize: '32px',
              lineHeight: '39.01px',
              letterSpacing: '1px',
              textAlign: 'left',
            }}
          >
            ₹{cost.interiorCost} Lakhs
          </Typography>
          <Divider sx={{ bgcolor: '#ddd', my: 2 }} />

          <Typography
            sx={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 500,
              fontSize: '20px',
              lineHeight: '24.38px',
              letterSpacing: '1px',
              textAlign: 'left',
            }}
          >
            Maximum Cost:
          </Typography>
          <Typography
            sx={{
              fontFamily: 'Montserrat, sans-serif',
              fontWeight: 600,
              fontSize: '32px',
              lineHeight: '39.01px',
              letterSpacing: '1px',
              textAlign: 'left',
            }}
          >
            ₹{cost.maxCost} Lakhs
          </Typography>
        </Box>
      </Grid>

      {/* Pie Chart Section */}
      <Grid item xs={12} md={6} sx={{ textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Box>
          <Pie
            data={{
              labels: ['Basic', 'Premium', 'Luxury', 'Interior', 'Others'],
              datasets: [
                {
                  data: [30, 25, 20, 15, 10],
                  backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
                  hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
                },
              ],
            }}
            options={{
              plugins: {
                legend: {
                  position: 'top',
                  align: 'center',
                  labels: {
                    font: {
                      family: 'Montserrat, sans-serif',
                      size: 14,
                    },
                  },
                },
              },
            }}
          />
        </Box>
      </Grid>
    </Grid>
  </Box>
)}

    </Box>
  );
};

export default Calc;

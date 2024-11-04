import React from 'react';
import './Teams.css';
import { Typography, Box, Paper } from '@mui/material';

const TermsAndConditions = () => {
    return (
        <Box className="terms-container">
            <Paper elevation={3} className="terms-content">
                <Typography variant="h4" className="terms-title">
                    Terms and Conditions
                </Typography>

                <Typography variant="subtitle2" className="terms-date">
                    Last Updated: October 01, 2024
                </Typography>

                <Box className="terms-section">
                    <Typography variant="h6" className="terms-heading">
                        1. Agreement to Legal Terms
                    </Typography>
                    <Typography variant="body1" className="terms-text">
                        Welcome to LAMPOS - VIRTUAL BUILDMART PRIVATE LIMITED ('Company', 'we', 'us', or 'our'). By using our services, you agree to these terms and conditions. Please read them carefully.
                    </Typography>
                </Box>

                {/* Sample Sections - Add other sections here */}
                <Box className="terms-section">
                    <Typography variant="h6" className="terms-heading">
                        2. Service Availability
                    </Typography>
                    <Typography variant="body1" className="terms-text">
                        All products are subject to availability, and we reserve the right to discontinue any products at any time for any reason.
                    </Typography>
                </Box>

                <Box className="terms-section">
                    <Typography variant="h6" className="terms-heading">
                        3. Return/Refund Policy
                    </Typography>
                    <Typography variant="body1" className="terms-text">
                        Please review our return policy on the Services prior to making any purchases.
                    </Typography>
                </Box>

                <Box className="terms-section">
                    <Typography variant="h6" className="terms-heading">
                        4. Indemnification
                    </Typography>
                    <Typography variant="body1" className="terms-text">
                        You agree to defend and hold us harmless from any third-party claims arising from your use of the services.
                    </Typography>
                </Box>

                {/* Additional sections can be added similarly */}
            </Paper>
        </Box>
    );
};

export default TermsAndConditions;

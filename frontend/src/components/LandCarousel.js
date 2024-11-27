import React, { useState } from "react";
import { Box, Button, Typography, Modal } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ConsultationForm from "./Consultation/ConsultationForm"; // Ensure correct path
import data from "../assets/carouselData.json"; // Your carousel data

const LandCarousel = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "auto",
        overflow: "hidden",
        bgcolor: "#ffffff",
        p: { xs: 2, sm: 4, md: 6 },
      }}
    >
      <Carousel
        showThumbs={false}
        infiniteLoop
        autoPlay
        interval={5000}
        showStatus={false}
        showArrows
      >
        {data.map((item, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: { xs: "row", md: "row" }, // Stack on mobile, row on desktop
              alignItems: "center",
              justifyContent: "space-between",
              height: "100%",
              gap: { xs: 2, md: 4 },
              px: { xs: 2, md: 4 },
            }}
          >
            {/* Content Section (Left) */}
            <Box
              sx={{
                flex: 1,
                textAlign: { xs: "center", md: "left" },
                px: { xs: 1, md: 4 },
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontFamily: "Muller, sans-serif",
                  fontSize: { xs: "17px", sm: "26px", md: "48px" },
                  fontWeight: 700,
                  lineHeight: { xs: "30px", sm: "44px", md: "57.6px" },
                  letterSpacing: "1.5px",
                  textUnderlinePosition: "from-font",
                  textDecorationSkipInk: "none",
                  mb: 2,
                }}
              >
                {item.title}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  fontFamily: "Montserrat, sans-serif",
                  fontSize: { xs: "16px", md: "20px" },
                  fontWeight: 500,
                  lineHeight: { xs: "0px", md: "24px" },
                  letterSpacing: "0.5px",
                  textAlign: { xs: "center", md: "left" },
                  textUnderlinePosition: "from-font",
                  textDecorationSkipInk: "none",
                  display: { xs: "none", md: "block" }, // Hide sub-text on mobile
                  mb: 2,
                }}
              >
                {item.subText}
              </Typography>

              <Button
                onClick={handleOpen}
                variant="contained"
                sx={{
                  bgcolor: "#FF7800",
                fontSize: { xs: "8px", md: "20px" },
                  "&:hover": { bgcolor: "#FF5722" },
                  width: { xs: "auto", md: "auto" },
                }}
              >
                Explore Now
              </Button>
            </Box>

            {/* Image Section (Right) */}
            <Box
              component="img"
              src={item.imageUrl}
              alt={`Slide ${index}`}
              sx={{
                flex: 1,
                maxWidth: { xs: "40vw", md: "100%" },
                height: { xs: "auto", md: "70vh" },
                objectFit: "contain",
                alignSelf: "center",
              }}
            />
          </Box>
        ))}
      </Carousel>

      {/* Consultation Modal */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
            width: { xs: "90%", md: "50%" },
          }}
        >
          <ConsultationForm closeForm={handleClose} />
        </Box>
      </Modal>
    </Box>
  );
};

export default LandCarousel;

import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";

// Dummy Data with 20 Categories
const data = Array.from({ length: 20 }, (_, index) => ({
  category: `Category ${index + 1}`,
  image: `https://via.placeholder.com/200?text=Category+${index + 1}`,
  subcategories: [
    {
      name: `Subcategory 1`,
      image: `https://via.placeholder.com/150?text=Subcategory+1`,
      products: [
        {
          title: "Product 1",
          src: "https://via.placeholder.com/150",
          alt: "Product 1",
          price: `₹${(index + 1) * 1000}`,
          location: "Kozhikode, Kerala",
          quantity: 10,
        },
        {
          title: "Product 2",
          src: "https://via.placeholder.com/150",
          alt: "Product 2",
          price: `₹${(index + 1) * 2000}`,
          location: "Thrissur, Kerala",
          quantity: 0,
        },
      ],
    },
    {
      name: `Subcategory 2`,
      image: `https://via.placeholder.com/150?text=Subcategory+2`,
      products: [
        {
          title: "Product 3",
          src: "https://via.placeholder.com/150",
          alt: "Product 3",
          price: `₹${(index + 1) * 3000}`,
          location: "Ernakulam, Kerala",
          quantity: 5,
        },
        {
          title: "Product 4",
          src: "https://via.placeholder.com/150",
          alt: "Product 4",
          price: `₹${(index + 1) * 4000}`,
          location: "Trivandrum, Kerala",
          quantity: 8,
        },
      ],
    },
  ],
}));

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");
  const [products, setProducts] = useState([]);

  // Handle Category Change
  const handleCategoryChange = (categoryName) => {
    setSelectedCategory(categoryName);
    setSelectedSubcategory(""); // Reset subcategory
    setProducts([]); // Clear products
  };

  // Handle Subcategory Change
  const handleSubcategoryChange = (subcategoryName) => {
    const category = data.find((cat) => cat.category === selectedCategory);
    const subcategory = category.subcategories.find((sub) => sub.name === subcategoryName);
    setSelectedSubcategory(subcategoryName);
    setProducts(subcategory.products);
  };

  return (
    <Box sx={{ px: "8%", py: 6 }}>
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
          Home › Products › Categories
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
          Products & Categories 
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
        <Grid item xs={6} sm={6} md={4}>
          <FormControl fullWidth>
            <Select
              value={selectedCategory}
              displayEmpty
              onChange={(e) => handleCategoryChange(e.target.value)}
              sx={{ fontFamily: "Outfit, sans-serif", fontSize: "14px" }}
            >
              <MenuItem value="" disabled>
                Select a Category
              </MenuItem>
              {data.map((category, index) => (
                <MenuItem key={index} value={category.category}>
                  {category.category}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        {selectedCategory && (
          <Grid item xs={6} sm={6} md={4}>
            <FormControl fullWidth>
              <Select
                value={selectedSubcategory}
                displayEmpty
                onChange={(e) => handleSubcategoryChange(e.target.value)}
                sx={{ fontFamily: "Outfit, sans-serif", fontSize: "14px" }}
              >
                <MenuItem value="" disabled>
                  Select a Subcategory
                </MenuItem>
                {data
                  .find((cat) => cat.category === selectedCategory)
                  .subcategories.map((subcategory, index) => (
                    <MenuItem key={index} value={subcategory.name}>
                      {subcategory.name}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          </Grid>
        )}
        <Grid item xs={6} sm={6} md={4}>
          <FormControl fullWidth>
            <Select
              displayEmpty
              sx={{ fontFamily: "Outfit, sans-serif", fontSize: "14px" }}
            >
              <MenuItem value="">Sort By</MenuItem>
              <MenuItem value="popularity">Popularity</MenuItem>
              <MenuItem value="price_low_high">Price: Low to High</MenuItem>
              <MenuItem value="price_high_low">Price: High to Low</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      {/* Categories View */}
      {!selectedCategory && (
        <Grid container spacing={4}>
          {data.map((category, index) => (
            <Grid item xs={6} sm={6} md={3} key={index}>
              <Card
                sx={{
                  cursor: "pointer",
                  borderRadius: 2,
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                }}
                onClick={() => handleCategoryChange(category.category)}
              >
                <CardMedia
                  component="img"
                  image={category.image}
                  alt={category.category}
                  sx={{ height: 160, objectFit: "cover" }}
                />
                <CardContent>
                  <Typography
                    sx={{
                      fontFamily: "Outfit, sans-serif",
                      fontSize: "14px",
                      fontWeight: 600,
                      textAlign: "center",
                    }}
                  >
                    {category.category}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}

      {/* Subcategories View */}
      {selectedCategory && !selectedSubcategory && (
        <Grid container spacing={4}>
          {data
            .find((cat) => cat.category === selectedCategory)
            .subcategories.map((subcategory, index) => (
              <Grid item xs={6} sm={6} md={3} key={index}>
                <Card
                  sx={{
                    cursor: "pointer",
                    borderRadius: 2,
                    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                  }}
                  onClick={() => handleSubcategoryChange(subcategory.name)}
                >
                  <CardMedia
                    component="img"
                    image={subcategory.image}
                    alt={subcategory.name}
                    sx={{ height: 160, objectFit: "cover" }}
                  />
                  <CardContent>
                    <Typography
                      sx={{
                        fontFamily: "Outfit, sans-serif",
                        fontSize: "14px",
                        fontWeight: 600,
                        textAlign: "center",
                      }}
                    >
                      {subcategory.name}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
        </Grid>
      )}

      {/* Products View */}
      {products.length > 0 && (
        <Grid container spacing={4}>
          {products.map((product, index) => (
            <Grid item xs={6} sm={6} md={3} key={index}>
              <Card
                sx={{
                  borderRadius: 2,
                  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                }}
              >
                <CardMedia
                  component="img"
                  image={product.src}
                  alt={product.alt}
                  sx={{ height: 160, objectFit: "cover" }}
                />
                <CardContent>
                  <Typography
                    sx={{
                      fontFamily: "Outfit, sans-serif",
                      fontSize: "12px",
                      fontWeight: 500,
                      textAlign: "start",
                      mb: 1,
                    }}
                  >
                    {product.title}
                  </Typography>
                  <Typography
                    sx={{
                      fontFamily: "Outfit, sans-serif",
                      fontSize: "11px",
                      fontWeight: 400,
                      textAlign: "start",
                      mb: 1,
                    }}
                  >
                    {product.location}
                  </Typography>
                  <Typography
                    sx={{
                      color: "#0D1717",
                      fontFamily: "Outfit, sans-serif",
                      fontSize: "14px",
                      fontWeight: 600,
                    }}
                  >
                    {product.price}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default ProductsPage;

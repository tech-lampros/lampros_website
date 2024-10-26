// AddProductForm.js

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useForm, Controller, useWatch } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Select, { components } from 'react-select';
import { FaSearch } from 'react-icons/fa';
import { format } from 'date-fns';
import logo from '../../assets/logo.png';

// Custom Option Component with Image
const Option = (props) => (
  <components.Option {...props}>
    {props?.data?.image?.url && (
      <img
        src={props.data.image.url}
        alt={props.data.image.altText || ''}
        style={{ width: '30px', marginRight: '10px', borderRadius: '4px' }}
      />
    )}
    {props.label}
  </components.Option>
);

// Custom SingleValue Component with Image
const SingleValue = (props) => (
  <components.SingleValue {...props}>
    {props?.data?.image?.url && (
      <img
        src={props.data.image.url}
        alt={props.data.image.altText || ''}
        style={{ width: '30px', marginRight: '10px', borderRadius: '4px' }}
      />
    )}
    {props.data.label}
  </components.SingleValue>
);

const AddProductForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    control,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  // State for Categories
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [types, setTypes] = useState([]);
  const [subTypes, setSubTypes] = useState([]);

  // Selected Values
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [selectedSubType, setSelectedSubType] = useState(null);

  // Fetch Categories on Mount
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://lampros-backend.vercel.app/api/category/category');
        const formattedCategories = response.data.map((cat) => ({
          value: cat._id,
          label: cat.name.trim(),
          image: cat.image,
          subCategories: cat.subCategories || [],
        }));
        setCategories(formattedCategories);
      } catch (error) {
        console.error('Error fetching categories:', error);
        // Optionally, set an error state to display to the user
      }
    };

    fetchCategories();
  }, []);

  // Handle Category Change
  const handleCategoryChange = (selectedOption) => {
    setSelectedCategory(selectedOption);
    setSelectedSubCategory(null);
    setSelectedType(null);
    setSelectedSubType(null);
    setTypes([]);
    setSubTypes([]);

    if (selectedOption && selectedOption.subCategories) {
      const formattedSubCategories = selectedOption.subCategories.map((subCat) => ({
        value: subCat._id,
        label: subCat.name.trim(),
        image: subCat.image,
        types: subCat.types || [],
      }));
      setSubCategories(formattedSubCategories);
    } else {
      setSubCategories([]);
    }
  };

  // Handle SubCategory Change
  const handleSubCategoryChange = (selectedOption) => {
    setSelectedSubCategory(selectedOption);
    setSelectedType(null);
    setSelectedSubType(null);
    setSubTypes([]);

    if (selectedOption && selectedOption.types) {
      const formattedTypes = selectedOption.types.map((type) => ({
        value: type._id,
        label: type.name.trim(),
        image: type.image,
        subTypes: type.subTypes || [],
      }));
      setTypes(formattedTypes);
    } else {
      setTypes([]);
    }
  };

  // Handle Type Change
  const handleTypeChange = (selectedOption) => {
    setSelectedType(selectedOption);
    setSelectedSubType(null);

    if (selectedOption && selectedOption.subTypes) {
      const formattedSubTypes = selectedOption.subTypes.map((subType) => ({
        value: subType._id,
        label: subType.name.trim(),
        image: subType.image,
      }));
      setSubTypes(formattedSubTypes);
    } else {
      setSubTypes([]);
    }
  };

  // Handle SubType Change
  const handleSubTypeChange = (selectedOption) => {
    setSelectedSubType(selectedOption);
  };

  // Handle Image Upload
  const handleImageUpload = async (e) => {
    const files = Array.from(e.target.files);

    if (files.length === 0) return;

    const formData = new FormData();
    files.forEach((file) => formData.append('image', file));

    try {
      setIsUploading(true);
      const response = await axios.post(
        'https://lampros-backend.vercel.app/api/user/upload-images',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      const imageUrls = response.data.files.map((file) => ({
        url: file.url,
      }));

      setUploadedImages((prev) => [...prev, ...imageUrls]);
      setValue('images', files); // Save files in the form state
    } catch (error) {
      console.error('Image upload failed:', error);
      // Optionally, set an error state to display to the user
    } finally {
      setIsUploading(false);
    }
  };

  // Handle Form Submission
  const onSubmit = async (data) => {
    setIsSubmitting(true);

    try {
      const productData = {
        seller: {
          name: data.sellerName,
          phoneNumber: data.phoneNumber,
        },
        name: data.productName,
        category: selectedCategory ? selectedCategory.value : '',
        subCategory: selectedSubCategory ? selectedSubCategory.value : '',
        subType: selectedSubType ? selectedSubType.value : '',
        type: selectedType ? selectedType.value : '',
        price: parseFloat(data.price),
        quantity: parseInt(data.stockQuantity, 10),
        about: data.about,
        technicalDetails: {
          brand: data.brandName,
          color: data.color,
          material: data.material,
          productDimensions: {
            width: parseFloat(data.width),
            height: parseFloat(data.height),
            depth: parseFloat(data.depth),
          },
          weight: parseFloat(data.weight),
          baseWidth: parseFloat(data.baseWidth),
          style: data.style,
          installationType: data.installationType,
          finishType: data.finishType,
          drainType: data.drainType,
          seatMaterial: data.seatMaterial,
          shape: data.shape,
          specialFeatures: data.specialFeatures,
          productModelNumber: data.productModelNumber,
          asinNumber: data.asinNumber,
          productCareInstructions: data.productCareInstructions,
        },
        manufactureDetails: {
          manufacturer: data.manufacturer,
          manufacturerDate: data.manufacturerDate || '',
          countryOfOrigin: data.countryOfOrigin || '',
          deliveryCharge: data.deliveryCharge ? parseFloat(data.deliveryCharge) : 0,
        },
        warrantyAndCertifications: {
          warranty: data.warranty === 'true',
          warrantyDuration: {
            months: data.warranty === 'true' ? parseInt(data.warrantyMonths, 10) : 0,
            years: data.warranty === 'true' ? parseInt(data.warrantyYears, 10) : 0,
          },
          isoCertified: data.isoCertified === 'true',
        },
        images: uploadedImages,
      };

      await axios.post(
        'https://lampros-backend.vercel.app/api/products/products',
        productData
      );

      // Reset Form and States
      reset();
      setUploadedImages([]);
      setSelectedCategory(null);
      setSelectedSubCategory(null);
      setSelectedType(null);
      setSelectedSubType(null);

      // Navigate to Products Page
      navigate('/products');
    } catch (error) {
      console.error('Error adding product:', error);
      // Optionally, set an error state to display to the user
    } finally {
      setIsSubmitting(false);
    }
  };

  // Get Current Date
  const currentDate = format(new Date(), 'MMMM dd, yyyy');

  // Watch warranty to conditionally display warranty duration fields
  const watchWarranty = useWatch({
    control,
    name: 'warranty',
    defaultValue: null,
  });

  return (
    <MainContainer>
      {/* Header */}
      <Header>
        <HeaderLeft>
          <Logo src={logo} alt="Logo" />
          <SearchBox>
            <FaSearch />
            <SearchInput type="text" placeholder="Search..." aria-label="Search" />
          </SearchBox>
          <DateDisplay>{currentDate}</DateDisplay>
        </HeaderLeft>
        <HeaderRight>
          <ProfileContainer>
            <ProfileImage src="/path-to-profile.png" alt="Profile" />
            <UserName>Alex</UserName>
          </ProfileContainer>
        </HeaderRight>
      </Header>

      {/* Body */}
      <BodyContainer>
        {/* Left Section (40%) */}
        <LeftSection>
          {/* Section 1: Product Images */}
          <Box>
            <SectionSubtitle>Product Images</SectionSubtitle>
            <ImageUploadContainer>
              <Input
                type="file"
                id="images"
                multiple
                accept="image/*"
                onChange={handleImageUpload}
                aria-label="Upload Images"
                placeholder="Upload Images"
              />
              {isUploading && <Loader>Uploading...</Loader>}
            </ImageUploadContainer>

            <ImagePreviewContainer>
              {uploadedImages.map((img, index) => (
                <ImagePreview key={index} src={img.url} alt={`Uploaded ${index + 1}`} />
              ))}
            </ImagePreviewContainer>
          </Box>

          {/* Section 2: Manufacturer Details */}
          <Box>
            <SectionSubtitle>Manufacturer Details</SectionSubtitle>
            <Row>
              <Column>
                <Input
                  type="text"
                  id="manufacturer"
                  placeholder="Manufacturer *"
                  {...register('manufacturer', { required: 'Manufacturer is required' })}
                  aria-label="Manufacturer"
                />
                {errors.manufacturer && <ErrorMessage>{errors.manufacturer.message}</ErrorMessage>}
              </Column>
              <Column>
                <Input
                  type="date"
                  id="manufacturerDate"
                  placeholder="Manufacturer Date"
                  {...register('manufacturerDate')}
                  aria-label="Manufacturer Date"
                />
              </Column>
            </Row>
            <Row>
              <Column>
                <Input
                  type="text"
                  id="countryOfOrigin"
                  placeholder="Country of Origin"
                  {...register('countryOfOrigin')}
                  aria-label="Country of Origin"
                />
              </Column>
              <Column>
                <Input
                  type="number"
                  step="0.01"
                  id="deliveryCharge"
                  placeholder="Delivery Charge ($)"
                  {...register('deliveryCharge', {
                    min: { value: 0, message: 'Delivery Charge must be positive' },
                  })}
                  aria-label="Delivery Charge"
                />
                {errors.deliveryCharge && <ErrorMessage>{errors.deliveryCharge.message}</ErrorMessage>}
              </Column>
            </Row>
          </Box>

          {/* Section 3: Warranty and ISO Certification */}
          <Box>
            <SectionSubtitle>Warranty and Certifications</SectionSubtitle>
            <Row>
              <Column>
                <Controller
                  name="warranty"
                  control={control}
                  defaultValue={null}
                  rules={{ required: 'Warranty selection is required' }}
                  render={({ field }) => (
                    <Select
                      {...field}
                      options={[
                        { value: 'true', label: 'Yes' },
                        { value: 'false', label: 'No' },
                      ]}
                      placeholder="Warranty *"
                      isClearable
                      components={{ Option, SingleValue }}
                      aria-label="Warranty"
                    />
                  )}
                />
                {errors.warranty && <ErrorMessage>{errors.warranty.message}</ErrorMessage>}
              </Column>
              {watchWarranty === 'true' && (
                <>
                  <Column>
                    <Input
                      type="number"
                      id="warrantyMonths"
                      placeholder="Warranty Duration (Months) *"
                      {...register('warrantyMonths', {
                        required: 'Warranty duration in months is required',
                        min: { value: 0, message: 'Duration must be positive' },
                      })}
                      aria-label="Warranty Duration Months"
                    />
                    {errors.warrantyMonths && (
                      <ErrorMessage>{errors.warrantyMonths.message}</ErrorMessage>
                    )}
                  </Column>
                  <Column>
                    <Input
                      type="number"
                      id="warrantyYears"
                      placeholder="Warranty Duration (Years) *"
                      {...register('warrantyYears', {
                        required: 'Warranty duration in years is required',
                        min: { value: 0, message: 'Duration must be positive' },
                      })}
                      aria-label="Warranty Duration Years"
                    />
                    {errors.warrantyYears && (
                      <ErrorMessage>{errors.warrantyYears.message}</ErrorMessage>
                    )}
                  </Column>
                </>
              )}
            </Row>
            <Row>
              <Column>
                <Controller
                  name="isoCertified"
                  control={control}
                  defaultValue={null}
                  rules={{ required: 'ISO Certification selection is required' }}
                  render={({ field }) => (
                    <Select
                      {...field}
                      options={[
                        { value: 'true', label: 'Yes' },
                        { value: 'false', label: 'No' },
                      ]}
                      placeholder="ISO Certified *"
                      isClearable
                      components={{ Option, SingleValue }}
                      aria-label="ISO Certified"
                    />
                  )}
                />
                {errors.isoCertified && <ErrorMessage>{errors.isoCertified.message}</ErrorMessage>}
              </Column>
            </Row>
          </Box>
        </LeftSection>

        {/* Right Section (60%) */}
        <RightSection>
          {/* Section 1: Product Details */}
          <Box>
            <SectionSubtitle>Product Details</SectionSubtitle>
            <Row>
              <Column>
                <Input
                  type="text"
                  id="productName"
                  placeholder="Product Name *"
                  {...register('productName', { required: 'Product Name is required' })}
                  aria-label="Product Name"
                />
                {errors.productName && <ErrorMessage>{errors.productName.message}</ErrorMessage>}
              </Column>
              <Column>
                <Input
                  type="number"
                  step="0.01"
                  id="price"
                  placeholder="Price ($) *"
                  {...register('price', {
                    required: 'Price is required',
                    min: { value: 0, message: 'Price must be positive' },
                  })}
                  aria-label="Price"
                />
                {errors.price && <ErrorMessage>{errors.price.message}</ErrorMessage>}
              </Column>
            </Row>

            <Row>
              <Column>
                <Input
                  type="number"
                  id="stockQuantity"
                  placeholder="Stock Quantity *"
                  {...register('stockQuantity', {
                    required: 'Stock Quantity is required',
                    min: { value: 0, message: 'Stock Quantity cannot be negative' },
                  })}
                  aria-label="Stock Quantity"
                />
                {errors.stockQuantity && <ErrorMessage>{errors.stockQuantity.message}</ErrorMessage>}
              </Column>
              <Column>
                <Input
                  type="text"
                  id="about"
                  placeholder="About *"
                  {...register('about', { required: 'About section is required' })}
                  aria-label="About"
                />
                {errors.about && <ErrorMessage>{errors.about.message}</ErrorMessage>}
              </Column>
            </Row>

            {/* Category Selection Dropdowns */}
            <Row>
              <Column>
                <Controller
                  name="category"
                  control={control}
                  defaultValue={null}
                  rules={{ required: 'Category selection is required' }}
                  render={({ field }) => (
                    <Select
                      {...field}
                      options={categories}
                      components={{ Option, SingleValue }}
                      placeholder="Category *"
                      isClearable
                      onChange={(option) => {
                        field.onChange(option);
                        handleCategoryChange(option);
                      }}
                      aria-label="Category"
                    />
                  )}
                />
                {errors.category && <ErrorMessage>{errors.category.message}</ErrorMessage>}
              </Column>
              <Column>
                <Controller
                  name="subCategory"
                  control={control}
                  defaultValue={null}
                  rules={{ required: 'Subcategory selection is required' }}
                  render={({ field }) => (
                    <Select
                      {...field}
                      options={subCategories}
                      components={{ Option, SingleValue }}
                      placeholder="Subcategory *"
                      isClearable
                      onChange={(option) => {
                        field.onChange(option);
                        handleSubCategoryChange(option);
                      }}
                      isDisabled={!selectedCategory}
                      aria-label="Subcategory"
                    />
                  )}
                />
                {errors.subCategory && <ErrorMessage>{errors.subCategory.message}</ErrorMessage>}
              </Column>
            </Row>

            <Row>
              <Column>
                <Controller
                  name="type"
                  control={control}
                  defaultValue={null}
                  rules={{ required: 'Type selection is required' }}
                  render={({ field }) => (
                    <Select
                      {...field}
                      options={types}
                      components={{ Option, SingleValue }}
                      placeholder="Type *"
                      isClearable
                      onChange={(option) => {
                        field.onChange(option);
                        handleTypeChange(option);
                      }}
                      isDisabled={!selectedSubCategory}
                      aria-label="Type"
                    />
                  )}
                />
                {errors.type && <ErrorMessage>{errors.type.message}</ErrorMessage>}
              </Column>
              <Column>
                <Controller
                  name="subType"
                  control={control}
                  defaultValue={null}
                  rules={{ required: 'Subtype selection is required' }}
                  render={({ field }) => (
                    <Select
                      {...field}
                      options={subTypes}
                      components={{ Option, SingleValue }}
                      placeholder="Subtype *"
                      isClearable
                      onChange={(option) => {
                        field.onChange(option);
                        handleSubTypeChange(option);
                      }}
                      isDisabled={!selectedType}
                      aria-label="Subtype"
                    />
                  )}
                />
                {errors.subType && <ErrorMessage>{errors.subType.message}</ErrorMessage>}
              </Column>
            </Row>
          </Box>

          {/* Section 2: Technical Details */}
          <Box>
            <SectionSubtitle>Technical Details</SectionSubtitle>
            <Row>
              <Column>
                <Input
                  type="text"
                  id="brandName"
                  placeholder="Brand Name *"
                  {...register('brandName', { required: 'Brand Name is required' })}
                  aria-label="Brand Name"
                />
                {errors.brandName && <ErrorMessage>{errors.brandName.message}</ErrorMessage>}
              </Column>
              <Column>
                <Input
                  type="text"
                  id="color"
                  placeholder="Color *"
                  {...register('color', { required: 'Color is required' })}
                  aria-label="Color"
                />
                {errors.color && <ErrorMessage>{errors.color.message}</ErrorMessage>}
              </Column>
            </Row>

            <Row>
              <Column>
                <Input
                  type="text"
                  id="material"
                  placeholder="Material *"
                  {...register('material', { required: 'Material is required' })}
                  aria-label="Material"
                />
                {errors.material && <ErrorMessage>{errors.material.message}</ErrorMessage>}
              </Column>
              <Column>
                <Input
                  type="number"
                  step="0.1"
                  id="weight"
                  placeholder="Weight (kg) *"
                  {...register('weight', {
                    required: 'Weight is required',
                    min: { value: 0, message: 'Weight must be positive' },
                  })}
                  aria-label="Weight"
                />
                {errors.weight && <ErrorMessage>{errors.weight.message}</ErrorMessage>}
              </Column>
            </Row>

            <Row>
              <Column>
                <Input
                  type="number"
                  step="0.1"
                  id="width"
                  placeholder="Width (cm) *"
                  {...register('width', {
                    required: 'Width is required',
                    min: { value: 0, message: 'Width must be positive' },
                  })}
                  aria-label="Width"
                />
                {errors.width && <ErrorMessage>{errors.width.message}</ErrorMessage>}
              </Column>
              <Column>
                <Input
                  type="number"
                  step="0.1"
                  id="height"
                  placeholder="Height (cm) *"
                  {...register('height', {
                    required: 'Height is required',
                    min: { value: 0, message: 'Height must be positive' },
                  })}
                  aria-label="Height"
                />
                {errors.height && <ErrorMessage>{errors.height.message}</ErrorMessage>}
              </Column>
              <Column>
                <Input
                  type="number"
                  step="0.1"
                  id="depth"
                  placeholder="Depth (cm) *"
                  {...register('depth', {
                    required: 'Depth is required',
                    min: { value: 0, message: 'Depth must be positive' },
                  })}
                  aria-label="Depth"
                />
                {errors.depth && <ErrorMessage>{errors.depth.message}</ErrorMessage>}
              </Column>
            </Row>

            <Row>
              <Column>
                <Input
                  type="number"
                  step="0.1"
                  id="baseWidth"
                  placeholder="Base Width (cm) *"
                  {...register('baseWidth', {
                    required: 'Base Width is required',
                    min: { value: 0, message: 'Base Width must be positive' },
                  })}
                  aria-label="Base Width"
                />
                {errors.baseWidth && <ErrorMessage>{errors.baseWidth.message}</ErrorMessage>}
              </Column>
              <Column>
                <Input
                  type="text"
                  id="style"
                  placeholder="Style *"
                  {...register('style', { required: 'Style is required' })}
                  aria-label="Style"
                />
                {errors.style && <ErrorMessage>{errors.style.message}</ErrorMessage>}
              </Column>
            </Row>

            <Row>
              <Column>
                <Input
                  type="text"
                  id="installationType"
                  placeholder="Installation Type *"
                  {...register('installationType', { required: 'Installation Type is required' })}
                  aria-label="Installation Type"
                />
                {errors.installationType && <ErrorMessage>{errors.installationType.message}</ErrorMessage>}
              </Column>
              <Column>
                <Input
                  type="text"
                  id="finishType"
                  placeholder="Finish Type *"
                  {...register('finishType', { required: 'Finish Type is required' })}
                  aria-label="Finish Type"
                />
                {errors.finishType && <ErrorMessage>{errors.finishType.message}</ErrorMessage>}
              </Column>
            </Row>

            <Row>
              <Column>
                <Input
                  type="text"
                  id="drainType"
                  placeholder="Drain Type *"
                  {...register('drainType', { required: 'Drain Type is required' })}
                  aria-label="Drain Type"
                />
                {errors.drainType && <ErrorMessage>{errors.drainType.message}</ErrorMessage>}
              </Column>
              <Column>
                <Input
                  type="text"
                  id="seatMaterial"
                  placeholder="Seat Material *"
                  {...register('seatMaterial', { required: 'Seat Material is required' })}
                  aria-label="Seat Material"
                />
                {errors.seatMaterial && <ErrorMessage>{errors.seatMaterial.message}</ErrorMessage>}
              </Column>
            </Row>

            <Row>
              <Column>
                <Input
                  type="text"
                  id="shape"
                  placeholder="Shape *"
                  {...register('shape', { required: 'Shape is required' })}
                  aria-label="Shape"
                />
                {errors.shape && <ErrorMessage>{errors.shape.message}</ErrorMessage>}
              </Column>
              <Column>
                <Input
                  type="text"
                  id="specialFeatures"
                  placeholder="Special Features *"
                  {...register('specialFeatures', { required: 'Special Features are required' })}
                  aria-label="Special Features"
                />
                {errors.specialFeatures && <ErrorMessage>{errors.specialFeatures.message}</ErrorMessage>}
              </Column>
            </Row>

            <Row>
              <Column>
                <Input
                  type="text"
                  id="productModelNumber"
                  placeholder="Product Model Number *"
                  {...register('productModelNumber', { required: 'Product Model Number is required' })}
                  aria-label="Product Model Number"
                />
                {errors.productModelNumber && (
                  <ErrorMessage>{errors.productModelNumber.message}</ErrorMessage>
                )}
              </Column>
              <Column>
                <Input
                  type="text"
                  id="asinNumber"
                  placeholder="ASIN Number *"
                  {...register('asinNumber', { required: 'ASIN Number is required' })}
                  aria-label="ASIN Number"
                />
                {errors.asinNumber && <ErrorMessage>{errors.asinNumber.message}</ErrorMessage>}
              </Column>
            </Row>

            <Row>
              <Column>
                <Input
                  type="text"
                  id="productCareInstructions"
                  placeholder="Product Care Instructions *"
                  {...register('productCareInstructions', { required: 'Care Instructions are required' })}
                  aria-label="Product Care Instructions"
                />
                {errors.productCareInstructions && (
                  <ErrorMessage>{errors.productCareInstructions.message}</ErrorMessage>
                )}
              </Column>
            </Row>
          </Box>
        </RightSection>
      </BodyContainer>

      {/* Footer Buttons */}
      <Footer>
        <ButtonContainer>
          <ClearButton
            type="button"
            onClick={() => {
              reset();
              setUploadedImages([]);
              setSelectedCategory(null);
              setSelectedSubCategory(null);
              setSelectedType(null);
              setSelectedSubType(null);
            }}
          >
            Clear All
          </ClearButton>
          <SubmitButton type="submit" disabled={isSubmitting} onClick={handleSubmit(onSubmit)}>
            {isSubmitting ? 'Adding Product...' : 'Add Product'}
          </SubmitButton>
        </ButtonContainer>
      </Footer>
    </MainContainer>
  );
};

// Styled Components

// Main Container with background color
const MainContainer = styled.div`
  background-color: #f5f7fa;
  min-height: 100vh;
  padding: 20px;
  box-sizing: border-box;
`;

// Header Styles
const Header = styled.header`
  background-color: #ffffff;
  padding: 20px 40px;
  margin: 20px;
  margin-left: 60px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

// Header Left Section
const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

// Logo Styles
const Logo = styled.img`
  height: 30px;
  border-radius: 8px;
`;

// Search Box Styles
const SearchBox = styled.div`
  display: flex;
  align-items: center;
  background-color: #f1f3f5;
  padding: 8px 12px;
  border-radius: 8px;
  width: 300px;

  svg {
    margin-right: 8px;
    color: #888;
  }
`;

// Search Input Styles
const SearchInput = styled.input`
  border: none;
  background: none;
  width: 100%;
  outline: none;
  font-size: 16px;
`;

// Date Display Styles
const DateDisplay = styled.div`
  font-size: 16px;
  color: #555;
`;

// Header Right Section
const HeaderRight = styled.div`
  display: flex;
  align-items: center;
`;

// Profile Container Styles
const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

// Profile Image Styles
const ProfileImage = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
`;

// User Name Styles
const UserName = styled.span`
  font-size: 16px;
  color: #333;
  font-weight: 500;
`;

// Body Styles
const BodyContainer = styled.div`
  display: flex;
  gap: 40px;
  padding: 20px 40px;
  box-sizing: border-box;
  margin: 20px;
`;

// Left Section (40%)
const LeftSection = styled.div`
  flex: 0 0 40%;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

// Right Section (60%)
const RightSection = styled.div`
  flex: 0 0 60%;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

// Box Styles for Sections
const Box = styled.div`
  background-color: #ffffff;
  padding: 20px 25px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

// Section Subtitle
const SectionSubtitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #333;
  margin-bottom: 15px;
  text-align: start;
`;

// Form Elements
const Row = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

const Column = styled.div`
  flex: 1;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

// Label Styles (Removed as labels are now placeholders)

// Input Styles
const Input = styled.input`
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  box-sizing: border-box;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #ff7a00;
  }
`;

// TextArea Styles
const TextArea = styled.input` /* Changed from textarea to input for consistency */
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  resize: vertical;
  min-height: 80px;
  font-size: 16px;

  &:focus {
    outline: none;
    border-color: #ff7a00;
  }
`;

// Error Message Styles
const ErrorMessage = styled.span`
  color: red;
  font-size: 13px;
  margin-top: 4px;
`;

// Image Upload Styles
const ImageUploadContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

// Loader Styles
const Loader = styled.div`
  font-size: 14px;
  color: #ff7a00;
`;

// Image Preview Styles
const ImagePreviewContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  margin-top: 10px;
`;

const ImagePreview = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 6px;
  border: 1px solid #ddd;
`;

// Footer Styles
const Footer = styled.footer`
  display: flex;
  justify-content: center;
  padding: 20px 40px;
  margin: 20px;
`;

// Button Container
const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
`;

// Clear Button Styles
const ClearButton = styled.button`
  padding: 12px 24px;
  background: none;
  border: 2px solid #ff7a00;
  color: #ff7a00;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  min-width: 150px;

  &:hover {
    background-color: #ff7a00;
    color: white;
  }
`;

// Submit Button Styles
const SubmitButton = styled.button`
  padding: 12px 24px;
  background-color: #ff7a00;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.3s ease;
  min-width: 150px;

  &:disabled {
    background-color: #ffa566;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background-color: #e67300;
  }
`;

export default AddProductForm;

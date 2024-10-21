// AddProductForm.js

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useForm, Controller } from 'react-hook-form';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Select, { components } from 'react-select';

// Custom Option Component with Image
const Option = (props) => (
  <components.Option {...props}>
    <img
      src={props?.data?.image?.url? props.data.image.url:''}
      alt={props?.data?.image?.altText ? props.data.image.altText : ''}
      style={{ width: '30px', marginRight: '10px', borderRadius: '4px' }}
    />
    {props.label}
  </components.Option>
);

// Custom SingleValue Component with Image
const SingleValue = (props) => (
  <components.SingleValue {...props}>
    <img
      src={props?.data?.image?.url? props.data.image.url:''}
      alt={props?.data?.image?.altText? props.data.image.altText : ''}
      style={{ width: '30px', marginRight: '10px', borderRadius: '4px' }}
    />
    {props.data.label}
  </components.SingleValue>
);

const AddProductForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [uploadedImages, setUploadedImages] = useState([]);
  const { register, handleSubmit, reset, setValue, control, formState: { errors } } = useForm();
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
          countryOfOrigin: data.countryOfOrigin,
          deliveryCharge: parseFloat(data.deliveryCharge),
          manufacturer: data.manufacturer,
        },
        warrantyAndCertifications: {
          warranty: data.warranty === 'true',
          warrantyDuration: {
            months: parseInt(data.warrantyMonths, 10),
            years: parseInt(data.warrantyYears, 10),
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

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <SectionTitle>Add New Product</SectionTitle>

      {/* Seller Information */}
      <Section>
        <SectionSubtitle>Seller Information</SectionSubtitle>
        <Row>
          <Column>
            <Label htmlFor="sellerName">Seller Name</Label>
            <Input
              id="sellerName"
              placeholder="Enter seller name"
              {...register('sellerName', { required: 'Seller Name is required' })}
            />
            {errors.sellerName && <ErrorMessage>{errors.sellerName.message}</ErrorMessage>}
          </Column>
          <Column>
            <Label htmlFor="phoneNumber">Phone Number</Label>
            <Input
              type="tel"
              id="phoneNumber"
              placeholder="Enter phone number"
              {...register('phoneNumber', {
                required: 'Phone Number is required',
                pattern: {
                  value: /^[0-9]{10,15}$/,
                  message: 'Invalid phone number',
                },
              })}
            />
            {errors.phoneNumber && <ErrorMessage>{errors.phoneNumber.message}</ErrorMessage>}
          </Column>
        </Row>
      </Section>

      {/* Product Images */}
      <Section>
        <SectionSubtitle>Product Images</SectionSubtitle>
        <Row>
          <Column>
            <Label htmlFor="images">Upload Images</Label>
            <Input
              type="file"
              id="images"
              multiple
              accept="image/*"
              onChange={handleImageUpload}
            />
          </Column>
        </Row>

        <ImagePreviewContainer>
          {uploadedImages.map((img, index) => (
            <ImagePreview key={index} src={img.url} alt={`Uploaded ${index + 1}`} />
          ))}
        </ImagePreviewContainer>
      </Section>

      {/* Category Selection */}
      <Section>
        <SectionSubtitle>Category Selection</SectionSubtitle>
        <Row>
          <Column>
            <Label htmlFor="category">Category</Label>
            <Controller
              name="category"
              control={control}
              render={() => (
                <Select
                  id="category"
                  options={categories}
                  components={{ Option, SingleValue }}
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                  placeholder="Select Category"
                  isClearable
                />
              )}
            />
          </Column>
          <Column>
            <Label htmlFor="subCategory">Subcategory</Label>
            <Controller
              name="subCategory"
              control={control}
              render={() => (
                <Select
                  id="subCategory"
                  options={subCategories}
                  components={{ Option, SingleValue }}
                  value={selectedSubCategory}
                  onChange={handleSubCategoryChange}
                  placeholder="Select Subcategory"
                  isClearable
                  isDisabled={!selectedCategory}
                />
              )}
            />
          </Column>
        </Row>

        <Row>
          <Column>
            <Label htmlFor="type">Type</Label>
            <Controller
              name="type"
              control={control}
              render={() => (
                <Select
                  id="type"
                  options={types}
                  components={{ Option, SingleValue }}
                  value={selectedType}
                  onChange={handleTypeChange}
                  placeholder="Select Type"
                  isClearable
                  isDisabled={!selectedSubCategory}
                />
              )}
            />
          </Column>
          <Column>
            <Label htmlFor="subType">Subtype</Label>
            <Controller
              name="subType"
              control={control}
              render={() => (
                <Select
                  id="subType"
                  options={subTypes}
                  components={{ Option, SingleValue }}
                  value={selectedSubType}
                  onChange={handleSubTypeChange}
                  placeholder="Select Subtype"
                  isClearable
                  isDisabled={!selectedType}
                />
              )}
            />
          </Column>
        </Row>
      </Section>

      {/* Product Details */}
      <Section>
        <SectionSubtitle>Product Details</SectionSubtitle>
        <Row>
          <Column>
            <Label htmlFor="productName">Product Name</Label>
            <Input
              id="productName"
              placeholder="Enter product name"
              {...register('productName', { required: 'Product Name is required' })}
            />
            {errors.productName && <ErrorMessage>{errors.productName.message}</ErrorMessage>}
          </Column>
          <Column>
            <Label htmlFor="price">Price ($)</Label>
            <Input
              type="number"
              step="0.01"
              id="price"
              placeholder="Enter price"
              {...register('price', {
                required: 'Price is required',
                min: { value: 0, message: 'Price must be positive' },
              })}
            />
            {errors.price && <ErrorMessage>{errors.price.message}</ErrorMessage>}
          </Column>
        </Row>

        <Row>
          <Column>
            <Label htmlFor="stockQuantity">Stock Quantity</Label>
            <Input
              type="number"
              id="stockQuantity"
              placeholder="Enter stock quantity"
              {...register('stockQuantity', {
                required: 'Stock Quantity is required',
                min: { value: 0, message: 'Stock Quantity cannot be negative' },
              })}
            />
            {errors.stockQuantity && <ErrorMessage>{errors.stockQuantity.message}</ErrorMessage>}
          </Column>
          <Column>
            <Label htmlFor="about">About</Label>
            <TextArea
              id="about"
              placeholder="Enter product description"
              {...register('about', { required: 'About section is required' })}
            />
            {errors.about && <ErrorMessage>{errors.about.message}</ErrorMessage>}
          </Column>
        </Row>
      </Section>

      {/* Technical Details */}
      <Section>
        <SectionSubtitle>Technical Details</SectionSubtitle>
        <Row>
          <Column>
            <Label htmlFor="brandName">Brand Name</Label>
            <Input
              id="brandName"
              placeholder="Enter brand name"
              {...register('brandName', { required: 'Brand Name is required' })}
            />
            {errors.brandName && <ErrorMessage>{errors.brandName.message}</ErrorMessage>}
          </Column>
          <Column>
            <Label htmlFor="color">Color</Label>
            <Input
              id="color"
              placeholder="Enter color"
              {...register('color', { required: 'Color is required' })}
            />
            {errors.color && <ErrorMessage>{errors.color.message}</ErrorMessage>}
          </Column>
        </Row>

        <Row>
          <Column>
            <Label htmlFor="material">Material</Label>
            <Input
              id="material"
              placeholder="Enter material"
              {...register('material', { required: 'Material is required' })}
            />
            {errors.material && <ErrorMessage>{errors.material.message}</ErrorMessage>}
          </Column>
          <Column>
            <Label htmlFor="weight">Weight (kg)</Label>
            <Input
              type="number"
              step="0.1"
              id="weight"
              placeholder="Enter weight"
              {...register('weight', {
                required: 'Weight is required',
                min: { value: 0, message: 'Weight must be positive' },
              })}
            />
            {errors.weight && <ErrorMessage>{errors.weight.message}</ErrorMessage>}
          </Column>
        </Row>

        <Row>
          <Column>
            <Label htmlFor="width">Width (cm)</Label>
            <Input
              type="number"
              step="0.1"
              id="width"
              placeholder="Enter width"
              {...register('width', {
                required: 'Width is required',
                min: { value: 0, message: 'Width must be positive' },
              })}
            />
            {errors.width && <ErrorMessage>{errors.width.message}</ErrorMessage>}
          </Column>
          <Column>
            <Label htmlFor="height">Height (cm)</Label>
            <Input
              type="number"
              step="0.1"
              id="height"
              placeholder="Enter height"
              {...register('height', {
                required: 'Height is required',
                min: { value: 0, message: 'Height must be positive' },
              })}
            />
            {errors.height && <ErrorMessage>{errors.height.message}</ErrorMessage>}
          </Column>
          <Column>
            <Label htmlFor="depth">Depth (cm)</Label>
            <Input
              type="number"
              step="0.1"
              id="depth"
              placeholder="Enter depth"
              {...register('depth', {
                required: 'Depth is required',
                min: { value: 0, message: 'Depth must be positive' },
              })}
            />
            {errors.depth && <ErrorMessage>{errors.depth.message}</ErrorMessage>}
          </Column>
        </Row>

        <Row>
          <Column>
            <Label htmlFor="baseWidth">Base Width (cm)</Label>
            <Input
              type="number"
              step="0.1"
              id="baseWidth"
              placeholder="Enter base width"
              {...register('baseWidth', {
                required: 'Base Width is required',
                min: { value: 0, message: 'Base Width must be positive' },
              })}
            />
            {errors.baseWidth && <ErrorMessage>{errors.baseWidth.message}</ErrorMessage>}
          </Column>
          <Column>
            <Label htmlFor="style">Style</Label>
            <Input
              id="style"
              placeholder="Enter style"
              {...register('style', { required: 'Style is required' })}
            />
            {errors.style && <ErrorMessage>{errors.style.message}</ErrorMessage>}
          </Column>
        </Row>

        <Row>
          <Column>
            <Label htmlFor="installationType">Installation Type</Label>
            <Input
              id="installationType"
              placeholder="Enter installation type"
              {...register('installationType', { required: 'Installation Type is required' })}
            />
            {errors.installationType && <ErrorMessage>{errors.installationType.message}</ErrorMessage>}
          </Column>
          <Column>
            <Label htmlFor="finishType">Finish Type</Label>
            <Input
              id="finishType"
              placeholder="Enter finish type"
              {...register('finishType', { required: 'Finish Type is required' })}
            />
            {errors.finishType && <ErrorMessage>{errors.finishType.message}</ErrorMessage>}
          </Column>
        </Row>

        <Row>
          <Column>
            <Label htmlFor="drainType">Drain Type</Label>
            <Input
              id="drainType"
              placeholder="Enter drain type"
              {...register('drainType', { required: 'Drain Type is required' })}
            />
            {errors.drainType && <ErrorMessage>{errors.drainType.message}</ErrorMessage>}
          </Column>
          <Column>
            <Label htmlFor="seatMaterial">Seat Material</Label>
            <Input
              id="seatMaterial"
              placeholder="Enter seat material"
              {...register('seatMaterial', { required: 'Seat Material is required' })}
            />
            {errors.seatMaterial && <ErrorMessage>{errors.seatMaterial.message}</ErrorMessage>}
          </Column>
        </Row>

        <Row>
          <Column>
            <Label htmlFor="shape">Shape</Label>
            <Input
              id="shape"
              placeholder="Enter shape"
              {...register('shape', { required: 'Shape is required' })}
            />
            {errors.shape && <ErrorMessage>{errors.shape.message}</ErrorMessage>}
          </Column>
          <Column>
            <Label htmlFor="specialFeatures">Special Features</Label>
            <TextArea
              id="specialFeatures"
              placeholder="Enter special features"
              {...register('specialFeatures', { required: 'Special Features are required' })}
            />
            {errors.specialFeatures && <ErrorMessage>{errors.specialFeatures.message}</ErrorMessage>}
          </Column>
        </Row>

        <Row>
          <Column>
            <Label htmlFor="productModelNumber">Product Model Number</Label>
            <Input
              id="productModelNumber"
              placeholder="Enter product model number"
              {...register('productModelNumber', { required: 'Product Model Number is required' })}
            />
            {errors.productModelNumber && <ErrorMessage>{errors.productModelNumber.message}</ErrorMessage>}
          </Column>
          <Column>
            <Label htmlFor="asinNumber">ASIN Number</Label>
            <Input
              id="asinNumber"
              placeholder="Enter ASIN number"
              {...register('asinNumber', { required: 'ASIN Number is required' })}
            />
            {errors.asinNumber && <ErrorMessage>{errors.asinNumber.message}</ErrorMessage>}
          </Column>
        </Row>

        <Row>
          <Column>
            <Label htmlFor="productCareInstructions">Product Care Instructions</Label>
            <TextArea
              id="productCareInstructions"
              placeholder="Enter care instructions"
              {...register('productCareInstructions', { required: 'Care Instructions are required' })}
            />
            {errors.productCareInstructions && <ErrorMessage>{errors.productCareInstructions.message}</ErrorMessage>}
          </Column>
        </Row>
      </Section>

      {/* Manufacture Details */}
      <Section>
        <SectionSubtitle>Manufacture Details</SectionSubtitle>
        <Row>
          <Column>
            <Label htmlFor="countryOfOrigin">Country of Origin</Label>
            <Input
              id="countryOfOrigin"
              placeholder="Enter country of origin"
              {...register('countryOfOrigin', { required: 'Country of Origin is required' })}
            />
            {errors.countryOfOrigin && <ErrorMessage>{errors.countryOfOrigin.message}</ErrorMessage>}
          </Column>
          <Column>
            <Label htmlFor="deliveryCharge">Delivery Charge ($)</Label>
            <Input
              type="number"
              step="0.01"
              id="deliveryCharge"
              placeholder="Enter delivery charge"
              {...register('deliveryCharge', {
                required: 'Delivery Charge is required',
                min: { value: 0, message: 'Delivery Charge must be positive' },
              })}
            />
            {errors.deliveryCharge && <ErrorMessage>{errors.deliveryCharge.message}</ErrorMessage>}
          </Column>
        </Row>
        <Row>
          <Column>
            <Label htmlFor="manufacturer">Manufacturer</Label>
            <Input
              id="manufacturer"
              placeholder="Enter manufacturer"
              {...register('manufacturer', { required: 'Manufacturer is required' })}
            />
            {errors.manufacturer && <ErrorMessage>{errors.manufacturer.message}</ErrorMessage>}
          </Column>
        </Row>
      </Section>

      {/* Warranty and Certifications */}
      <Section>
        <SectionSubtitle>Warranty and Certifications</SectionSubtitle>
        <Row>
          <Column>
            <Label htmlFor="warranty">Warranty</Label>
            <Controller
              name="warranty"
              control={control}
              defaultValue={null}
              rules={{ required: 'Warranty selection is required' }}
              render={({ field }) => (
                <Select
                  id="warranty"
                  options={[
                    { value: 'true', label: 'Yes' },
                    { value: 'false', label: 'No' },
                  ]}
                  value={field.value ? { value: field.value, label: field.value === 'true' ? 'Yes' : 'No' } : null}
                  onChange={(selected) => field.onChange(selected ? selected.value : null)}
                  placeholder="Select Warranty Option"
                  isClearable
                />
              )}
            />
            {errors.warranty && <ErrorMessage>{errors.warranty.message}</ErrorMessage>}
          </Column>
          <Column>
            <Label htmlFor="warrantyMonths">Warranty Duration (Months)</Label>
            <Input
              type="number"
              id="warrantyMonths"
              placeholder="Enter warranty duration in months"
              {...register('warrantyMonths', {
                required: 'Warranty duration in months is required',
                min: { value: 0, message: 'Duration must be positive' },
              })}
            />
            {errors.warrantyMonths && <ErrorMessage>{errors.warrantyMonths.message}</ErrorMessage>}
          </Column>
          <Column>
            <Label htmlFor="warrantyYears">Warranty Duration (Years)</Label>
            <Input
              type="number"
              id="warrantyYears"
              placeholder="Enter warranty duration in years"
              {...register('warrantyYears', {
                required: 'Warranty duration in years is required',
                min: { value: 0, message: 'Duration must be positive' },
              })}
            />
            {errors.warrantyYears && <ErrorMessage>{errors.warrantyYears.message}</ErrorMessage>}
          </Column>
        </Row>
        <Row>
          <Column>
            <Label htmlFor="isoCertified">ISO Certified</Label>
            <Controller
              name="isoCertified"
              control={control}
              defaultValue={null}
              rules={{ required: 'ISO Certification selection is required' }}
              render={({ field }) => (
                <Select
                  id="isoCertified"
                  options={[
                    { value: 'true', label: 'Yes' },
                    { value: 'false', label: 'No' },
                  ]}
                  value={field.value ? { value: field.value, label: field.value === 'true' ? 'Yes' : 'No' } : null}
                  onChange={(selected) => field.onChange(selected ? selected.value : null)}
                  placeholder="Select ISO Certification"
                  isClearable
                />
              )}
            />
            {errors.isoCertified && <ErrorMessage>{errors.isoCertified.message}</ErrorMessage>}
          </Column>
        </Row>
      </Section>

      {/* Buttons */}
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
        <SubmitButton type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Adding Product...' : 'Add Product'}
        </SubmitButton>
      </ButtonContainer>
    </FormContainer>
  );
};

// Styled Components

const FormContainer = styled.form`
  background-color: #fff;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const SectionTitle = styled.h2`
  font-size: 32px;
  font-weight: 700;
  color: #333;
  margin-bottom: 20px;
  text-align: center;
`;

const SectionSubtitle = styled.h3`
  font-size: 24px;
  font-weight: 600;
  color: #555;
`;

const Row = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
`;

const Column = styled.div`
  flex: 1;
  min-width: 250px;
`;

const ImagePreviewContainer = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
  margin-top: 10px;
`;

const ImagePreview = styled.img`
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 8px;
  border: 1px solid #ddd;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  resize: vertical;
  min-height: 100px;

  &:focus {
    outline: none;
    border-color: #ff7a00;
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: #555;
`;

const Input = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #ff7a00;
  }
`;

const ErrorMessage = styled.span`
  color: red;
  font-size: 14px;
  margin-top: 4px;
  display: block;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
`;

const ClearButton = styled.button`
  padding: 14px 24px;
  background: none;
  border: 2px solid #ff7a00;
  color: #ff7a00;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background-color: #ff7a00;
    color: white;
  }
`;

const SubmitButton = styled.button`
  padding: 14px 24px;
  background-color: #ff7a00;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.3s ease;

  &:disabled {
    background-color: #ffa566;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background-color: #e67300;
  }
`;

export default AddProductForm;

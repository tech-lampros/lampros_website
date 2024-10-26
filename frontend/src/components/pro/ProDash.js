import React from 'react';
import styled from 'styled-components';
import { FiHome, FiBox, FiClipboard, FiBarChart2, FiUser, FiSettings } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import logo from '../../assets/logo.png';

const Prodash = () => {
  const navigate = useNavigate(); // Initialize useNavigate for navigation
  
  return (
    <DashboardContainer>
      <Sidebar>
        <LogoContainer>
          <Logo src={logo} alt="Lampros Logo"  width={250}/>
          <BrandName>Seller</BrandName>
        </LogoContainer>
        <NavItem active>
          <FiHome /> Dashboard
        </NavItem>
        <NavItem>
          <FiClipboard /> Orders
        </NavItem>
        <NavItem>
          <FiBox /> Products
        </NavItem>
        <NavItem>
          <FiBarChart2 /> Analytics
        </NavItem>
        <NavItem>
          <FiUser /> Profile
        </NavItem>
        <NavItem>
          <FiSettings /> Setting
        </NavItem>
      </Sidebar>
      <MainContent>
        <TopBar>
          <SearchBar>
            <input type="text" placeholder="Search" />
          </SearchBar>
          <UserInfo>
            <UserDate>3 Feb, 2023</UserDate>
            <UserName>ASIN</UserName>
            <UserImage src="/path/to/profile-pic.jpg" alt="Profile" />
          </UserInfo>
        </TopBar>

        <DashboardSection>
          <SalesPerformance>
            <Title>Sales Performance</Title>
            <BarChart>
              <Bar data-height="50%">Jan</Bar>
              <Bar data-height="70%">Mar</Bar>
              <Bar data-height="60%">May</Bar>
              <Bar data-height="50%">Jul</Bar>
            </BarChart>
            <PerformanceSummary>
              30% Your sales performance is 30% better compared to last month.
            </PerformanceSummary>
          </SalesPerformance>

          <ProductActions>
            <ActionButton onClick={() => navigate('/add-product')}>Add Product</ActionButton>
            <ActionButton>All Products</ActionButton>
          </ProductActions>
        </DashboardSection>

        <ProductList>
          <ProductListHeader>
            <Title>Selling Products</Title>
            <DateSelector>8 Jan - 2 Feb</DateSelector>
          </ProductListHeader>

          <ProductTable>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Price</th>
                <th>Stock</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Modern life smart Toilet</td>
                <td>₹1505</td>
                <td>13 pcs</td>
                <td><StockStatus>In Stock</StockStatus></td>
              </tr>
              <tr>
                <td>Modern life smart toilet</td>
                <td>₹1425</td>
                <td>43 pcs</td>
                <td><StockStatus>In Stock</StockStatus></td>
              </tr>
              <tr>
                <td>Modern life smart toilet</td>
                <td>₹1325</td>
                <td>23 pcs</td>
                <td><StockStatus>In Stock</StockStatus></td>
              </tr>
            </tbody>
          </ProductTable>
        </ProductList>
      </MainContent>
    </DashboardContainer>
  );
};

const DashboardContainer = styled.div`
  display: flex;
  height: 100vh;
  background-color: #f4f6f9;
  font-family: 'Poppins', sans-serif;
`;

const Sidebar = styled.div`
  width: 250px;
  background-color: #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;

const Logo = styled.img`
  width: 40px;
  margin-right: 10px;
`;

const BrandName = styled.h2`
  font-size: 20px;
  color: #ff7a00;
`;

const NavItem = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
  padding: 10px;
  color: ${({ active }) => (active ? '#ff7a00' : '#555')};
  font-weight: ${({ active }) => (active ? 'bold' : 'normal')};
  cursor: pointer;
  &:hover {
    color: #ff7a00;
  }
  svg {
    margin-right: 10px;
  }
`;

const MainContent = styled.div`
  flex: 1;
  padding: 20px;
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const SearchBar = styled.div`
  input {
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ddd;
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

const UserDate = styled.span`
  margin-right: 10px;
  font-size: 14px;
`;

const UserName = styled.span`
  margin-right: 10px;
  font-weight: bold;
`;

const UserImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

const DashboardSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SalesPerformance = styled.div`
  width: 60%;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h3`
  margin-bottom: 20px;
  font-weight: bold;
`;

const BarChart = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Bar = styled.div`
  width: 20%;
  height: ${({ 'data-height': height }) => height};
  background-color: #007bff;
  color: #fff;
  text-align: center;
  line-height: 2;
`;

const PerformanceSummary = styled.p`
  font-size: 14px;
  color: #777;
`;

const ProductActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ActionButton = styled.button`
  padding: 15px;
  background-color: #ff7a00;
  color: #fff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background-color: #ff6500;
  }
`;

const ProductList = styled.div`
  margin-top: 30px;
  background-color: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

const ProductListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const DateSelector = styled.div`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ddd;
  cursor: pointer;
`;

const ProductTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  thead th {
    text-align: left;
    padding-bottom: 10px;
  }
  tbody td {
    padding: 10px 0;
  }
`;

const StockStatus = styled.span`
  color: green;
`;

export default Prodash;

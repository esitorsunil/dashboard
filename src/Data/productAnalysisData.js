// src/data/productAnalysisData.js

export const topProductsData = {
    labels: ['Laptop', 'Headphones', 'Shoes', 'Smartphone', 'Watch'],
    datasets: [{
      label: 'Units Sold',
      data: [450, 300, 280, 220, 180],
      backgroundColor: '#0d6efd',
    }],
  };
  
  export const stockCategoryData = {
    labels: ['Electronics', 'Fashion', 'Home', 'Fitness', 'Toys'],
    datasets: [{
      label: 'Stock',
      data: [120, 80, 100, 60, 40],
      backgroundColor: ['#6610f2', '#d63384', '#fd7e14', '#198754', '#0dcaf0'],
    }],
  };
  
  export const monthlyRevenueData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
    datasets: [{
      label: 'Revenue ($)',
      data: [12000, 15000, 14000, 18000, 20000],
      borderColor: '#20c997',
      backgroundColor: 'rgba(32, 201, 151, 0.2)',
      tension: 0.3,
      fill: true,
    }],
  };
  
  export const productSummary = {
    total: 1250,
    outOfStock: 23,
    monthlyRevenue: 20000,
  };
  
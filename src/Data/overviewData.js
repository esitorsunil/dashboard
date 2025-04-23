// src/data/overviewData.js

export const salesData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [{
      label: 'Weekly Sales',
      data: [1200, 1900, 3000, 2500, 3200, 2700, 4000],
      backgroundColor: '#0d6efd',
    }],
  };
  
  export const pageVisitsData = {
    labels: ['Home', 'About', 'Contact', 'Shop', 'Blog'],
    datasets: [{
      label: 'Page Visits',
      data: [900, 800, 700, 1200, 600],
      backgroundColor: ['#6610f2', '#6f42c1', '#d63384', '#fd7e14', '#20c997'],
    }],
  };
  
  export const countryVisitsData = {
    labels: ['USA', 'India', 'UK', 'Germany', 'Canada'],
    datasets: [{
      label: 'Visits (30 Days)',
      data: [5000, 4000, 2500, 2000, 1800],
      backgroundColor: '#198754',
    }],
  };
  
  export const topAuthorEarnings = {
    amount: 5700,
    month: 'April',
  };
  
  export const globalRank = {
    rank: '#3250',
    period: 'this month',
  };

 
  
  export const notifications = [
    '5 new orders',
    '2 support tickets',
    '1 server warning',
  ];
  
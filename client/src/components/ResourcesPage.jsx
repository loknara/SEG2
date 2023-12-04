/* Created by Lokesh Narasani */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ResourcesPage.css';

const ResourcesPage = () => {
  const navigate = useNavigate();

    const navigateToFinancialNews = () => {
        console.log('Financial News clicked');
        navigate('/ResourcesPage/FinancialNews');
    };

    const navigateToInsights = () => {
        console.log('Insights clicked');
        // Navigate to Insights component if you have one
        // history.push('/insights');
    };

    return (
      <div className="container">
      <div className="box" onClick={navigateToFinancialNews}>
          Financial News
      </div>
      {/* <div className="box" onClick={navigateToInsights}>
          Insights
      </div> */}
  </div>
    );
};

export default ResourcesPage;

import React from 'react';
import Dashboard from '../components/Dashboard';
import MainNavigation from '../components/MainNavigation';

const DashboardPage = props => {

  return (
    <React.Fragment>
      <MainNavigation />
        <Dashboard/>
    </React.Fragment>
    
  );
}

export default DashboardPage;
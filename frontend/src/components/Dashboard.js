import React from 'react';
import DashboardChart from './DashboardChart';


const Dashboard = () => {
  return (
    <React.Fragment>
      <div style={{marginLeft: "362px"}}>
    <div className="card text-center text-white" style={{height: "100px", width: "205px", float:"left", marginRight: "10px", marginTop: "10px"}}>
      <div className="card-body bg-primary">
        <h5 className="card-title">Games won</h5>
        <p className="card-text">0</p>
      </div>
    </div>
    <div className="card text-center text-white" style={{height: "100px", width: "205px", float:"left", marginRight: "10px", marginTop: "10px"}}>
      <div className="card-body bg-primary">
        <h5 className="card-title">Games Played</h5>
        <p className="card-text">0</p>
      </div>
    </div>
    <div className="card text-center text-white" style={{height: "100px", width: "205px", float:"left", marginRight: "9px", marginTop: "10px"}}>
      <div className="card-body bg-primary">
        <h5 className="card-title">Avg. Score</h5>
        <p className="card-text">0</p>
      </div>
    </div>
    </div>
    <DashboardChart/>
</React.Fragment>
  );
}

export default Dashboard;
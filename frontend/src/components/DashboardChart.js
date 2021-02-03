import React from 'react';
import {Bar} from 'react-chartjs-2';


const DashboardChart = () => {

  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  };

    return (
      <div className="text-center text-white" style={{height: "300px", width: "625px", marginTop: "130px", paddingTop: "10px", paddingBottom: "100px", paddingLeft: "10px", paddingRight: "10px", backgroundColor: "white", marginLeft: "auto", marginRight: "auto"}}>
        <h2 style={{color: "black"}}>Daily Ranks</h2>
        <Bar
          data={data}
          width={100}
          height={50}
          options={{ maintainAspectRatio: false,  legend: {display: false} }}
        />
      </div>
    );

};

export default DashboardChart;
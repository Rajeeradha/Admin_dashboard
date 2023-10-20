import React from "react";
import Approach from "./Approach";
import AreaChart from "./AreaChart";
import Colors from "./Colors";
import DashboardCards from "./DashboardCards";
import Illustrations from "./Illustrations";
import PieChart from "./PieChart";
import Projects from "./Projects";

function Dashboard() {
  return (
    <>
      <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
        <a
          href="#"
          className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"
        >
          <i className="fas fa-download fa-sm text-white-50"></i> Generate
          Report
        </a>
      </div>
      <div className="row">
        <DashboardCards />
      </div>
      <div className="row">
        <AreaChart />
        <PieChart />
      </div>
      <div className="row">
        <div className="col-lg-6 mb-4">
          <Projects />
          <Colors />
        </div>
        <div className="col-lg-6 mb-4">
          <Illustrations />
          <Approach />
        </div>
      </div>
    </>
  );
}

export default Dashboard;
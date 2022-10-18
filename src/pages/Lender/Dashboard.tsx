import React, { useState } from "react";
import WelcomeBanner from "../../components/Lender/dashboard/WelcomeBanner";
import DashboardCard01 from "../../components/Lender/dashboard/DashboardCard01";
import DashboardCard02 from "../../components/Lender/dashboard/DashboardCard02";
import DashboardCard03 from "../../components/Lender/dashboard/DashboardCard03";
import DashboardCard04 from "../../components/Lender/dashboard/DashboardCard04";
import DashboardCard05 from "../../components/Lender/dashboard/DashboardCard05";
import DashboardCard06 from "../../components/Lender/dashboard/DashboardCard06";

function Dashboard() {
  return (
    <>
      <div>
        {/* Welcome banner */}
        <WelcomeBanner />

        {/* Dashboard actions */}

        {/* Cards */}
        <div className="grid grid-cols-12 gap-6">
          {/* Line chart (Acme Plus) */}
          <DashboardCard01 />
          {/* Line chart (Acme Advanced) */}
          <DashboardCard02 />
          {/* Line chart (Acme Professional) */}
          <DashboardCard03 />
          {/* Bar chart (Direct vs Indirect) */}
          <DashboardCard04 />
          {/* Doughnut chart (Top Countries) */}
          <DashboardCard05 />
          {/* Table (Top Channels) */}
          <DashboardCard06 />
        </div>
      </div>
    </>
  );
}

export default Dashboard;

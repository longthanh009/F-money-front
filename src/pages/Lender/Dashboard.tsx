import React, { useState } from "react";
import WelcomeBanner from "../../components/Lender/partials/dashboard/WelcomeBanner";
import DashboardCard01 from "../../components/Lender/partials/dashboard/DashboardCard01";
import DashboardCard02 from "../../components/Lender/partials/dashboard/DashboardCard02";
import DashboardCard03 from "../../components/Lender/partials/dashboard/DashboardCard03";
import DashboardCard04 from "../../components/Lender/partials/dashboard/DashboardCard04";
import DashboardCard05 from "../../components/Lender/partials/dashboard/DashboardCard05";
import DashboardCard06 from "../../components/Lender/partials/dashboard/DashboardCard06";

function Dashboard() {
  return (
    <>
      <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
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

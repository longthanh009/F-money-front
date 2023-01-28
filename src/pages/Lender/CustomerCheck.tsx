import React, { useState } from "react";
import BreadcrumbComponent from "../../components/Breadcrumb";
import SearchCheck from "../../components/Lender/CustomerCheck/SearchCheck";

function CustomerCheck() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div>
      <div>
        <BreadcrumbComponent />

        <SearchCheck />
      </div>
    </div>
  );
}

export default CustomerCheck;

import React from "react";
import { Breadcrumb } from "antd";
import { useLocation } from "react-router-dom";
const BreadcrumbComponent = () => {
  const router = useLocation();
  const pat = router.pathname.split("/");

  return (
    <div className="mb-[10px]">
      <Breadcrumb>
        {pat &&
          pat.map((name, index) => (
            <Breadcrumb.Item key={index}>
              <span
                className="text-[11px]
            uppercase"
                style={{ color: "orange" }}
              >
                {name}
              </span>
            </Breadcrumb.Item>
          ))}
      </Breadcrumb>
    </div>
  );
};

export default BreadcrumbComponent;

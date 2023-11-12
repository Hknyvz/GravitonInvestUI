import { Space } from "antd";
import React from "react";
import "./styles.module.css";
import { ListActiveCompaniesDataItem } from "@/models/company/ListActiveCompaniesResponseDto";
import CompanySearch from "./CompanySearch";

interface INavBarMenuProps {
  data: ListActiveCompaniesDataItem[];
  localizations: {
    searchCompany: string;
    companies: string;
  };
}

function NavBarMenu({ data, localizations: companySearch }: INavBarMenuProps) {
  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <Space>
        <CompanySearch data={data} companySearch={companySearch} />
      </Space>
    </div>
  );
};

export default React.memo(NavBarMenu);

export interface ListActiveCompaniesResponseDto {
  data: ListActiveCompaniesDataItem[];
}

export interface ListActiveCompaniesDataItem {
  id: string;
  name: string;
  companyCode: string;
}

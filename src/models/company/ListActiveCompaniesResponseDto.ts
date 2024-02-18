export interface ListCompanyResponseDto {
  companies: ListCompanyResponseItem[];
}

export interface ListCompanyResponseItem {
  id: string;
  name: string;
  code: string;
  companyImage: string;
}

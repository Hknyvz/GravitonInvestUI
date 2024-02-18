import type { ListCompanyResponseDto } from '@/models/company/ListActiveCompaniesResponseDto';
import type { ApiResponse } from '@/models/shared/ApiResponse';

import { createApiService } from './axios/apiService';

const getCompanies = async () => {
  const apiService = createApiService;
  const result =
    await apiService.get<ApiResponse<ListCompanyResponseDto>>(
      'Company/GetCompany'
    );
  return result;
};

export { getCompanies };

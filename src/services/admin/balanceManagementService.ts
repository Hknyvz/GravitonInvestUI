import type { ApiResponse } from '@/models/shared/ApiResponse';

import { createApiService } from '../axios/apiService';

const getBalanceItems = async () => {
  const apiService = createApiService;
  const result =
    await apiService.get<ApiResponse<ListBalanceItems>>('Company/GetCompany');
  return result;
};

export { getCompanies };

import type GetFinancialResponseData from '@/models/balance/GetBalanceResponseDto';
import type { ApiResponse } from '@/models/shared/ApiResponse';

import { createApiService } from './axios/apiService';

const getBalance = async (code: string, lang: string) => {
  const apiService = createApiService;
  const result = await apiService.get<ApiResponse<GetFinancialResponseData>>(
    `FinancialData/GetBalance?companyCode=${code}`,
    {
      headers: {
        Language: lang,
      },
    }
  );
  return result;
};

const getProfitOrLoss = async (code: string, lang: string) => {
  const apiService = createApiService;
  const result = await apiService.get<ApiResponse<GetFinancialResponseData>>(
    `FinancialData/GetProfitOrLoss?companyCode=${code}`,
    {
      headers: {
        Language: lang,
      },
    }
  );
  return result;
};

export { getBalance, getProfitOrLoss };

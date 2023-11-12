export default interface GetBalanceResponseData {
  company?: Company;
  rows?: BalanceResponseDataItem[];
  periods?: string[];
}

export interface Company {
  id: string;
  name: string;
}

export interface BalanceResponseDataItem {
  title: string;
  values: Values;
  offset: number;
  order: number;
}

export interface Values {
  [key: string]: number;
}

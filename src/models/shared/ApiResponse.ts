export interface ApiResponse<T> {
  result: T;
  meta: ApiResponseMeta;
}

export interface ApiResponseMeta {
  responseDateTime: Date;
  elapsedTime: Date;
  statusCode: number;
  correlation: string;
  messages: MessageItem[];
}

export interface MessageItem {
  type: MessageItem;
  message: string;
  messageCode: string;
  provider: number;
}

export enum MessageType {
  Warning = 0,
  Error = 1,
  Info = 2,
}

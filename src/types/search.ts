export interface SearchResponse {
  text: string;
  created: number;
  done: boolean;
}

export interface SearchError {
  message: string;
  status: number;
}
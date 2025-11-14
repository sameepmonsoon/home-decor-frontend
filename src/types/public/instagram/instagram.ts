export interface IInstaResponse {
  data: IInstaData[];
}

export interface IInstaData {
  id: string;
  caption?: string;
  media_type: string;
  media_url: string;
  permalink: string;
  timestamp: string;
}

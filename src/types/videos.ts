export interface Video {
  id: number;
  title: string;
  description: string;
  tags: string[];
  img: string;
  publish_date: string;
  live_url?: string;
  source_code: string;
  category: string;
}
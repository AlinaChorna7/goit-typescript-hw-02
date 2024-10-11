
export interface Image {
    id: string;
    alt_description: string;
    urls: {
      small: string;
      full: string;
    };
  }
  
  export interface ApiResponse{
    total: number;
total_pages: number;
results: Image[];
  }
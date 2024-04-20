export interface Series {
    id: number;
    name: string;
    image: { medium: string };
    summary: string;
    premiered: string;
    genres: string[];
    isFavorite: boolean;
  }
  
  export interface Episode {
    id: number;
    name: string;
    image: { medium: string };
    summary: string;
    runtime: number;
    season: number;
  }
  
  export interface HomeSeries {
    id: number;
    name: string;
    image: { medium: string };
    summary: string;
  }

  export interface SeriesDetail {
    id: number;
    name: string;
    image: { medium: string };
    summary: string;
    premiered: string;
    genres: string[];
  }
  
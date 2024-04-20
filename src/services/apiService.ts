import { Series, Episode } from '../models/interfaces';

const BASE_URL = 'https://api.tvmaze.com';

export async function fetchSeries(): Promise<Series[]> {
  const response = await fetch(`${BASE_URL}/shows`);
  if (!response.ok) {
    throw new Error('Failed to fetch series');
  }
  return response.json();
}

export async function fetchSeriesDetail(id: number): Promise<Series> {
  const response = await fetch(`${BASE_URL}/shows/${id}`);
  if (!response.ok) {
    throw new Error('Failed to fetch series detail');
  }
  return response.json();
}

export async function fetchEpisodes(id: number): Promise<Episode[]> {
  const response = await fetch(`${BASE_URL}/shows/${id}/episodes`);
  if (!response.ok) {
    throw new Error('Failed to fetch episodes');
  }
  return response.json();
}

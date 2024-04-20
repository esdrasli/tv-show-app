import { fetchSeries, fetchSeriesDetail, fetchEpisodes } from '../src/services/apiService';

describe('API Service', () => {
  test('fetchSeries retorna dados reais das séries', async () => {
    const result = await fetchSeries();
    expect(result.length).toBeGreaterThan(0); 
  });

  test('fetchSeriesDetail retorna detalhes reais da série', async () => {
    const seriesId = 1; 
    const result = await fetchSeriesDetail(seriesId);
    expect(result).toBeDefined(); 
  });

  test('fetchEpisodes retorna episódios reais da série', async () => {
    const seriesId = 1; 
    const result = await fetchEpisodes(seriesId);
    expect(result.length).toBeGreaterThan(0); 
  });
});

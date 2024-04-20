import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Typography, Select, MenuItem, SelectChangeEvent, Container, Card, CardContent, CardMedia } from '@mui/material';
import { SeriesDetail, Episode } from '../models/interfaces';
import { fetchEpisodes, fetchSeriesDetail } from '../services/apiService';
import '../layout/SeriesDetail.css';

const SerieDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [series, setSeries] = useState<SeriesDetail | null>(null);
    const [selectedSeason, setSelectedSeason] = useState<number>(1);
    const [episodes, setEpisodes] = useState<Episode[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const seriesDetail = await fetchSeriesDetail(Number(id));
                setSeries(seriesDetail);
                const episodesData = await fetchEpisodes(seriesDetail.id);
                setEpisodes(episodesData);
            } catch (error) {
                console.error('Error fetching series details:', error);
            }
        };
        fetchData();
    }, [id]);

    const handleSeasonChange = (event: SelectChangeEvent<number>) => {
        const season = Number(event.target.value);
        setSelectedSeason(season);
    };

    const createMarkup = (htmlString: string) => ({ __html: htmlString });

    return (
        <>
            <div className="detail-container">
                <Container maxWidth="lg" className="series-details-container">
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography className="season-number" variant="h4" align="center">
                                Detalhes da Série
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            {series && (
                                <div>
                                    <img src={series.image.medium} alt={series.name} className="series-details-image" />
                                    <Typography variant="h5">{series.name}</Typography>
                                    <Typography variant="body1" dangerouslySetInnerHTML={createMarkup(series.summary)} />
                                    <Typography variant="body1">Ano de lançamento: {series.premiered}</Typography>
                                    <Typography variant="body1">Gêneros: {series.genres.join(', ')}</Typography>
                                </div>
                            )}
                        </Grid>
                        <Grid item xs={12} md={6} className="episode-container">
                            {series && (
                                <div>
                                    <Typography variant="h5">Episódios da Temporada</Typography>
                                    <Select
                                        value={selectedSeason}
                                        onChange={handleSeasonChange}
                                        className="select-style"
                                    >
                                        {Array.from(new Set(episodes.map(episode => episode.season))).map(season => (
                                            <MenuItem
                                                key={season}
                                                value={season}
                                                className="menu-item-style"
                                            >
                                                Temporada {season}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                    <Grid container spacing={2}>
                                        {episodes
                                            .filter(episode => episode.season === selectedSeason)
                                            .map(episode => (
                                                <Grid item xs={12} key={episode.id}>
                                                    <Card className="episode-card">
                                                        <CardMedia component="img" src={episode.image.medium} alt={episode.name} />
                                                        <CardContent>
                                                            <Typography variant="h6">{episode.name}</Typography>
                                                            <Typography variant="body2" dangerouslySetInnerHTML={createMarkup(episode.summary)} />
                                                            <Typography variant="body2">Duração: {episode.runtime} minutos</Typography>
                                                        </CardContent>
                                                    </Card>
                                                </Grid>
                                            ))}
                                    </Grid>
                                </div>
                            )}
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </>
    );
};

export default SerieDetails;

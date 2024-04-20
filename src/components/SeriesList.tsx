import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Card, CardMedia, Typography, Container } from '@mui/material';
import '../layout/seriesList.css';
import { Series } from '../models/interfaces';
import { fetchSeries } from '../services/apiService';

interface SeriesListProps {
    series: Series[];
}

const SeriesList: React.FC<SeriesListProps> = () => {
    const [series, setSeries] = useState<Series[]>([]);

    useEffect(() => {
        const fetchSeriesData = async () => {
            try {
                const seriesData = await fetchSeries();
                setSeries(seriesData);
            } catch (error) {
                console.error('Error fetching series:', error);
            }
        };

        fetchSeriesData();
    }, []);

    return (
        <Container maxWidth="lg">
            <Grid container spacing={3}>
                {series.map((serie: Series) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={serie.id} className="card-container">
                        <Card className="card">
                            <Link to={`/series/${serie.id}`} className="card-link">
                                <CardMedia component="img" className="card-image" image={serie.image.medium} alt={serie.name} />
                                <Typography variant="h6" className="card-title">
                                    {serie.name}
                                </Typography>
                            </Link>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default SeriesList;

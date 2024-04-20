import React from 'react';
import { Container, Grid } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SeriesList from '../components/SeriesList';
import { Series } from '../models/interfaces';
import '../layout/Home.css'; 

interface HomeProps {
  series: Series[];
}

const Home: React.FC<HomeProps> = ({ series }) => {
  
  return (
    <div className="home-container"> 
      <Header />
      <Container className="main-container" maxWidth="lg">
        <main>
          <Grid container spacing={3}>
            <SeriesList series={series} />
          </Grid>
        </main>
      </Container>
      <Footer />
    </div>
  );
};

export default Home;

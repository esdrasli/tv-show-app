import React from 'react';
import { Container, Grid } from '@mui/material';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../layout/Details.css'; 
import SerieDetails from '../components/SeriesDetail';


const Home: React.FC = ({ }) => {
  return (
    <div className="details-container"> 
      <Header />
      <Container className="main-container" maxWidth="lg">
        <main>
          <Grid container spacing={3}>
            <SerieDetails/>
          </Grid>
        </main>
      </Container>
      <Footer />
    </div>
  );
};

export default Home;

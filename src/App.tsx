// App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import Home from './pages/Home';
import theme from './Theme'; 
import Details from './pages/Details';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Home series={[]} />} />
          <Route path="/series/:id" element={<Details />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;

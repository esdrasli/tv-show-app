// Theme.ts
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: red[500],
    },
    // Defina outras cores conforme necessário para combinar com o estilo da Netflix
  },
  typography: {
    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", // Use a fonte padrão da Netflix ou outra similar
  },
  // Defina outros estilos conforme necessário para combinar com o estilo da Netflix
});

export default theme;

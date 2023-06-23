import { useTranslation } from 'react-i18next';
// routing
import React from 'react';

import Routes from './routes';
// theme
import ThemeProvider from './theme';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

function App() {
  return (
    <ThemeProvider>
      <Routes />
    </ThemeProvider>
  );
}

export default App;

//  <button onClick={() => changeLanguage("en")}>EN</button>
// <button onClick={() => changeLanguage("pt")}>PT</button>
// <div><h1>{t("main")}</h1></div>

// Políticas Temas Parceiros Publicações Dados E Indicadores

// Policy Themes Partners Publications Data And Indicators

import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState } from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import { BaseLayout } from './components';
import { Home } from './containers/home';
import { article, home } from './router/routes';
import { TimeFrame } from './types/TimeFrame';
import { ArticleDetails } from './containers/articleDetails';
import { SelectorHandlerFunction } from './types/SelectorHandlerFunction';

const mdTheme = createTheme();

export interface AppGlobalState {
  timeFrame: TimeFrame
  onSelectorChangeHandler: SelectorHandlerFunction  
}

function App() {
  const [ timeFrame, setTimeFrame ] = useState<TimeFrame>('day')

  const appGlobalProps: AppGlobalState = {
    timeFrame,
    onSelectorChangeHandler: setTimeFrame
  }

  return (
    <ThemeProvider theme={mdTheme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <BaseLayout { ...appGlobalProps } ><Outlet /></BaseLayout> }>
            <Route path={ home() } element={ <Home { ...appGlobalProps } /> } />
            <Route path={ article(':articleId') } element={ <ArticleDetails { ...appGlobalProps } /> } />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

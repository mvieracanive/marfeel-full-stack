import React, { PropsWithChildren } from 'react';
import Box from '@mui/material/Box';
import { AppBar } from '../app-bar';
import { AppGlobalState } from '../../App';

export const BaseLayout = (props: PropsWithChildren<Pick<AppGlobalState, 'onSelectorChangeHandler'>>) => {
  const {
    children,
    ...restProps
  } = props

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <AppBar title='Traffic' { ...restProps } />
      <Box
          component="main"
          sx={{
            flexGrow: 1,
            overflow: 'auto',
            marginTop: '82px'
          }}
        >
          { children }
      </Box>
    </Box>
  );
};

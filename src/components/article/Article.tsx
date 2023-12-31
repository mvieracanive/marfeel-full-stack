import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { NavigateFunction } from 'react-router-dom';
import { article } from '../../router/routes';
import { styled } from '@mui/material';

const Value = styled(Typography)`
  align-self: center;
  margin-left: auto;
  padding: 0 8px;
`;

export type ArticleProps = {
  id: string,
  author: string;
  url: string;
  image: string;
  traffic: number;
  navigate: NavigateFunction
};

export const Article = ({ author, url, image, traffic, navigate, id }: ArticleProps) => {

  return (
    <Card
            sx={{
              display: 'flex',
              mb: 1,
              paddingRight: '6px',
              '&:hover': {
                cursor: 'pointer'
              }
            }}
            variant='outlined'
            onClick = { () => navigate(article(id)) } >
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={ image }
      />
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            { url }
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            { author }
          </Typography>
        </CardContent>
      </Box>
      <Value variant="h4">
            { traffic }
      </Value>
    </Card>
  );
}

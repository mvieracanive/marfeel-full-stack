import { styled } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Value = styled(Typography)`
  align-self: center;
  margin-left: auto;
  padding: 0 8px;
`;

export type ArticleV2Props = {
  author: string;
  url: string;
  image: string;
  traffic: number;
};

export const ArticleV2 = ({ author, url, image }: ArticleV2Props) => {

  return (
    <Card
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              mb: 1,
              border: 'none',
              paddingRight:
              '6px'
            }}
            variant='outlined' >
      
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
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={ image }
      />
    </Card>
  );
}

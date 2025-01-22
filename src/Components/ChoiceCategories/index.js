import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';


const DestinationSelectCard = ({ title, image, description }) => (
  <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      sx={{ height: 50 }}
      image={image}
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {title}
      </Typography>
      
      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        {description}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Share</Button>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
);


export default function Destinations() {
  const cardData = [
    {
      title: 'Tayko',
      image: '../../assests/images/ss1.jpg',
      description: 'Description for Lizard 1',
    },
    {
      title: 'Lizard 2',
      image: '/static/images/cards/contemplative-reptile.jpg',
      description: 'Description for Lizard 2',
    },
    {
      title: 'Lizard 3',
      image: '/static/images/cards/contemplative-reptile.jpg',
      description: 'Description for Lizard 3',
    },
    {
      title: 'Lizard 4',
      image: '/static/images/cards/contemplative-reptile.jpg',
      description: 'Description for Lizard 4',
    },
  ];

  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Grid container spacing={2}>
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <DestinationSelectCard
              title={card.title}
              image={card.image}
              description={card.description}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

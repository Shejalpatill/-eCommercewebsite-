import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Grid from '@mui/material/Grid'; 
import imagedestination1 from '../../assests/images/ss2.jpg';
import '../../App.css';
const DestinationCard = ({ title, image, description, onReadMore }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  // Toggle description visibility
  const toggleDescription = () => {
    setShowFullDescription(!showFullDescription);
  };

 
  const MAX_LENGTH = 100; 
  const truncatedDescription = description.length > MAX_LENGTH
    ? `${description.substring(0, MAX_LENGTH)}...`
    : description;

  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        sx={{ height: 200 }}
        image={image}
        title={title}
      />
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 0, fontSize:'16px', fontWeight:600 }}>
          <Typography gutterBottom variant="p" component="div" className="cardTitle">
            {title}
          </Typography>
          <IconButton aria-label="save" sx={{p:0}}>
            <FavoriteBorderIcon />
          </IconButton>
        </Box>
        <Box sx={{ mb: 1 }}>
          <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1, mt:1, fontSize:'12px' }} className="cardDescription">
            {showFullDescription ? description : truncatedDescription}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center' }} className="popular-btn">
            <Button size="small" onClick={toggleDescription} sx={{ mr: 4}}>
              {showFullDescription ? 'Show Less' : 'Read More'}
            </Button>
            <Button size="small" onClick={onReadMore}>
             Open
            </Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default function PopularDestinations() {
  const navigate = useNavigate();

  const cardData = [
    {
      id: 1,
      title: 'Tokyo: A Vibrant Metropolis of Tradition and Innovation',
      image: imagedestination1,
      description: 'Explore Tokyo, the dynamic capital of Japan and one of the world\'s most captivating cities. With a population exceeding 14 million, Tokyo is a bustling metropolis where ancient traditions seamlessly blend with cutting-edge modernity. From serene temples and historic landmarks to neon-lit streets and modern skyscrapers, Tokyo offers an unparalleled experience for travelers seeking both cultural heritage and contemporary excitement. Discover the rich tapestry of Tokyo through its vibrant neighborhoods, delicious cuisine, and unique blend of old and new.',
      path: '/destination/1',
    },
    {
      id: 12,
      title: 'Tokyo: A Vibrant Metropolis of Tradition and Innovation',
      image: imagedestination1,
      description: 'Explore Tokyo, the dynamic capital of Japan and one of the world\'s most captivating cities. With a population exceeding 14 million, Tokyo is a bustling metropolis where ancient traditions seamlessly blend with cutting-edge modernity. From serene temples and historic landmarks to neon-lit streets and modern skyscrapers, Tokyo offers an unparalleled experience for travelers seeking both cultural heritage and contemporary excitement. Discover the rich tapestry of Tokyo through its vibrant neighborhoods, delicious cuisine, and unique blend of old and new.',
      path: '/destination/12',
    },
    {
      id:7,
      title: 'Tokyo: A Vibrant Metropolis of Tradition and Innovation',
      image: imagedestination1,
      description: 'Explore Tokyo, the dynamic capital of Japan and one of the world\'s most captivating cities. With a population exceeding 14 million, Tokyo is a bustling metropolis where ancient traditions seamlessly blend with cutting-edge modernity. From serene temples and historic landmarks to neon-lit streets and modern skyscrapers, Tokyo offers an unparalleled experience for travelers seeking both cultural heritage and contemporary excitement. Discover the rich tapestry of Tokyo through its vibrant neighborhoods, delicious cuisine, and unique blend of old and new.',
      path: '/destination/7',
    }
  ];

  return (
    <Box sx={{ flexGrow: 1, pt: 5}}>
      <Typography variant="h5" component="h5" sx={{ mb: 2 ,fontSize:'25px'}}>
        Popular Destinations
      </Typography>
      <Grid container spacing={3}>
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={4} md={4} key={index}>
            <DestinationCard
            title={card.title}
            image={card.image}
            description={card.description}
            onReadMore={() => navigate(card.path)} 
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

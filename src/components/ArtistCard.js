import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ArtistCard({ name, followers, imageURL, url }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea href={url}  target="_blank">
        <CardMedia
          component="img"
          height="345"
          image={imageURL}
          alt="artist image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Followers: {followers}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

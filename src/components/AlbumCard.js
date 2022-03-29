import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function AlbumCard({ title, artist, imageURL, url }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea href={url}  target="_blank">
        <CardMedia
          component="img"
          height="345"
          image={imageURL}
          alt="album cover"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {artist}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

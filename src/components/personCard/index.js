
import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function PersonCard({ person }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="400"
        image={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
        alt={person.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {person.name}
        </Typography>
      </CardContent>
    </Card>
  );
}


import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)({
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between', 
  });
  
  const StyledCardMedia = styled(CardMedia)({
    height: 400, 
    backgroundSize: 'cover', 
  });
export default function PersonCard({ person }) {
    return (
        <StyledCard>
          <StyledCardMedia
            image={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
            alt={person.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {person.name}
            </Typography>
            {/* 后緒添加更多的信息 */}
          </CardContent>
        </StyledCard>
      );
}

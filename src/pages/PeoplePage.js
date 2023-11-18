
import React, { useEffect, useState } from 'react';
import { getPeople } from '../api/tmdb-api'; 
import Grid from '@mui/material/Grid';
import PersonCard from '../components/personCard';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

export default function PeoplePage() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    getPeople().then(data => {
      setPeople(data.results);
    });
  }, []);

  return (
    <Container>
      <Typography variant="h3" component="h1" gutterBottom>
        Famous People
      </Typography>
      <Grid container spacing={4}>
        {people.map((person) => (
          <Grid item key={person.id} xs={12} sm={6} md={4} lg={3}>
            <PersonCard person={person} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
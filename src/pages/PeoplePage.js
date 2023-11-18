
import React, { useEffect, useState } from 'react';
import { getPeople } from '../api/tmdb-api'; 
import Grid from '@mui/material/Grid';
import PersonCard from '../components/personCard';

export default function PeoplePage() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    getPeople().then(data => {
      setPeople(data.results);
    });
  }, []);

  return (
    <Grid container spacing={4}> 
      {people.map((person) => (
        <Grid item key={person.id} xs={12} sm={6} md={4} lg={3}>
          <PersonCard person={person} />
        </Grid>
      ))}
    </Grid>
  );
}

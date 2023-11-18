
import React, { useEffect, useState } from 'react';
import { getPeople } from '../api/tmdb-api'; 

export default function PeoplePage() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    getPeople().then(data => {
      setPeople(data.results);
    });
  }, []);

  return (
    <div>
      {people.map((person) => (
        <div key={person.id}>{person.name}</div>
      ))}
    </div>
  );
}

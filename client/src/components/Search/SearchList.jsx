import React from 'react';
import MediaCard from './Card';

function SearchList({ filteredPersons }) {
  const filtered = filteredPersons.map((person) => <MediaCard key={person.id} person={person} />);
  return (
    <div>
      {filtered}
    </div>
  );
}

export default SearchList;

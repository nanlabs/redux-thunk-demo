import React from 'react';
import Person from './Person';

const PeopleList = ({people}) => (
  <div id="peopleList">
    {people.map(person => (
      <Person
        key={person.id}
        name={person.name}
        age={person.age}
      />
    ))}
  </div>
);

export default PeopleList;
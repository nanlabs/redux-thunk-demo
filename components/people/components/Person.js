import React from 'react';

const Person = ({name, age}) => (
  <div className="person">
    <span className="person-name">{name}</span>
    <span className="person-age">{age}</span>
  </div>
);

export default Person;
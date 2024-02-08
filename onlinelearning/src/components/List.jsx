import React from 'react'

const people = [
    'Creola Katherine Johnson: mathematician',
    'Mario José Molina-Pasquel Henríquez: chemist',
    'Mohammad Abdus Salam: physicist',
    'Percy Lavon Julian: chemist',
    'Subrahmanyan Chandrasekhar: astrophysicist'
  ];

const List = () => {
    const listItems = people.map(person =>
        <li>{person}</li>
      );
  return (
    <ul className='p-16'>{listItems}</ul>
  )
}

export default List

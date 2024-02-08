import React from 'react'

const people = [
    'Creola Katherine Johnson: mathematician',
    'Mario José Molina-Pasquel Henríquez: chemist',
    'Mohammad Abdus Salam: physicist',
    'Percy Lavon Julian: chemist',
    'Subrahmanyan Chandrasekhar: astrophysicist'
  ];


  const peoples = [{
    id: 0,
    name: 'Creola Katherine Johnson',
    profession: 'mathematician',
  }, {
    id: 1,
    name: 'Mario José Molina-Pasquel Henríquez',
    profession: 'chemist',
  }, {
    id: 2,
    name: 'Mohammad Abdus Salam',
    profession: 'physicist',
  }, {
    name: 'Percy Lavon Julian',
    profession: 'chemist',  
  }, {
    name: 'Subrahmanyan Chandrasekhar',
    profession: 'astrophysicist',
  }];

const List = () => {
    const listItems = people.map(person =>
        <li>{person}</li>
      );
      const chemists = peoples.filter(person => person.profession === 'chemist');

  return (
    <>
    <ul className='p-16'>{listItems}</ul>
     <ul className='p-16'> {chemists.map(person => (
            <li key={person.id}>{person.name}</li>
          ))}</ul>;
     </>
  )
}

export default List

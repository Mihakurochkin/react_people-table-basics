import { useContext } from 'react';
import { PersonItem } from './PersonItem';
import { PeopleContext } from '../../store/PeopleContext';

export const PeopleList = () => {
  const { people } = useContext(PeopleContext);

  return people.map((person, i) => <PersonItem person={person} key={i} />);
};

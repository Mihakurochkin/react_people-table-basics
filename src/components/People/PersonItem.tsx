import { useContext } from 'react';
import { Person } from '../../types';
import { PeopleContext } from '../../store/PeopleContext';
import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';

function peopleFinder(people: Person[], name: string | null) {
  return people.find(p => p.name === name);
}

export const PersonItem: React.FC<{ person: Person }> = ({ person }) => {
  const { people } = useContext(PeopleContext);
  const { pathname } = useLocation();

  return (
    <tr
      data-cy="person"
      className={classNames({
        'has-background-warning': pathname.endsWith(person.slug),
      })}
    >
      <td>
        <a
          className={classNames({
            'has-text-danger': person.sex === 'f',
          })}
          href={`#/people/${person.slug}`}
        >
          {person.name}
        </a>
      </td>

      <td>{person.sex}</td>
      <td>{person.born}</td>
      <td>{person.died}</td>
      <td>
        {person.motherName ? (
          peopleFinder(people, person.motherName) ? (
            <Link
              className="has-text-danger"
              to={`/people/${peopleFinder(people, person.motherName)!.slug}`}
            >
              {person.motherName}
            </Link>
          ) : (
            person.motherName
          )
        ) : (
          '-'
        )}
      </td>
      <td>
        {person.fatherName ? (
          peopleFinder(people, person.fatherName) ? (
            <Link
              to={`/people/${peopleFinder(people, person.fatherName)!.slug}`}
            >
              {person.fatherName}
            </Link>
          ) : (
            person.fatherName
          )
        ) : (
          '-'
        )}
      </td>
    </tr>
  );
};

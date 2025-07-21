import { useContext } from 'react';
import { Loader } from '../Loader';
import { PeopleList } from './PeopleList';
import { PeopleContext } from '../../store/PeopleContext';

export const People = () => {
  const { isLoading, isError, isPeople } = useContext(PeopleContext);

  return (
    <div className="block">
      <div className="box table-container">
        {isError ? (
          <p data-cy="peopleLoadingError" className="has-text-danger">
            Something went wrong
          </p>
        ) : isLoading ? (
          <Loader />
        ) : !isPeople ? (
          <p data-cy="noPeopleMessage">There are no people on the server</p>
        ) : (
          <table
            data-cy="peopleTable"
            className="table is-striped is-hoverable is-narrow is-fullwidth"
          >
            <thead>
              <tr>
                <th>Name</th>
                <th>Sex</th>
                <th>Born</th>
                <th>Died</th>
                <th>Mother</th>
                <th>Father</th>
              </tr>
            </thead>

            <tbody>
              <PeopleList />
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

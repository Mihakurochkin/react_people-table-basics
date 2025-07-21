import React, { createContext, useEffect, useState } from 'react';
import { Person } from '../types';
import { getPeople } from '../api';

type PeopleContextType = {
  people: Person[];
  isLoading: boolean;
  isError: boolean;
  isPeople: boolean;
  setPeople: (people: Person[]) => void;
};

export const PeopleContext = createContext<PeopleContextType>({
  people: [],
  isLoading: true,
  isError: false,
  isPeople: true,
  setPeople: () => {},
});

export const PeopleProvider = ({ children }: { children: React.ReactNode }) => {
  const [people, setPeople] = useState<Person[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    getPeople()
      .then(peopleFromServer => {
        setPeople(peopleFromServer);
      })
      .catch(() => {
        setIsError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const value = {
    people,
    isLoading,
    isError,
    isPeople: people.length > 0,
    setPeople,
    setIsLoading,
    setIsError,
  };

  return (
    <PeopleContext.Provider value={value}>{children}</PeopleContext.Provider>
  );
};

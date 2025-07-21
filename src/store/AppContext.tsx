import { createContext, ReactNode } from 'react';

interface AppContextProps {}

export const AppContext = createContext<AppContextProps>({
  setIsLoading: () => {},
});

export const AppProvider = ({ children }: { children: ReactNode }) => {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

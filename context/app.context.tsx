import { ReactNode, createContext } from 'react';

export const AppContext = createContext({ github: 'https://github.com/Noiker-ux' });

export function AppContextProvider({ children }: { children: ReactNode }) {
  return (
    <AppContext.Provider value={{ github: 'https://github.com/Noiker-ux' }}>
      {children}
    </AppContext.Provider>
  );
}

import React, { useContext } from 'react';

interface Auth {
  loggedIn: boolean;
  setLoggedIn: (loggedIn: boolean) => void;
}

export const AuthContext = React.createContext<Auth>({
  loggedIn: false,
  setLoggedIn: (loggedIn: boolean) => {},
});

export function useAuth(): Auth {
  return useContext(AuthContext);
}

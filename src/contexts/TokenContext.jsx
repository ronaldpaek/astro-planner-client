import { createContext, useContext, useState } from 'react';

import { getToken } from '@/lib/token';

const TokenContext = createContext();

// Custom hook to use the token context
export const useToken = () => {
  const context = useContext(TokenContext);
  if (!context) {
    throw new Error('useToken must be used within a TokenProvider');
  }
  return context;
};

export const TokenProvider = ({ children }) => {
  const [token, setToken] = useState(getToken());

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {children}
    </TokenContext.Provider>
  );
};

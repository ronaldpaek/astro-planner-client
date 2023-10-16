import React from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import App from '@/App';
import { TokenProvider } from '@/contexts/TokenContext';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <TokenProvider>
        <App />
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
      </TokenProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

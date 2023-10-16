import { useQuery } from '@tanstack/react-query';

import { getToken } from '../lib/token';

const API_URL = import.meta.env.VITE_API_URL;

const fetchUserWithToken = async () => {
  // Get the token from localStorage
  const token = getToken();

  if (!token) {
    return null;
  }

  // Fetch the user
  const response = await fetch(`${API_URL}/users/me`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (!response.ok) {
    throw new Error('Fetching user failed');
  }

  // Return the user
  const data = await response.json();
  return data.user;
};

const useUser = () => {
  return useQuery({
    queryKey: ['user'],
    queryFn: fetchUserWithToken,
    retry: false,
  });
};

export default useUser;

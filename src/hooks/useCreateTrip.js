import { useMutation } from '@tanstack/react-query';

import { getToken } from '@/lib/token';

const API_URL = import.meta.env.VITE_API_URL;

const createTrip = async (tripData) => {
  const token = getToken();

  const response = await fetch(`${API_URL}/trips`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(tripData),
  });

  if (!response.ok) {
    throw new Error(data.error);
  }
  const data = await response.json();
  return data;
};

const useCreateTrip = (onSuccess, onError) => {
  return useMutation({ mutationFn: createTrip, onSuccess, onError });
};

export default useCreateTrip;

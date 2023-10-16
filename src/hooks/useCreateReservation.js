import { useMutation } from '@tanstack/react-query';

const API_URL = import.meta.env.VITE_API_URL;

export const useCreateReservation = (
  token,
  entityType,
  { onSuccess, onError }
) => {
  return useMutation({
    mutationFn: async (reservationData) => {
      const response = await fetch(`${API_URL}/reservations`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(reservationData),
      });

      if (!response.ok) {
        const errorData = await res.json();
        throw new Error(
          errorData.error || `Failed to create ${entityType} reservation`
        );
      }

      const data = await response.json();
      return data;
    },
    onSuccess,
    onError,
  });
};

export default useCreateReservation;

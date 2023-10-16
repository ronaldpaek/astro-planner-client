import { useMutation, useQueryClient } from '@tanstack/react-query';

const API_URL = import.meta.env.VITE_API_URL;

const useRegister = (onSuccessCallback) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (formData) => {
      const response = await fetch(`${API_URL}/users/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(
          `Network response was not ok: ${response.status} ${response.statusText}`
        );
      }

      const data = await response.json();
      return data;
    },
    onSuccess: (data) => {
      if (onSuccessCallback) {
        onSuccessCallback(data);
      }
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },
  });
};

export default useRegister;

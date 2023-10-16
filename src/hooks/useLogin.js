import { useMutation, useQueryClient } from '@tanstack/react-query';

const API_URL = import.meta.env.VITE_API_URL;

const useLogin = (onSuccessCallback) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (formData) => {
      const response = await fetch(`${API_URL}/users/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Failed to login. Status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    },
    onSuccess: (data) => {
      if (onSuccessCallback) {
        onSuccessCallback(data);
      }

      // Invalidate the user query
      queryClient.invalidateQueries({ queryKey: ['user'] });
    },
  });
};

export default useLogin;

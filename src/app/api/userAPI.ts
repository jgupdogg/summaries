import { useMutation, useQuery, useQueryClient } from 'react-query';
import { handleResponse } from '../utils/handleRestApiResponse';
// import * as GlobalVariables from '../config/GlobalVariableContext';

// Supabase API URL
const SUPABASE_URL = 'https://oqggfyqdyvdivsizcszq.supabase.co/auth/v1';

// User Creation
export const createUser = async ({ email, password }: { email: string; password: string }) => {
  const response = await fetch(`${SUPABASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      apikey: 'YOUR_SUPABASE_API_KEY', // Replace with your actual API key
    },
    body: JSON.stringify({ email, password }),
  });
  return handleResponse(response);
};

export const useCreateUser = () => {
  const queryClient = useQueryClient();
  return useMutation(createUser, {
    onSuccess: () => {
      queryClient.invalidateQueries('user');
    },
  });
};

// User Login
export const loginUser = async ({ email, password }: { email: string; password: string }) => {
  const response = await fetch(`${SUPABASE_URL}/token?grant_type=password`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      apikey: 'YOUR_SUPABASE_API_KEY', // Replace with your actual API key
    },
    body: JSON.stringify({ email, password }),
  });
  return handleResponse(response);
};

export const useLoginUser = () => {
  const queryClient = useQueryClient();
  return useMutation(loginUser, {
    onSuccess: () => {
      queryClient.invalidateQueries('user');
    },
  });
};

// User Logout
export const logoutUser =  async (jwt: string) => {
  const response = await fetch(`${SUPABASE_URL}/logout`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${jwt}`,
      apikey: 'YOUR_SUPABASE_API_KEY', // Replace with your actual API key
    },
  });
  return handleResponse(response);
};

export const useLogoutUser = () => {
  const queryClient = useQueryClient();
  return useMutation(logoutUser, {
    onSuccess: () => {
      queryClient.invalidateQueries('user');
    },
  });
};

// Fetch User Data
export const getUser =  async (jwt: string) => {
  const response = await fetch(`${SUPABASE_URL}/user`, {
    headers: {
      Authorization: `Bearer ${jwt}`,
      apikey: 'YOUR_SUPABASE_API_KEY', // Replace with your actual API key
    },
  });
  return handleResponse(response);
};

export const useGetUser = () => {
  const Constants = GlobalVariables.useValues();
  return useQuery('user', () => getUser(Constants['jwt']), {
    enabled: !!Constants['jwt'], // Only fetch if JWT is available
  });
};
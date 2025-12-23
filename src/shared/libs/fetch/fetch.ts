const BASE_URL = 'https://localhost:4000';

export const endpointFetch = async <T>(endpoint: string, options?: RequestInit): Promise<T> => {
  console.log(`${BASE_URL}${endpoint}`);
  const response = await fetch(`${BASE_URL}${endpoint}`, options);

  console.log(response.ok);

  if (!response.ok) {
    throw new Error(`Error fetching ${endpoint}: ${response.statusText}`);
  }

  return await response.json();
}

export interface TLoginData {
  email:    string;
  password: string;
}

export interface TLoginRequest {
  userId:    string;
  email:     string;
  firstName: string;
  lastName:  string;
}

export const loginFetch = async (body: TLoginData, options?: RequestInit): Promise<TLoginRequest & {token: string}> => {
  const response = await endpointFetch<TLoginRequest>(`/user?email=${body.email}&password=${body.password}`);

  const token = btoa(response.data.userId + ':' + new Date().toISOString());

  return {
    ...response.data,
    token
  }
}
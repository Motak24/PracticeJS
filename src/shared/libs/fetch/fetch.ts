const BASE_URL = 'http://localhost:4000';

export const endpointFetch = async <T>(endpoint: string, options?: RequestInit): Promise<T> => {
  const response = await fetch(`${BASE_URL}${endpoint}`, options);

  if (!response.ok) {
    throw new Error(`Error fetching ${endpoint}: ${response.statusText}`);
  }

  return await response.json();
}

export interface TLoginData {
  password: string;
  email:    string;
}

export interface TLoginRequest {
  firstName: string;
  password:  string;
  lastName:  string;
  userId:    string;
  email:     string;
}

export interface TSessionRequest {
  userId: string;
  token:  string;
}

export type TLoginResponse = Omit<TLoginRequest, 'password'> & { token: string };

export const loginFetch = async (body: TLoginData, options?: RequestInit): Promise<TLoginResponse> => {
  const response = await endpointFetch<Array<TLoginRequest>>(`/users?email=${body.email}&password=${body.password}`, options);

  if (response.length === 0) {
    throw new Error('Invalid email or password');
  }

  const token = btoa(response[0].userId + ':' + new Date().toISOString());

  await endpointFetch('/tokens', {
    headers: {},
    method:  'POST',
    body:    JSON.stringify({
      userId: response[0].userId,
      token
    })
  })

  const { password, ...rest } = response[0];

  return {
    ...rest,
    token
  };
}

export const sessionFetch = async (token: string, options?: RequestInit): Promise<TLoginResponse> => {
  const sessionResponse = await endpointFetch<Array<TSessionRequest>>(`/tokens?token=${token}`, options);

  if (sessionResponse.length === 0) {
    throw new Error('Invalid token');
  }

  const userResponse = await endpointFetch<Array<TLoginRequest>>(`/users?userId=${sessionResponse[0].userId}`, options);

  if (userResponse.length === 0) {
    throw new Error('Invalid token');
  }

  const { password, ...rest } = userResponse[0];

  return {
    ...rest,
    token
  };
}
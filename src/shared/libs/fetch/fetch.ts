const BASE_URL = 'https://localhost:4000';

const endpointFetch = async (endpoint: string, options?: RequestInit) => {
  const response = await fetch(`${BASE_URL}${endpoint}`, options);

  console.log(response.ok);

  if (!response.ok) {
    throw new Error(`Error fetching ${endpoint}: ${response.statusText}`);
  }

  return await response.json();
}
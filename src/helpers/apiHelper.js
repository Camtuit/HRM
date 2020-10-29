export async function handleResponse(response) {
  return response.data;
}

export function handleError(error) {
  throw error;
}

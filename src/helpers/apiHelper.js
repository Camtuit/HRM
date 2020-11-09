export async function handleResponse(response) {
  return response.data;
}

export function handleError(error) {
  throw error;
}

export function getQuery(object) {
  let query = '';
  Object.keys(object).map((key) => {
    query += `${key}=${object.key}&`;
  });
  return query.slice(0, -1);
}

export function toLower(type) {
  return type && type.toLowerCase(); // Exclude: REQUEST_DEVICE;
}

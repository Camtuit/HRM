export async function handleResponse(response) {
  return response.data;
}

export function handleError(error) {
  throw error;
}

export function getQuerry(object) {
  let querry = '';
  Object.keys(object).map((key) => {
    querry += `${key}=${object.key}&`;
  });
  return querry.slice(0, -1);
}

export function toLower(type) {
  return type.toLowerCase(); // Exclude: REQUEST_DEVICE;
}

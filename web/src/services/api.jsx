const postToApi = (data) => {
  // Llamamos a la API
  console.log(data);
  return fetch('https://dev.adalab.es/api/projectCard', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((result) => {
      if (result.success) {
        return result.cardURL;
      }
    });
};

const getToApi = () => {
  return fetch('http://localhost:3001/listprojects')
    .then((response) => response.json())
    .then((response) => {
      const result = response;
      return result;
    });
};

const objectApi = {
  post: postToApi,
  get: getToApi,
};

export default objectApi;

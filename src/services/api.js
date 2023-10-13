const callToApi = (data) => {
  // Llamamos a la API
  return fetch('https://dev.adalab.es/api/projectCard', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((result) => {
      console.log(result);
      if (result.success) {
        console.log(result);
        return result.cardURL;
      }
    });
};

export default callToApi;

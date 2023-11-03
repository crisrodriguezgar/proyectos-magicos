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
      const cleanData = response.data.map((item) => {
        return {
          idProject: item.idProject,
          name: item.nameProject,
          slogan: item.sloganProject,
          technologies: item.techProject,
          repo: item.urlGit,
          demo: item.urlDemo,
          desc: item.descProject,
          autor: item.nameAutor,
          job: item.jobAutor,
          photo: item.imageProject,
          image: item.imageAutor,
          idAutor: item.idAutor,
        };
      });
      return cleanData;
    });
};

const objectApi = {
  post: postToApi,
  get: getToApi,
};

export default objectApi;

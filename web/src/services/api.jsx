const postToApi = (data) => {
  // Llamamos a la API
  console.log(data);
  return fetch('https://proyectosmagicos.onrender.com/createproject', {
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

const getToApi = (params) => {
  return fetch(
    `https://proyectosmagicos.onrender.com/listprojects?sort=${params.sort}`
  )
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
const deleteProject = (projectId) => {
  // Llamamos a la API
  console.log(projectId);
  return fetch(`https://proyectosmagicos.onrender.com/project/${projectId}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => response.json())
    .then((result) => {
      return result;
    });
};

const objectApi = {
  post: postToApi,
  get: getToApi,
  delete: deleteProject,
};

export default objectApi;

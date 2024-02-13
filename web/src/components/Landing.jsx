import '../styles/layout/Landing.scss';
import Btn from './Btn';
import Card from './Card';
import objectApi from '../services/api';
import { useEffect, useState } from 'react';
import objectToExport from '../services/localStorage';

const Landing = () => {
  const [dataProjects, setDataProjects] = useState([]);
  const [allProjectsOptionSort, setAllProjectsOptionSort] = useState('asc');

  const handleAllProjectsOptions = (ev) => {
    const inputValue = ev.target.value;
    const inputKey = ev.target.name;
    if (inputKey === 'sort') {
      setAllProjectsOptionSort(inputValue);
    }
  };

  const handleRemoveCard = async (projectId) => {
    console.log('estoy borrando');
    // const message = await objectApi.deleteProject(projectId);
    // console.log(message);
    objectApi.delete(projectId);

    setDataProjects(
      (projects) =>
        projects.filter((proyect) => proyect.idProject !== projectId) //Después de eliminar el proyecto en la API, actualiza el estado dataProjects filtrando los proyectos para excluir el proyecto que acaba de ser eliminado.
    );
  };

  useEffect(() => {
    const params = {
      sort: allProjectsOptionSort,
    };
    objectApi.get(params).then((response) => {
      const dataApi = response;
      console.log(dataApi);
      setDataProjects(dataApi);
    });
  }, [allProjectsOptionSort]);

  const renderProjects = () => {
    return dataProjects.map((project) => {
      return (
        <a
          href={`https://proyectos-magicos.onrender.com/project/${project.idProject}`}
          key={project.idProject}
          className="cardClick"
        >
          <Card
            key={project.idProject}
            data={project}
            autorLanding="autorLanding"
            titleLanding="titleLanding"
            descLanding="descLanding"
            sloganLanding="sloganLanding"
            showIcon={true}
            handleRemoveCard={handleRemoveCard}
          />
        </a>
      );
    });
  };

  return (
    <>
      <div className="divIntro">
        <Btn text={'Nuevo Proyecto'} route={'/project'} />
        <div className="divSort">
          <label
            className={`labelSort ${
              allProjectsOptionSort === 'asc' ? 'clicked' : ''
            }`}
            htmlFor="sortAsc"
          >
            A-Z
            <input
              className="inputSort"
              id="sortAsc"
              type="radio"
              name="sort"
              value="asc"
              checked={allProjectsOptionSort === 'asc'}
              onChange={handleAllProjectsOptions}
            />
          </label>

          <label
            className={`labelSort ${
              allProjectsOptionSort === 'desc' ? 'clicked' : ''
            }`}
            htmlFor="sortDesc"
          >
            Z-A
            <input
              className="inputSort"
              id="sortDesc"
              type="radio"
              name="sort"
              value="desc"
              checked={allProjectsOptionSort === 'desc'}
              onChange={handleAllProjectsOptions}
            />
          </label>
        </div>
      </div>
      <section className="preview previewLanding">{renderProjects()}</section>
    </>
  );
};

export default Landing;

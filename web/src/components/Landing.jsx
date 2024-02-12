import '../styles/layout/Landing.scss';
import Btn from './Btn';
import Card from './Card';
import objectApi from '../services/api';
import { useEffect, useState } from 'react';

const Landing = ({ handleChange, projectFilter }) => {
  const [dataProjects, setDataProjects] = useState([]);
  const [allProjectsOptionSort, setAllProjectsOptionSort] = useState('asc');

  const handleInput = (ev) => {
    handleChange(ev.target.value);
  };

  const handleAllProjectsOptions = (ev) => {
    const inputValue = ev.target.value;
    const inputKey = ev.target.name;
    if (inputKey === 'sort') {
      setAllProjectsOptionSort(inputValue);
    }
  };

  const handleRemoveCard = async (projectId) => {
    console.log('estoy borrando');
    objectApi.delete(projectId);

    setDataProjects(projects =>
      projects.filter(proyect => proyect.idProject !== projectId)
    );
  };

  useEffect(() => {
    const params = {
      sort: allProjectsOptionSort,
    };
    objectApi.get(params).then((response) => {
      const dataApi = response;
      setDataProjects(dataApi);
    });
  }, [allProjectsOptionSort]);

  const renderProjects = () => {
    const filteredProjects = dataProjects.filter(project =>
      project.name.toLowerCase().includes(projectFilter.toLowerCase())
    );

    return filteredProjects.map((project) => (
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
    ));
  };

  return (
    <>
      <div className="divIntro">
        <Btn text={'Nuevo Proyecto'} route={'/project'} />
        <div className="divSort">
          <input
            className="formInput"
            type="text"
            name="projects"
            placeholder="Busca un proyecto..."
            value={projectFilter}
            onChange={handleInput}
          />
          <div>
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
      </div>
      <section className="preview previewLanding">{renderProjects()}</section>
    </>
  );
};

export default Landing;

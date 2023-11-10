import '../styles/layout/Landing.scss';
import Btn from './Btn';
import Card from './Card';
import objectApi from '../services/api';
import { useEffect, useState } from 'react';

const Landing = () => {
  const [dataProjects, setDataProjects] = useState([]);

  useEffect(() => {
    objectApi.get().then((response) => {
      const dataApi = response;
      console.log(dataApi);
      setDataProjects(dataApi);
      console.log(dataProjects);
    });
  }, []);

  const renderProjects = () => {
    return dataProjects.map((project) => {
      return (
      <a href={`https://proyectos-magicos.onrender.com/project/${project.idProject}`} key={project.idProject} className="cardClick">
        <Card
          key={project.idProject}
          data={project}
          autorLanding="autorLanding"
        />
      </a>
      );
    });
  };

  return (
    <>
      <Btn text={'Nuevo Proyecto'} route={'/project'} />
      <section className="preview previewLanding">{renderProjects()}</section>
    </>
  );
};

export default Landing;

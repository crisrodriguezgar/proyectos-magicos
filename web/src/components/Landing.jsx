import "../styles/layout/Landing.scss";
import Btn from "./Btn";
import Card from "./Card";
import objectApi from "../services/api";
import { useEffect, useState } from "react";

const Landing = () => {
  const [dataProjects, setDataProjects] = useState([]);
  const [allProjectsOptionSort, setAllProjectsOptionSort] = useState('asc');

  
const handleAllProjectsOptions = data => {
  if (data.key === 'sort') {
    setAllProjectsOptionSort(data.value);
  }
};


  useEffect(() => {
    const params = {
      sort: allProjectsOptionSort
    };
    objectApi.get(params).then((response) => {
      const dataApi = response;
      console.log(dataApi);
      setDataProjects(dataApi);
      console.log(dataProjects);
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
          />
        </a>
      );
    });
  };

  return (
    <>
      <Btn text={"Nuevo Proyecto"} route={"/project"} />
      <div className="divSort">
        <label className="labelSort">
          Ordernar: A-Z
          <input
            className="inputSort"
            type="radio"
            name="sort"
            value="asc"
            checked={allProjectsOptionSort === "asc"}
            onChange={handleAllProjectsOptions}
          />
        </label>

        <label className="labelSort">
          Z-A
          <input
            className="inputSort"
            type="radio"
            name="sort"
            value="desc"
            checked={allProjectsOptionSort === "desc"}
            onChange={handleAllProjectsOptions}
          />
        </label>
      </div>
      <section className="preview previewLanding">{renderProjects()}</section>
    </>
  );
};

export default Landing;

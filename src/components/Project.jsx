import CardPreview from './CardPreview';
import Form from './Form';
import {Link} from 'react-router-dom';

const Project = ({
  data,
  handleInput,
  handleClickCreateCard,
  errorName,
  errorSlogan,
  errorRepo,
  errorDemo,
  errorTech,
  errorDesc,
  errorAutor,
  errorJob,
  responseUrl,
  isHidden,
  avatar,
  updateAvatar,
  project,
  updateProject,
}) => {
  return (
    <>
      <Link to="/">
        <section className="project">
          <button className="project_btn">Ver proyectos</button>
        </section>
      </Link>
      <CardPreview data={data} avatar={avatar} project={project} />
      <Form
        data={data}
        handleInput={handleInput}
        handleClickCreateCard={handleClickCreateCard}
        errorName={errorName}
        errorSlogan={errorSlogan}
        errorRepo={errorRepo}
        errorDemo={errorDemo}
        errorTech={errorTech}
        errorDesc={errorDesc}
        errorAutor={errorAutor}
        errorJob={errorJob}
        responseUrl={responseUrl}
        isHidden={isHidden}
        avatar={avatar}
        updateAvatar={updateAvatar}
        project={project}
        updateProject={updateProject}
      />
    </>
  );
};

export default Project;

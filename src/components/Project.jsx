import PropTypes from 'prop-types';
import CardPreview from './CardPreview';
import Form from './Form';
import Btn from './Btn';

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
      <Btn text={'Ver Proyectos'} route={'/'} />
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
Project.propTypes = {
  data: PropTypes.object,
  handleInput: PropTypes.func,
  handleClickCreateCard: PropTypes.func,
  errorName: PropTypes.string,
  errorSlogan: PropTypes.string,
  errorRepo: PropTypes.string,
  errorDemo: PropTypes.string,
  errorTech: PropTypes.string,
  errorDesc: PropTypes.string,
  errorAutor: PropTypes.string,
  errorJob: PropTypes.string,
  responseUrl: PropTypes.string,
  isHidden: PropTypes.bool,
  avatar: PropTypes.string,
  updateAvatar: PropTypes.func,
  project: PropTypes.string,
  updateProject: PropTypes.func,
};
export default Project;

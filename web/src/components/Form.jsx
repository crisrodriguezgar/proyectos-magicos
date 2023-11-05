import PropTypes from 'prop-types';
import '../styles/layout/Form.scss';
import GetAvatar from './GetAvatar';

const Form = ({
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
  errorPhoto,
  errorImage,
  responseUrl,
  isHidden,
  avatar,
  updateAvatar,
  project,
  updateProject,
  handleReset,
}) => {
  const handleChange = (ev) => {
    const inputId = ev.target.id;
    const inputValue = ev.target.value;
    handleInput(inputId, inputValue);
  };
  return (
    <section className="form">
      <i className="fa-regular fa-trash-can fa-2xl form_trash" onClick={handleReset}></i>
      <h2 className="form_title">Información</h2>

      <section className="form_askInfo">
        <div className="form_askInfo_container">
          <p className="form_askInfo_container-subtitle">
            Cuéntanos sobre el proyecto
          </p>
          <hr className="form_askInfo-line" />
        </div>
      </section>

      <fieldset className="form_project">
        <input
          className="form_project-input"
          type="text"
          placeholder="Nombre del proyecto *"
          name="name"
          id="name"
          value={data.name}
          onChange={handleChange}
          required
        />
        <p className="error">{errorName}</p>
        <input
          className="form_project-input"
          type="text"
          name="slogan"
          id="slogan"
          value={data.slogan}
          placeholder="Slogan *"
          onChange={handleChange}
          required
        />
        <p className="error">{errorSlogan}</p>
        <input
          className="form_project-input"
          type="text"
          name="repo"
          id="repo"
          value={data.repo}
          placeholder="Repo *"
          onChange={handleChange}
          required
        />
        <p className="error">{errorRepo}</p>
        <input
          className="form_project-input"
          type="text"
          placeholder="Demo *"
          name="demo"
          id="demo"
          value={data.demo}
          onChange={handleChange}
          required
        />
        <p className="error">{errorDemo}</p>
        <input
          className="form_project-input"
          type="text"
          placeholder="Tecnologías *"
          name="technologies"
          id="technologies"
          value={data.technologies}
          onChange={handleChange}
          required
        />
        <p className="error">{errorTech}</p>
        <textarea
          maxLength="300"
          className="form_project-textarea"
          type="text"
          placeholder="Descripción * (Máx. 300 caracteres)"
          name="desc"
          id="desc"
          value={data.desc}
          onChange={handleChange}
          required
        ></textarea>
        <p className="error">{errorDesc}</p>
      </fieldset>

      <section className="form_askInfo">
        <p className="form_askInfo-autor">Cuéntanos sobre la autora</p>
        <hr className="form_askInfo-line" />
      </section>

      <fieldset className="form_project">
        <input
          className="form_project-input"
          type="text"
          placeholder="Nombre *"
          name="autor"
          id="autor"
          value={data.autor}
          onChange={handleChange}
          required
        />
        <p className="error">{errorAutor}</p>
        <input
          className="form_project-input"
          type="text"
          placeholder="Trabajo *"
          name="job"
          id="job"
          value={data.job}
          onChange={handleChange}
          required
        />
        <p className="error">{errorJob}</p>
      </fieldset>

      <section className="form_btn">
        <div className="form_btn-first">
          <GetAvatar
            project={project}
            update={updateProject}
            text={'Subir foto del proyecto'}
          />
          <GetAvatar
            avatar={avatar}
            update={updateAvatar}
            text={'Subir foto de la autora'}
          />
        </div>
        <p className="error">{errorPhoto}</p>
        <p className="error">{errorImage}</p>
        <div>
          <button className="form_btn-create" onClick={handleClickCreateCard}>
            Crear Tarjeta
          </button>
        </div>
      </section>

      <section className={`form_card ${isHidden ? 'hidden' : ''}`}>
        <span className="form_card-msg"> La tarjeta ha sido creada:</span>
        <a
          href={responseUrl}
          className="form_card-link"
          target="_blank"
          rel="noreferrer"
        >
          {responseUrl}
        </a>
      </section>
    </section>
  );
};
Form.propTypes = {
  data: PropTypes.object,
  handleInput: PropTypes.func,
  handleClickCreateCard: PropTypes.func,
  handleReset: PropTypes.func,
  errorName: PropTypes.string,
  errorSlogan: PropTypes.string,
  errorRepo: PropTypes.string,
  errorDemo: PropTypes.string,
  errorTech: PropTypes.string,
  errorDesc: PropTypes.string,
  errorAutor: PropTypes.string,
  errorJob: PropTypes.string,
  errorImage: PropTypes.string,
  errorPhoto: PropTypes.string,
  responseUrl: PropTypes.string,
  isHidden: PropTypes.bool,
  avatar: PropTypes.string,
  updateAvatar: PropTypes.func,
  project: PropTypes.string,
  updateProject: PropTypes.func,
};
export default Form;

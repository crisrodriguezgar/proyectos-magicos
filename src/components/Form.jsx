import '../styles/layout/Form.scss';

const Form = ({data, handleInput, handleClickCreateCard, errorName, errorSlogan, errorRepo, errorDemo, errorTech, errorDesc, errorAutor, errorJob, responseUrl, isHidden}) =>{
    return(
        <section className="form">
          <h2 className="form_title">Información</h2>

          <section className="form_askInfo">
            <p className="form_askInfo-subtitle">Cuéntanos sobre el proyecto</p>
            <hr className="form_askInfo-line" />
          </section>

          <fieldset className="form_project">
            <input
              className="form_project-input"
              type="text"
              placeholder="Nombre del proyecto *"
              name="name"
              id="name"
              value={data.name}
              onChange={handleInput}
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
              onChange={handleInput}
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
              onChange={handleInput}
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
              onChange={handleInput}
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
              onChange={handleInput}
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
              onChange={handleInput}
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
              onChange={handleInput}
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
              onChange={handleInput}
              required
            />
            <p className="error">{errorJob}</p>
          </fieldset>

          <section className="form_btn">
            <div className="form_btn-first">
              <button className="form_btn-first-upload">
                Subir foto del proyecto
              </button>
              <button className="form_btn-first-upload">
                Subir foto de la autora
              </button>
            </div>
            <div>
              <button
                className="form_btn-create"
                onClick={handleClickCreateCard}
              >
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
    )
}

export default Form;
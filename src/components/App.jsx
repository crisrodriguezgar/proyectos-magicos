//imports dependencias, imagenes, de otros componentes, de estilos
import cover from '../assets/cover.jpeg';
import logo from '../assets/logo-adalab.png';
import avatar from '../assets/avatar.png';
import icon from '../assets/laptop.svg';
import '../styles/App.scss';
import {useState} from 'react';

function App() {
  // funciones, variables, handles...
  const [data, setData] = useState({
    name: '',
    slogan: '',
    technologies: '',
    desc: '',
    autor: '',
    job: '',
  });
  const [errorName, setErrorName] = useState('');
  const [errorSlogan, setErrorSlogan] = useState('');
  const [errorTech, setErrorTech] = useState('');
  const [errorDesc, setErrorDesc] = useState('');
  const [errorautor, setErrorautor] = useState('');
  const [errorJob, setErrorJob] = useState('');

  const handleInput = (ev) => {
    const inputId = ev.target.id;
    const inputValue = ev.target.value;
    setData({...data, [inputId]: inputValue});
  };

  const handleClickCreateCard = () => {
    if (data.name === '') {
      setErrorName('Necesitamos saber el nombre de tu proyecto');
    } else {
      setErrorName('');
    }
    if (data.slogan === '') {
      setErrorSlogan('Déjanos saber tu original slogan');
    } else {
      setErrorSlogan('');
    }
    if (data.technologies === '') {
      setErrorTech('Cuéntanos que tecnologías manejas');
    } else {
      setErrorTech('');
    }
    if (data.desc === '') {
      setErrorDesc('Queremos conocer un poco más de tu proyecto');
    } else {
      setErrorDesc('');
    }
    if (data.autor === '') {
      setErrorautor('¿Cuál es tu nombre?');
    } else {
      setErrorautor('');
    }
    if (data.job === '') {
      setErrorJob('¿A qué te dedicas?');
    } else {
      setErrorJob('');
    }
  };

  //html
  return (
    <div className="container">
      <header className="header">
        <div className='header_left'>
          <i className="fa-solid fa-laptop-code fa-2xl header_left-icon"></i>
          <p className="header_left-text">Proyectos Molones</p>
        </div>
        <img className="header_logo" src={logo} alt="Logo Adalab" />
      </header>
      <main className="main">
        <section className="intro">
          <h1 className="intro_title">Proyectos Molones</h1>
          <p className="intro_text">
            Escaparate en línea para recoger ideas a través de la tecnología.
          </p>
          <button className="intro_btn">Ver Proyectos</button>
        </section>
        <section className="preview">
          <img className="preview_image" src={cover} alt="" />

          <section className="preview_autor">
            <section className="infoProject">
              <div className="infoProject_container">
                <hr className="infoProject_container-line1" />
                <p className="infoProject_container-subtitle">
                  Personal Project Card
                </p>
                <hr className="infoProject_container-line2" />
              </div>

              <h2 className="infoProject_title">
                {data.name || 'Elegant Workspace'}
              </h2>
              <p className="infoProject_slogan">
                {data.slogan || 'Diseños Exclusivos'}
              </p>
              <p className="infoProject_desc">
                {data.desc ||
                  `Gestión de proyectos en línea, diseñado para simplificar y agilizar tu trabajo como programadora. Con solo crear una tarjeta para cada proyecto, podrás organizarlos de manera eficiente. ¡Optimiza tu productividad y alcanza tus metas de manera efectiva con nosotras!`}
              </p>
              <section className="technologies">
                <p className="technologies_text">
                  {data.technologies || 'React JS - HTML - CSS'}
                </p>
              </section>
            </section>

            <section className="infoAutor">
              <img className="infoAutor_image" src={avatar} alt="" />
              <p className="infoAutor_job">
                {data.job || 'Full Stack Developer'}
              </p>
              <p className="infoAutor_name">
                {data.autor || 'Emmelie Björklund'}
              </p>
            </section>
          </section>
        </section>

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
              placeholder="Repo *"
              onChange={handleInput}
              required
            />
            <p className="error"></p>
            <input
              className="form_project-input"
              type="text"
              placeholder="Demo *"
              name="demo"
              id="demo"
              onChange={handleInput}
              required
            />
            <p className="error"></p>
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
              className="form_project-textarea"
              type="text"
              placeholder="Descripción *"
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
            <p className="error">{errorautor}</p>
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
            <div>
              <button className="form_btn-upload">
                Subir foto del proyecto
              </button>
              <button className="form_btn-upload">
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

          <section className="form_card hidden">
            <span className=""> La tarjeta ha sido creada: </span>
            <a href="" className="" target="_blank" rel="noreferrer">
              {' '}
            </a>
          </section>
        </section>
      </main>
      <footer className="footer">
        <img className="footer_img" src={logo} alt="" />
      </footer>
    </div>
  );
}

export default App;

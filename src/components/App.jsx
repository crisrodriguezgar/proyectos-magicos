//imports dependencias, imagenes, de otros componentes, de estilos
import cover from '../assets/cover.jpeg';
import user from '../assets/user.jpeg';
import '../styles/App.scss';
import { useState } from 'react';

function App() {
  // funciones, variables, handles...
  const [name, setName] = useState('');
  const [slogan, setSlogan] = useState('');
  const [technologies, setTechnologies] = useState('');
  const [desc, setDesc] = useState('');
  const [author, setAuthor] = useState('');
  const [job, setJob] = useState('');
  const [errorName, setErrorName] = useState (''); 
  const [errorSlogan, setErrorSlogan] = useState (''); 
  const [errorTech, setErrorTech] = useState (''); 
  const [errorDesc, setErrorDesc] = useState (''); 
  const [errorAuthor, setErrorAuthor] = useState (''); 
  const [errorJob, setErrorJob] = useState (''); 
  
  const handleInput = (ev) => {
    const inputId = ev.target.id;
    console.log(inputId);
    if (inputId === 'name') {
      setName(ev.target.value);
    } else if (inputId === 'slogan') {
      setSlogan(ev.target.value);
    } else if (inputId === 'technologies') {
      setTechnologies(ev.target.value);
    } else if (inputId === 'desc') {
      setDesc(ev.target.value);
    } else if (inputId === 'author') {
      setAuthor(ev.target.value);
    } else if (inputId === 'job') {
      setJob(ev.target.value);
    }
  };

  const handleClickCreateCard = () => {
    if (name === '') {
      setErrorName('Necesitamos saber el nombre de tu proyecto');
    } else {
      setErrorName('');
    }
    if (slogan === '') {
      setErrorSlogan('Déjanos saber tu original slogan');
    }else {
      setErrorSlogan('');
    }
    if (technologies === '') {
      setErrorTech('Cuéntanos que tecnologías manejas');
    } else {
      setErrorTech('');
    }
    if (desc === '') {
      setErrorDesc('Queremos conocer un poco más de tu proyecto');
    } else {
      setErrorDesc('');
    }
    if (author === '') {
      setErrorAuthor('¿Cuál es tu nombre?');
    } else {
      setErrorAuthor('');
    }
    if (job === '') {
      setErrorJob('¿A qué te dedicas?');
    }else {
      setErrorJob('');
    }
    console.log('he hecho click');
  };

  //html
  return (
    <div className="container">
      <header className="header">
        <p className="header_text">Proyectos Molones</p>
      </header>
      <main className="main">
        <section className="preview">
          <img className="preview_image" src={cover} alt="" />

          <section className="preview_autor">
            <section className="infoProject">
              <p className="infoProject_subtitle">Personal Project Card</p>
              <hr className="infoProject_line" />

              <h2 className="infoProject_title">{name || 'Elegant Workspace'}</h2>
              <p className="infoProject_slogan">{slogan || 'Diseños Exclusivos'}</p>
              <p className="infoProject_desc">
                {desc ||
                  `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Libero, delectus? Voluptates at hic aliquam porro ad suscipit
                harum laboriosam saepe earum doloribus aperiam, ullam culpa
                accusantium placeat odit corrupti ipsum!`}
              </p>
              <section className="technologies">
                <p className="technologies_text">{technologies || 'React JS, MongoDB'}</p>
              </section>
            </section>

            <section className="info-autor">
              <img className="image" src={user} alt="" />
              <p className="job">{job || 'Full Stack Developer'}</p>
              <p className="name">{author || 'Emmelie Björklund'}</p>
            </section>
          </section>
        </section>

        <section className="form">
          <h2 className="title">Información</h2>

          <section className="askInfo">
            <p className="askInfo_subtitle">Cuéntanos sobre el proyecto</p>
            <hr className="askInfo_line" />
          </section>

          <fieldset className="project">
            <input
              className="input"
              type="text"
              placeholder="Nombre del proyecto *"
              name="name"
              id="name"
              value={name}
              onChange={handleInput}
              required
            />
            <p className='error'>{errorName}</p>
            <input
              className="input"
              type="text"
              name="slogan"
              id="slogan"
              value={slogan}
              placeholder="Slogan *"
              onChange={handleInput}
              required
            />
            <p className='error'>{errorSlogan}</p>
            <input
              className="input"
              type="text"
              name="repo"
              id="repo"
              placeholder="Repo *"
              onChange={handleInput}
              required
            />
            <p className='error'></p>
            <input
              className="input"
              type="text"
              placeholder="Demo *"
              name="demo"
              id="demo"
              onChange={handleInput}
              required
            />
            <p className='error'></p>
            <input
              className="input"
              type="text"
              placeholder="Tecnologías *"
              name="technologies"
              id="technologies"
              value={technologies}
              onChange={handleInput}
              required
            />
            <p className='error'>{errorTech}</p>
            <textarea
              className="textarea"
              type="text"
              placeholder="Descripción *"
              name="desc"
              id="desc"
              value={desc}
              onChange={handleInput}
              required
            ></textarea>
            <p className='error'>{errorDesc}</p>
          </fieldset>

          <section className="ask-info">
            <p className="subtitle">Cuéntanos sobre la autora</p>
            <hr className="line" />
          </section>

          <fieldset className="autor">
            <input
              className="input"
              type="text"
              placeholder="Nombre *"
              name="author"
              id="author"
              value={author}
              onChange={handleInput}
              required
            />
            <p className='error'>{errorAuthor}</p>
            <input
              className="input"
              type="text"
              placeholder="Trabajo *"
              name="job"
              id="job"
              value={job}
              onChange={handleInput}
              required
            />
            <p className='error'>{errorJob}</p>
          </fieldset>

          <section className="buttons-img">
            <button className="btn">Subir foto de proyecto</button>
            <button className="btn">Subir foto de autora</button>
          </section>
          <section className="buttons-img">
            <button className="btn-large" onClick={handleClickCreateCard}>
              Crear Tarjeta
            </button>
          </section>

          <section className="card">
            <span className=""> La tarjeta ha sido creada: </span>
            <a href="" className="" target="_blank" rel="noreferrer">
              {' '}
            </a>
          </section>
        </section>
      </main>
    </div>
  );
}

export default App;

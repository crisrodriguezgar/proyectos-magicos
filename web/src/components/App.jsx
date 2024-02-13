
//imports dependencias, imagenes, de otros componentes, de estilos
import {Route, Routes} from 'react-router-dom';
import React, {useState} from 'react';

import '../styles/App.scss';
import objectApi from '../services/api';
import Project from './Project';
import ls from '../services/localStorage';
import Header from './Header';
import Footer from './Footer';
import Intro from './Intro';
import Landing from './Landing';
import CreateTrail from './CreateTrail';

function App() {
  // funciones, variables, handles...
  const localStorageData = ls.get('data', {
    name: '',
    slogan: '',
    technologies: '',
    repo: '',
    demo: '',
    desc: '',
    autor: '',
    job: '',
    photo: '',
    image: '',
  });

  const [data, setData] = useState(localStorageData);
  const [errorName, setErrorName] = useState('');
  const [errorSlogan, setErrorSlogan] = useState('');
  const [errorTech, setErrorTech] = useState('');
  const [errorDesc, setErrorDesc] = useState('');
  const [errorRepo, setErrorRepo] = useState('');
  const [errorDemo, setErrorDemo] = useState('');
  const [errorAutor, setErrorAutor] = useState('');
  const [errorJob, setErrorJob] = useState('');
  const [errorPhoto, setErrorPhoto] = useState('');
  const [errorImage, setErrorImage] = useState('');
  const [responseUrl, setResponseUrl] = useState('');
  const [isHidden, setIsHidden] = useState(true);
  const [avatar, setAvatar] = useState('');

  const updateAvatar = (avatar) => {
    setAvatar(avatar);
    data.image = avatar;
    ls.set('data', {...data, image: avatar});
  };
  const [project, setProject] = useState('');
  const updateProject = (project) => {
    setProject(project);
    data.photo = project;
    ls.set('data', {...data, photo: project});
  };

  const handleInput = (inputId, inputValue) => {
    setData({...data, [inputId]: inputValue});
    ls.set('data', {...data, [inputId]: inputValue});
  };

  const handleReset = () => {
    const emptyData = {
      name: '',
      slogan: '',
      technologies: '',
      repo: '',
      demo: '',
      desc: '',
      autor: '',
      job: '',
      photo: '',
      image: '',
    };
    setErrorName('');
    setErrorSlogan('');
    setErrorRepo('');
    setErrorDemo('');
    setErrorDesc('');
    setErrorImage('');
    setErrorJob('');
    setErrorPhoto('');
    setErrorAutor('');
    setErrorTech('');
    ls.clear();
    setIsHidden(true);
    setData(emptyData);
  };

  const handleClickCreateCard = () => {
    const regexAlf = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s\-']+$/;
    const regexUrl = /^(https?|ftp):\/\/[^\s$?#][^\s]*$/;
    let isValid = true;
    if (data.name === '') {
      setErrorName('Necesitamos saber el nombre de tu proyecto');
      isValid = false;
    } else if (!regexAlf.test(data.name)) {
      setErrorName(
        'El nombre no debe contener números, ni caracteres especiales'
      );
      isValid = false;
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
    if (data.repo === '') {
      setErrorRepo('Incluye la url de tu repo');
      isValid = false;
    } else if (!regexUrl.test(data.repo)) {
      setErrorRepo(
        'La url debe de ser algo como "https://github.com/Adalab/project-promo-u-module-3-team-2"'
      );
      isValid = false;
    } else {
      setErrorRepo('');
    }
    if (data.demo === '') {
      setErrorDemo('Por favor, añade el enlace de tu página');
      isValid = false;
    } else if (!regexUrl.test(data.demo)) {
      setErrorDemo(
        'La url debe de ser algo como "https://beta.adalab.es/project-promo-U-module-3-team-2"'
      );
      isValid = false;
    } else {
      setErrorDemo('');
    }
    if (data.autor === '') {
      setErrorAutor('¿Cuál es tu nombre?');
      isValid = false;
    } else if (!regexAlf.test(data.autor)) {
      setErrorAutor(
        'El nombre no debe contener números, ni caracteres especiales'
      );
      isValid = false;
    } else {
      setErrorAutor('');
    }
    if (data.job === '') {
      setErrorJob('¿A qué te dedicas?');
      isValid = false;
    } else if (!regexAlf.test(data.job)) {
      setErrorJob(
        'El trabajo no debe contener números, ni caracteres especiales'
      );
      isValid = false;
    } else {
      setErrorJob('');
    }
    if (data.photo === '') {
      setErrorPhoto('Por favor, añade una foto de tu proyecto');
    } else {
      setErrorPhoto('');
    }
    if (data.image === '') {
      setErrorImage('Por favor, añade una foto de perfil');
    } else {
      setErrorImage('');
    }
    if (isValid) {
      objectApi.post(data).then((response) => {
        // Cuando la API responde guardamos los datos en el estado para que se vuelva a renderizar el componente

        setResponseUrl(response);
        if (response !== undefined) {
          setIsHidden(false);
        }
        console.log(response);
      });
    } else {
      setIsHidden(true);
    }
  };

  const [projectFilter, setProjectFilter] = useState(
    ls.get('movieFilterLS', '')
  );

  const handleChange = (value) => {
    setProjectFilter(value);
    //console.log(value);
  };

  //html
  return (
    <div className="container">
      {/* <CreateTrail /> */}
      <Header />
      <main className="main">
        <Intro />
        <Routes>
          <Route
            path="/"
            element={
              <Landing
                handleChange={handleChange}
                projectFilter={projectFilter}
              />
            }
          />

          <Route
            path="/project"
            element={
              <Project
                data={data}
                handleInput={handleInput}
                handleClickCreateCard={handleClickCreateCard}
                handleReset={handleReset}
                errorName={errorName}
                errorSlogan={errorSlogan}
                errorRepo={errorRepo}
                errorDemo={errorDemo}
                errorTech={errorTech}
                errorDesc={errorDesc}
                errorAutor={errorAutor}
                errorJob={errorJob}
                errorPhoto={errorPhoto}
                errorImage={errorImage}
                responseUrl={responseUrl}
                isHidden={isHidden}
                avatar={avatar}
                updateAvatar={updateAvatar}
                project={project}
                updateProject={updateProject}
              />
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
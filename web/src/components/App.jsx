//imports dependencias, imagenes, de otros componentes, de estilos
import {Route, Routes} from 'react-router-dom';
import React, {useState, useEffect} from 'react';

import '../styles/App.scss';
import callToApi from '../services/api';
import Project from './Project';
import ls from '../services/localStorage';
import Header from './Header';
import Footer from './Footer';
import Intro from './Intro';
import Landing from './Landing';

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
  const [trail, setTrail] = useState([]);
  const [scrollY, setScrollY] = useState(0);

  /* efecto mágico */

  const handleMouseMove = (e) => {
    const newPoint = {x: e.clientX, y: e.clientY + scrollY, id: Date.now()};
    setTrail((prevTrail) => {
      const trailLength = 40; // Ajusta la longitud de la estela
      if (prevTrail.length >= trailLength) {
        prevTrail.shift(); // Elimina el punto más antiguo si la longitud máxima se alcanza
      }
      const maxTimeDiff = 100; // Ajusta el tiempo máximo entre puntos
      const filteredTrail = prevTrail.filter(
        (point) => Date.now() - point.id < maxTimeDiff
      );
      return [...filteredTrail, newPoint];
    });
  };

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTrail((prevTrail) => {
        const currentTime = Date.now();
        return prevTrail.filter((point) => currentTime - point.id < 1000);
      });
    }, 100);

    document.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, [scrollY]);

  ///

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

  const handleClickCreateCard = () => {
    const regexAlf = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s\-']+$/;
    const regexUrl = /^(https?|ftp):\/\/[^\s$?#][^\s]*$/;
    if (data.name === '') {
      setErrorName('Necesitamos saber el nombre de tu proyecto');
    } else if (!regexAlf.test(data.name)) {
      setErrorName(
        'El nombre no debe contener números, ni caracteres especiales'
      );
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
    } else if (!regexUrl.test(data.repo)) {
      setErrorRepo(
        'La url debe de ser algo como "https://github.com/Adalab/project-promo-u-module-3-team-2"'
      );
    } else {
      setErrorRepo('');
    }
    if (data.demo === '') {
      setErrorDemo('Por favor, añade el enlace de tu página');
    } else if (!regexUrl.test(data.demo)) {
      setErrorDemo(
        'La url debe de ser algo como "https://beta.adalab.es/project-promo-U-module-3-team-2"'
      );
    } else {
      setErrorDemo('');
    }
    if (data.autor === '') {
      setErrorAutor('¿Cuál es tu nombre?');
    } else if (!regexAlf.test(data.autor)) {
      setErrorAutor(
        'El nombre no debe contener números, ni caracteres especiales'
      );
    } else {
      setErrorAutor('');
    }
    if (data.job === '') {
      setErrorJob('¿A qué te dedicas?');
    } else if (!regexAlf.test(data.job)) {
      setErrorJob(
        'El trabajo no debe contener números, ni caracteres especiales'
      );
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
    callToApi(data).then((response) => {
      // Cuando la API responde guardamos los datos en el estado para que se vuelva a renderizar el componente
      setResponseUrl(response);
      if (response !== undefined) {
        setIsHidden(false);
      }
      console.log(response);
    });
  };

  //html
  return (
    <div className="container">
      {trail.map((point, index) => (
        <div
          key={index}
          className="trail"
          style={{
            left: point.x + 'px',
            top: point.y + 'px',
            width: '15px', // Ancho de la estela
            height: '15px', // Altura de la estela
            borderRadius: '100%', // Hace que la estela sea redonda
          }}
        />
      ))}
      <Header />
      <main className="main">
        <Intro />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Landing />
              </>
            }
          />
          <Route
            path="/project"
            element={
              <Project
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

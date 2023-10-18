//imports dependencias, imagenes, de otros componentes, de estilos
import '../styles/App.scss';
import callToApi from '../services/api';
import { useState } from 'react';
import Project from './Project';
import ls from '../services/localStorage';

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
    photo:
      'https://images.pexels.com/photos/3194519/pexels-photo-3194519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    image:
      'https://images.pexels.com/photos/6393342/pexels-photo-6393342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
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
  const [responseUrl, setResponseUrl] = useState('');
  const [isHidden, setIsHidden] = useState(true);

  const handleInput = (ev) => {
    const inputId = ev.target.id;
    const inputValue = ev.target.value;
    setData({ ...data, [inputId]: inputValue });
    ls.set('data', { ...data, [inputId]: inputValue });
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
    if (data.repo === '') {
      setErrorRepo('Incluye la url de tu repo');
    } else {
      setErrorRepo('');
    }
    if (data.demo === '') {
      setErrorDemo('Por favor, añade el enlace de tu página');
    } else {
      setErrorDemo('');
    }
    if (data.autor === '') {
      setErrorAutor('¿Cuál es tu nombre?');
    } else {
      setErrorAutor('');
    }
    if (data.job === '') {
      setErrorJob('¿A qué te dedicas?');
    } else {
      setErrorJob('');
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
    <div>
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
        responseUrl={responseUrl}
        isHidden={isHidden}
      />
    </div>
  );
}

export default App;

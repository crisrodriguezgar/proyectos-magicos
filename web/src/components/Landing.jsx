import '../styles/layout/Landing.scss';
import Btn from './Btn';
import Card from './Card';
import objectApi from '../services/api';
import { useEffect, useState } from 'react';

const Landing = () => {
  const [dataProjects, setDataProjects] = useState([]);

  useEffect(() => {
    objectApi.get().then((response) => {
      setDataProjects(response);
      console.log(dataProjects);
    });
  }, []);

  const data1 = {
    name: 'El Rincón de las Brujas Risueñas',
    slogan: '"Donde la magia se encuentra con el humor"',
    technologies: 'HTML - CSS - JavaScript - React',
    repo: 'https://github.com/Adalab/project-promo-U-module-3-team-2',
    demo: 'https://beta.adalab.es/project-promo-U-module-3-team-2/',
    desc: 'En el Rincón de las Brujas Risueñas, Lilith Blackspell lidera un aquelarre de brujas cómicas en la creación de un sitio web mágico lleno de hechizos humorísticos y travesuras encantadoras. Únete a nosotros para una experiencia web única donde la comedia y la brujería se fusionan para embrujar tu día con risas',
    autor: 'Lilith Blackspell',
    job: 'Maestra de la Web Bruja',
    image: '',
  };
  return (
    <>
      <Btn text={'Nuevo Proyecto'} route={'/project'} />
      <section className="preview previewLanding">
        <Card data={data1} autorLanding="autorLanding" />
        <Card data={data1} autorLanding="autorLanding" />
        <Card data={data1} autorLanding="autorLanding" />
        <Card data={data1} autorLanding="autorLanding" />
      </section>
    </>
  );
};

export default Landing;

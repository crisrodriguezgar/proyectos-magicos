import '../styles/layout/Landing.scss';
import Btn from './Btn';
import FakeCard from './FakeCard';
import avatarb from '../assets/avatarb.png';
import avatarb1 from '../assets/avatarb1.png';
import avatarb2 from '../assets/avatarb2.png';
import avatarb3 from '../assets/avatarb3.png';

const Landing = () => {
  return (
    <>
      <Btn text={'Nuevo Proyecto'} route={'/project'} />
      <section className="containerFake">
        <FakeCard
          avatar={avatarb}
          title="El Rincón de las Brujas Risueñas"
          slogan="'Donde la magia se encuentra con el humor' "
          desc="En el Rincón de las Brujas Risueñas, Lilith Blackspell lidera un aquelarre de brujas cómicas en la creación de un sitio web mágico lleno de hechizos humorísticos y travesuras encantadoras. Únete a nosotros para una experiencia web única donde la comedia y la brujería se fusionan para embrujar tu día con risas"
          tech="HTML - CSS - JavaScript - React"
          job="Maestra de la Web Bruja"
          name="Lilith Blackspell"
        />
        <FakeCard
          avatar={avatarb1}
          title="Risas Encantadas"
          slogan="'Elixir de risas en una noche embrujada'"
          desc="Bienvenidos a 'Risas Encantadas', un rincón mágico donde nuestro aquelarre de brujas cómicas se unen para conjurar un sitio web repleto de hechizos humorísticos y carcajadas embrujadas. Explora esta experiencia web única donde la comedia se entrelaza con la brujería para embrujar tu día con risas y entretenimiento mágico."
          tech="PHP - CSS - HTML"
          job="Hechicera del Código"
          name="Selene Ravenscroft"
        />
        <FakeCard
          avatar={avatarb2}
          title="Conjuros de Terror"
          slogan="'Hechizos de miedo te embrujarán'"
          desc="Web donde la maestra de la brujería oscura, lidera un aquelarre de brujas en la creación de un sitio web mágico lleno de hechizos de terror y sustos embrujadores. Explora esta experiencia web única donde el miedo se mezcla con la brujería para embrujar tu día con sustos y entretenimiento mágico"
          tech="PYTHON - CSS - HTML"
          job=" Maestra de la Bruma Oscura"
          name="Morgana Blackwood"
        />
        <FakeCard
          avatar={avatarb3}
          title="El Abismo de los Horrores: Portal Siniestro en la Web"
          slogan="'Adéntrate en el oscuro abismo virtual del miedo absoluto'"
          desc="Un portal que te sumergirá en un mundo virtual oscuro donde criaturas aterradoras, misterios sobrenaturales y eventos paranormales cobran vida. Prepárate para viajar a través de cuentos y experiencias de miedo, donde el suspense y la sorpresa te mantendrán al borde de tu asiento. "
          tech="React - Node.js y bases de datos de terror"
          job="Maestra del Terror en la Web"
          name="Isabella Darkthorn"
        />
      </section>
    </>
  );
};

export default Landing;

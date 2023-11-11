import defaultAvatar from '../assets/avatar.png';
import PropTypes from 'prop-types';
const Card = ({data, autorLanding, mostrarIcono}) => {
  const avatarAutor = data.image === '' ? defaultAvatar : data.image;
  return (
    <section className={`preview_autor ${autorLanding}`}>
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
          <a href={data.demo} target="_blank" rel="noreferrer">
            <button className="technologies_icon">
              <i className="fa-solid fa-globe technologies_icon-img"></i>
            </button>
          </a>
          <a href={data.repo} target="_blank" rel="noreferrer">
            <button className="technologies_icon">
              <i className="fa-brands fa-github technologies_icon-img"></i>
            </button>
          </a>
        </section>
      </section>

      <section className="infoAutor">
        <div
          className="infoAutor_image"
          style={{backgroundImage: `url(${avatarAutor})`}}
        ></div>
        <p className="infoAutor_job">{data.job || 'Full Stack Developer'}</p>
        <p className="infoAutor_name">{data.autor || 'Emmelie Björklund'}</p>
        {mostrarIcono ? (
          <i className="fa-solid fa-trash-can fa-2xl iconTrash"></i>
        ) : null}
      </section>
    </section>
  );
};
Card.propTypes = {
  data: PropTypes.object,
  autorLanding: PropTypes.string,
};
export default Card;

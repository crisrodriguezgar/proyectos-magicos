import '../styles/layout/CardPreview.scss';
import cover from '../assets/cover.jpeg';
import avatar from '../assets/avatar.png';
import Profile from './Profile';

const CardPreview = ({data, project, avatar}) =>{
    return(
        <section className="preview">
          <Profile project={project} />
          {/* <img className="preview_image" src={cover} alt="" /> */}

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
            <Profile avatar={avatar} />
              {/* <img className="infoAutor_image" src={avatar} alt="" /> */}
              <p className="infoAutor_job">
                {data.job || 'Full Stack Developer'}
              </p>
              <p className="infoAutor_name">
                {data.autor || 'Emmelie Björklund'}
              </p>
            </section>
          </section>
        </section>
    )
}

export default CardPreview;
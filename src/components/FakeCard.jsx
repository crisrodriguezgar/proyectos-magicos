import PropTypes from 'prop-types';
const FakeCard = ({avatar, title, slogan, desc, tech, job, name}) => {
  return (
    <>
      <section className="fakePreview">
        <section className="fakePreview_info">
          <div className="fakePreview_info-container">
            <p className="fakePreview_info-container-subtitle">
              Personal Project Card
            </p>
          </div>

          <h2 className="fakePreview_info-title">{title}</h2>
          <p className="fakePreview_info-slogan">{slogan}</p>
          <p className="fakePreview_info-desc">{desc}</p>
          <section className="fakeTechnologies">
            <p className="fakeTechnologies_text">{tech}</p>
          </section>
        </section>

        <section className="fakePreview_infoAutor">
          <img src={`${avatar}`} className="fakePreview_infoAutor-image"></img>
          <p className="fakePreview_infoAutor-job">{job}</p>
          <p className="fakePreview_infoAutor-name">{name}</p>
        </section>
      </section>
    </>
  );
};
FakeCard.propTypes = {
  avatar: PropTypes.string,
  title: PropTypes.string,
  slogan: PropTypes.string,
  desc: PropTypes.string,
  tech: PropTypes.string,
  job: PropTypes.string,
  name: PropTypes.string,
};
export default FakeCard;

import Header from './Header';
import Footer from './Footer';
import Intro from './Intro';
import CardPreview from './CardPreview';
import Form from './Form';

const Project = ({data, handleInput, handleClickCreateCard, errorName, errorSlogan, errorRepo, errorDemo, errorTech, errorDesc, errorAutor, errorJob, responseUrl, isHidden, avatar, updateAvatar, project, updateProject}) => {
  return (
    <div className="container">
      <Header/>
      <main className="main">
        <Intro/>
        <CardPreview data={data} avatar={avatar}  project={project} />
        <Form 
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
        avatar={avatar} 
        updateAvatar= {updateAvatar}
        project={project} 
        updateProject= {updateProject}
        />
      </main>
      <Footer/>
    </div>
  );
};

export default Project;

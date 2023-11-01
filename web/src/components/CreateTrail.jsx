import React, {useState, useEffect} from 'react';
import '../styles/layout/CreateTrail.scss';

const CreateTrail = () => {
  const [trail, setTrail] = useState([]);
  const [scrollY, setScrollY] = useState(0);

  /* efecto mágico */

  const handleMouseMove = (e) => {
    const newPoint = {x: e.clientX, y: e.clientY + scrollY, id: Date.now()};
    setTrail((prevTrail) => {
      const trailLength = 30; // Ajusta la longitud de la estela
      if (prevTrail.length >= trailLength) {
        prevTrail.shift(); // Elimina el punto más antiguo si la longitud máxima se alcanza
      }
      const maxTimeDiff = 150; // Ajusta el tiempo máximo entre puntos
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

  return (
    <div>
      {trail.map((point, index) => (
        <div
          key={index}
          className="trail"
          style={{
            left: point.x + 'px',
            top: point.y + 'px',
            width: '15px', // Ancho de la estela
            height: '15px', // Altura de la estela
            //borderRadius: '100%', // Hace que la estela sea redonda
          }}
        />
      ))}
    </div>
  );
};

export default CreateTrail;

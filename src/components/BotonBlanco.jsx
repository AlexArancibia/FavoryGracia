import React, { useEffect , useState  } from 'react';
import { Link , useLocation  } from 'react-router-dom';

function BotonBlanco({ text, path, className,color }) {
  const { hash } = useLocation();

  const scrollToElement = (e) => {
    e.preventDefault();
    const targetHash = e.target.hash || hash;
    const elemento = document.querySelector(targetHash);
    if (elemento) {
      elemento.scrollIntoView({ behavior: "smooth" });

      // Opcional: Actualizar el hash en la URL
      window.history.replaceState(null, null, targetHash);
    }
  };

  useEffect(() => {
    if (hash) {
      const elemento = document.querySelector(hash);
      if (elemento) {
        elemento.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);
    
  return (
    <div className={`flex items-center justify-start ${className}`}>
      <Link
        to={path}
        onClick={scrollToElement}
        className={`text-${color} border-2 border-${color} border hover:bg-white hover:text-orange-600 transition duration-500 ease-in-out transform px-5 py-2 rounded-lg`}
      >
        {text}
      </Link>
    </div>
  );
}

export default BotonBlanco;

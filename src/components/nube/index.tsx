import React, { useEffect, useState } from 'react';

export const NuvePalabras:React.FC<{}> = () => {
  const [iframeHeight, setIframeHeight] = useState('40rem');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIframeHeight('80rem');
      } else {
        setIframeHeight('40rem');
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <iframe
      src="https://segundopaladines.github.io/NuvePalabras/"
      title="Contenido incrustado"
      style={{
        width: '125%',
        height: iframeHeight,
        border: 'none',
        transform: 'scale(0.8) translateX(-12.5%)',
      }}
      scrolling="no"
    />
  );
};

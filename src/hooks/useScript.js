import { useState, useEffect } from 'react';

const useScripts = (urls) => {
  // Définir les états avec useState() pour suivre le chargement et les erreurs.
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Si la liste est vide, on considère que c'est déjà chargé.
    if (!urls || urls.length === 0) {
      setLoaded(true);
      return;
    }

    // Définir les variables de suivi à l'intérieur de l'effet
    let loadedCount = 0;
    let hasError = false;

    const onScriptLoad = () => {
      loadedCount++;
      if (loadedCount === urls.length) {
        setLoaded(true);
      }
    };

    const onScriptError = () => {
      hasError = true;
      setError(true);
    };

    const scripts = [];

    urls.forEach(url => {
      const script = document.createElement('script');
      script.src = url;
      script.async = false;

      script.addEventListener('load', onScriptLoad);
      script.addEventListener('error', onScriptError);

      document.body.appendChild(script);
      scripts.push(script);
    });

    // Fonction de nettoyage
    return () => {
      scripts.forEach(script => {
        script.removeEventListener('load', onScriptLoad);
        script.removeEventListener('error', onScriptError);
        document.body.removeChild(script);
      });
    };
  }, [urls]);

  // Retourner les états pour qu'ils puissent être utilisés dans le composant
  return [loaded, error];
};

export default useScripts;